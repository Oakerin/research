import React from 'react';
import Container from '@material-ui/core/Container';
import { Redirect, Route, Switch } from 'react-router-dom';
import MainPage from '../routes/MainPage';
import makeStyles from '@material-ui/styles/makeStyles';
import { DynamicPage } from '../routes/DynamicPage';
import { FinishPage } from '../routes/FinishPage';
import { StaticPage } from '../routes/StaticPage';
import SquarePage from '../routes/SquaresPage';

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
                <Route path="/squares">
                    <SquarePage />
                </Route>
                <Route path="/static">
                    <StaticPage />
                </Route>
                <Route path="/cartoons/:id">
                    <DynamicPage />
                </Route>
                <Route path="/finish">
                    <FinishPage />
                </Route>
            </Switch>
        </Container>
    );
}
