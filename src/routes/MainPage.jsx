import React from 'react';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import bobImg from '../assets/imgs/bob.png';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

function MainPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                <Typography align={'left'} variant="h4" gutterBottom component="h1">
                    Привет, дорогой друг! <br/>
                </Typography>
                <Typography align={'left'} variant="body1">
                    Спасибо, что согласился принять участие в нашем исследовании. <br />
                    Тебе будет предложено найти постер одного <br/>
                    очень известного мультфильма: Губка Боб.
                </Typography>
                <br />
                <Typography align={'left'}>
                    Нажми <Button component={Link} to="cartoons" variant="outlined">Начать</Button> если готов!
                </Typography>
            </div>
            <img src={bobImg} alt="Spange Bob" />
        </div>
    );
}

export default MainPage;
