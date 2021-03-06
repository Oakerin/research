import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { HashRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Header } from './components/Header';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { Main } from './components/Main';
import { getCartoons } from './utils/cartoons';
import staticImg1 from '../src/assets/imgs/static1.png';
import staticImg2 from '../src/assets/imgs/static2.png';
import { database } from './firebaseConfig';

window.database = database;
window.defaultAppData = {
    type: null, // static/dynamic/squares
    imgs: null,
    changed: null,
    squares: null,
    startTime: null,
    endTime: null
};

// Main object
window.app = { ...window.defaultAppData };

function App() {
    const theme = createMuiTheme();

    const cartoons1 = getCartoons(1);
    const cartoons2 = getCartoons(2);

    return (
        <ThemeProvider theme={theme}>
            <div>
                <CssBaseline />
                <HashRouter>
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
                </HashRouter>
            </div>
        </ThemeProvider>
    );
}

export default App;
