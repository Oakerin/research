import React, { useEffect, useState } from 'react';
import { getCartoons } from '../utils/cartoons';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import makeStyles from '@material-ui/styles/makeStyles';
import Button from '@material-ui/core/Button';
import { useHistory, useParams } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import uniqid from 'uniqid';
import { DateTime, Interval } from 'luxon';
import checkSrc from '../assets/imgs/check.png';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    grid: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden'
    },
    bar: {
        borderRadius: 14
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    buttonNext: {
        marginTop: 32
    },
    img: {
        cursor: 'pointer'
    },
    checkImg: {
        position: 'absolute',
        top: 0
    }
});

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const CartoonsPage = () => {
    const history = useHistory();
    const classes = useStyles();
    const { id } = useParams();
    const [cartoons, setCartoons] = useState(getCartoons(id));
    const [open, setOpen] = useState(false);
    const lastPageId = '2';

    useEffect(() => {
        setCartoons(getCartoons(id));
    }, [id]);

    const handleImgClick = (val) => () => {
        if (val.clickable) {
            setOpen(true);

            setTimeout(() => {
                setOpen(false);
                history.push('/cartoons/' + (+id+1));
            }, 500);
        }

        if (id === lastPageId) {
            let newCartoons = [ ...cartoons ];
            newCartoons[val.id-1].checked = !newCartoons[val.id-1].checked;
            setCartoons(newCartoons);
        }
    };

    const handleFinish = () => {
        const names = cartoons.filter(c => c.checked).map(c => c.name);
        console.log(names); // Push to firebase

        window.app.endTime = DateTime.now();

        const i = Interval.fromDateTimes(window.app.startTime, window.app.endTime);
        const data = {
            imgs: names.length ? names : '-',
            time: i.length('seconds')
        };

        window.database.ref('data/' + uniqid()).set(data);
        console.log(data);

        history.push('/finish');
    };

    return (
        <div className={classes.root}>
            <div className={classes.grid}>
                {id === lastPageId && (
                        <>
                            <Typography variant="h5" style={{ marginBottom: 32 }}>
                                Заметил ли ты какие-то изменения? <br/> Если да, нажми на те картинки, которые изменились. <br /> Если нет, нажми ЗАКОНЧИТЬ!
                            </Typography>
                        </>
                    )
                }

                <GridList cellHeight={354} cols={5} spacing={46}>
                    {cartoons.map((cartoon) => (
                        <GridListTile key={cartoon.id} onClick={handleImgClick(cartoon)}>
                            <img className={classes.img} src={cartoon.src} alt={cartoon.name} />
                            {cartoon.checked && <img className={classes.checkImg} src={checkSrc} alt="check" />}
                        </GridListTile>
                    ))}
                </GridList>

            </div>
            <div>
                {id === lastPageId && (
                        <Button
                            onClick={handleFinish}
                            className={classes.buttonNext}
                            color="primary"
                            variant="contained"
                        >
                            Закончить
                        </Button>
                    )
                }
            </div>

            <Dialog fullScreen open={open} TransitionComponent={Transition} />
        </div>
    );
};
