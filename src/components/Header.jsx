import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/styles/makeStyles';
import logoSrc from '../assets/imgs/logo.png'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export function Header() {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" component={Link} to={'/'}>
                    <img src={logoSrc} alt="лого" />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Мультфильмы
                </Typography>
                <Button color="inherit">Войти</Button>
            </Toolbar>
        </AppBar>
    );
}
