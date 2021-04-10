import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './routes/MainPage';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Header } from './components/Header';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

const theme = createMuiTheme();

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <CssBaseline />

                <Header />

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
        </ThemeProvider>
    );
}

export default App;
