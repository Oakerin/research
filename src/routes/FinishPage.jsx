import React from 'react';
import Typography from '@material-ui/core/Typography';
import friendsSrc from '../assets/imgs/friends.png';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
});

export function FinishPage() {
    const classes = useStyles();

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
