import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Images from './Images';
import Blinker from './Blinker';
import Box from '@material-ui/core/Box';

function Square({ step, onAnswer }) {
    const [isShowQuestion, setIsShowQuestion] = useState(false);

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

        if (!isShowQuestion) {
            window.removeEventListener('keypress', callback);
        }

        return () => window.removeEventListener('keypress', callback);
    }, [isShowQuestion]);

    const handleSame = () => {
        onAnswer(false);
        setIsShowQuestion(false);
    };

    const handleDiff = () => {
        onAnswer(true);
        setIsShowQuestion(false);
    };

    const handleAnimationMiddle = () => {
        setIsShowQuestion(true);
    };

    return (
        <div>
            <Images
                img1={step.value.img1}
                img2={step.value.img2}
                isShowSecond={isShowQuestion}
            />

            {isShowQuestion && (
                <Box position="absolute">
                    <Typography>Отличаются?</Typography>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={handleSame}
                    >
                        Нет [Q]
                    </Button>
                    <Box component="span" padding="0 8px" />
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={handleDiff}
                    >
                        Да [E]
                    </Button>
                </Box>
            )}

            <Blinker
                step={step}
                onAnimationStart={console.log}
                onAnimationEnd={console.log}
                onAnimationMiddle={handleAnimationMiddle}
            />
        </div>
    );
}

export default Square;
