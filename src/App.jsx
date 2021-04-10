import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Header } from './components/Header';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { Main } from './components/Main';

function App() {
    const theme = createMuiTheme();

    return (
        <ThemeProvider theme={theme}>
            <div>
                <CssBaseline />

                <Header />

                <Router>
                    <Main />
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;
