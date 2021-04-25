import React, { useEffect } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Header } from './components/Header';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { Main } from './components/Main';

function App() {
    const theme = createMuiTheme();

    useEffect(() => {
        window.app = {
            startTime: null,
            endTime: null
        };
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <div>
                <CssBaseline />
                <Router basename="research">
                    <Header />

                    <Main />
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;