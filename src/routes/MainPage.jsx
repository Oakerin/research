import React from 'react';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import bobImg from '../assets/imgs/bob.png';

const useStyles = makeStyles({
    root: {

    },
});

function MainPage() {
    const classes = useStyles();

    return (
        <div>
            <Typography>Привет, дорогой друг! Спасибо, что согласился принять участие в нашем исследовании. Тебе будет предложено найти постер одного очень известного мультфильма: Губка Боб. Нажми если готов!</Typography>

        </div>
    );
}

export default MainPage;
