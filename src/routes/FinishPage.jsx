import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import friendsSrc from '../assets/imgs/friends.png';
import makeStyles from '@material-ui/styles/makeStyles';
import uniqid from 'uniqid';
import { DateTime, Interval } from 'luxon';
import { exitFullscreen } from '../utils/toggleFullscreen';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
});

export function FinishPage() {
    const classes = useStyles();

    useEffect(() => {
        exitFullscreen();

        window.app.endTime = DateTime.now();
        const { startTime, endTime, ...app } = window.app;
        const i = Interval.fromDateTimes(startTime, endTime);
        const data = {...app, time: i.length('seconds')};

        if (window.app.type === 'squares') {
            console.log('send squares', data);
            window.database.ref('squares/' + uniqid()).set(data);
            return;
        }

        if (window.app.type != null) {
            console.log('send data', data);
            window.database.ref('data/' + uniqid()).set(data);
        }
    }, []);

    return (
        <div className={classes.root}>
            <Typography variant="h1" gutterBottom>
                Отличный результат! <br />
                Спасибо за участие.
            </Typography>
            <img src={friendsSrc} alt="Спанч Боб и его друщья" height={587} width={794} />
        </div>
    )
}
