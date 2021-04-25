import React from 'react';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import rapunzelSrc from '../assets/imgs/rapunzel_main.png';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { DateTime } from 'luxon';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

function MainPage() {
    const classes = useStyles();

    const handleClick = () => {
        window.app.startTime = DateTime.now();
    };

    return (
        <div className={classes.root}>
            <div>
                <Typography align={'left'} variant="h3" gutterBottom component="h1">
                    Привет! <br/>
                </Typography>
                <Typography style={{ fontWeight: 300 }} align={'left'} variant="h4" component="p">
                    Спасибо, что согласился принять участие в исследовании. <br />
                    Оно займет всего 10 минут. <br/>
                    Твоя задача — найти изображение с Рапунцель.
                </Typography>
                <br />
                <Typography align={'left'} variant="h4" component="p">
                    Нажми <Button component={Link} to="cartoons/1" variant="outlined" onClick={handleClick}>Начать</Button> если готов!
                </Typography>
            </div>
            <img src={rapunzelSrc} alt="rapunzel" width={650} height={640} />
        </div>
    );
}

export default MainPage;
