import React from 'react';
import Container from '@material-ui/core/Container';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../routes/MainPage';
import makeStyles from '@material-ui/styles/makeStyles';
import { CartoonsPage } from '../routes/CartoonsPage';

const useStyles = makeStyles({
    root: {
        paddingTop: 24
    }
});

export function Main() {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="lg" component="main">
            {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
            <Switch>
                <Route exact path="/">
                    <MainPage />
                </Route>
                <Route path="/cartoons">
                    <CartoonsPage />
                </Route>
            </Switch>
        </Container>
    );
}
