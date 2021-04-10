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
                <Typography align={'left'}>
                    Привет, дорогой друг! <br/>
                    Спасибо, что согласился принять участие в нашем исследовании. <br />
                    Тебе будет предложено найти постер одного очень известного мультфильма: Губка Боб.<br />
                </Typography>
                <br />
                <Typography align={'left'}>
                    Нажми <Link to="foo" component={Button} variant="outlined">Начать</Link> если готов!
                </Typography>
            </div>
            <img src={bobImg} />
        </div>
    );
}

export default MainPage;
