import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function Square({ step, onAnswer }) {
    const [isBlinked, setIsBlinked] = useState(false);

    const img1 = require(`../assets/imgs/squares/${step.value.img1}.jpg`);
    const img2 = require(`../assets/imgs/squares/${step.value.img2}.jpg`);

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
            {isBlinked
                ? <img src={img2.default} width={600} height={600} alt="square" />
                : <img src={img1.default} width={600} height={600} alt="square" />
            }

            {isBlinked &&
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
            }
        </div>
    );
}

export default Square;
