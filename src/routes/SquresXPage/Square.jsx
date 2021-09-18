import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Images from './Images';
import Blinker from './Blinker';

function Square({ step, onAnswer }) {
    useEffect(() => {
        const callback = (event) => {
            const keyCode = event.code;

            switch (keyCode) {
                case 'KeyQ':
                    handleSame();
                    break;
                case 'KeyE':
                    handleDiff();
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keypress', callback);
        return () => window.removeEventListener('keypress', callback);
    }, []);

    const handleSame = () => {
        onAnswer();
    };

    const handleDiff = () => {
        onAnswer();
    };

    return (
        <div>
            <Images
                img1={step.value.img1}
                img2={step.value.img2}
            />

            <div>
                <Typography>Отличаются?</Typography>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={handleSame}
                >
                    Нет [Q]
                </Button>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={handleDiff}
                >
                    Да [E]
                </Button>
            </div>

            <Blinker step={step} />
        </div>
    );
}

export default Square;
