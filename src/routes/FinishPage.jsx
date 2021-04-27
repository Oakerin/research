import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import friendsSrc from '../assets/imgs/friends.png';
import makeStyles from '@material-ui/styles/makeStyles';
import uniqid from 'uniqid';
import { DateTime, Interval } from 'luxon';

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
        window.app.endTime = DateTime.now();
        const app = window.app;
        const i = Interval.fromDateTimes(app.startTime, app.endTime);

        const data = {
            imgs: app.imgs,
            changed: app.changed,
            time: i.length('seconds')
        };

        console.log('send data', data);

        window.database.ref('data/' + uniqid()).set(data);
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
