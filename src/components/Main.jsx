import React from 'react';
import Container from '@material-ui/core/Container';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainPage from '../routes/MainPage';
import makeStyles from '@material-ui/styles/makeStyles';
import { CartoonsPage } from '../routes/CartoonsPage';
import { FinishPage } from '../routes/FinishPage';

const useStyles = makeStyles({
    root: {
        paddingTop: 24,
        height: 'calc(100vh - 64px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export function Main() {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="lg" component="main">
            {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
            <Switch>
                <Route exact path="/">
                    <Redirect to="/main" />
                </Route>
                <Route path="/main">
                    <MainPage />
                </Route>
                <Route path="/cartoons/:id">
                    <CartoonsPage />
                </Route>
                <Route path="/finish">
                    <FinishPage />
                </Route>
            </Switch>
        </Container>
    );
}
