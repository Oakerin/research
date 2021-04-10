import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MainPage from './routes/MainPage';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

function App() {
    return (
        <div className="App">
            <CssBaseline />

            <header>

            </header>

            <Router>
                <Container maxWidth="lg">
                    {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/foo">
                            <p>Foo</p>
                        </Route>
                        <Route path="/">
                            <MainPage />
                        </Route>
                    </Switch>
                </Container>
            </Router>
        </div>
    );
}

export default App;
