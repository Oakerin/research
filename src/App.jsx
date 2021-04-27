import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Header } from './components/Header';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { Main } from './components/Main';
import { getCartoons } from './utils/cartoons';
import staticImg1 from '../src/assets/imgs/static1.png';
import staticImg2 from '../src/assets/imgs/static2.png';

function App() {
    const theme = createMuiTheme();

    const cartoons1 = getCartoons(1);
    const cartoons2 = getCartoons(2);

    return (
        <ThemeProvider theme={theme}>
            <div>
                <CssBaseline />
                <Router basename="research">
                    <Header />

                    <Main />

                    {/* Костыль: заранее подгружаю картинки */}
                    <div style={{ display: 'none' }}>
                        {cartoons1.map((cartoon) => (
                            <img key={cartoon.name} src={cartoon.src} alt={cartoon.name} />
                        ))}
                        {cartoons2.map((cartoon) => (
                            <img key={cartoon.name} src={cartoon.src} alt={cartoon.name} />
                        ))}
                        <img width={1600} src={staticImg1} alt="static1" />
                        <img width={1600} src={staticImg2} alt="static2" />
                    </div>
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;
