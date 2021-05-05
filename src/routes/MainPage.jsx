import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import rapunzelSrc from '../assets/imgs/rapunzel_main.png';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { DateTime } from 'luxon';
import { getRandomInt } from '../utils/getRandomInt';
import { requestFullscreen } from '../utils/toggleFullscreen';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

function MainPage() {
    const classes = useStyles();
    const history = useHistory();

    useEffect(() => {
        const callback = (event) => {
            const keyName = event.key;

            if (keyName === ' ') {
                requestFullscreen();
                window.app.startTime = DateTime.now();
                history.push('/squares');
            }
        };

         window.addEventListener('keypress', callback);

         return () => window.removeEventListener('keypress', callback);
    }, []);

    useEffect(() => {
        window.app = { ...window.defaultAppData };
    }, []);

    const handleClick = () => {
        window.app.startTime = DateTime.now();
    };

    const linkTo = (location) => {
        const urls = {
            0: 'cartoons/1',
            1: 'static'
        };

        const randInt = getRandomInt(2);

        return { ...location, pathname: urls[randInt] };
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
                    Нажми <Button component={Link} to={linkTo} variant="outlined" onClick={handleClick}>Начать</Button> если готов!
                </Typography>
            </div>
            <img src={rapunzelSrc} alt="rapunzel" width={650} height={640} />
        </div>
    );
}

export default MainPage;
