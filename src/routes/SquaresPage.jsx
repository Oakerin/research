import React, { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { Transition } from '../components/Transition';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import { useHistory } from 'react-router-dom';

const schema = {
    1: { type: 'same', img1: 'same', img1_k: 0, img2: 'same', img2_k: 0 },
    2: { type: 'diff', img1: 'diff', img1_k: 0, img2: 'diff', img2_k: 1 }
    // 2: { type: 'diff', img1: 'same', img1_k: 0, img2: 'diff', img2_k: 0 },
    // 3: { type: 'diff', img1: 'same', img1_k: 0, img2: 'diff', img2_k: 1 },
    // 4: { type: 'same', img1: 'diff', img1_k: 0, img2: 'diff', img2_k: 0 },
    // 5: { type: 'same', img1: 'diff', img1_k: 1, img2: 'diff', img2_k: 1 },
    // 6: { type: 'diff', img1: 'diff', img1_k: 0, img2: 'diff', img2_k: 1 }
};

const useStyles = makeStyles({
    button: {
        margin: '0 8px'
    }
});

function SquarePage() {
    const classes = useStyles();
    const history = useHistory();

    const [answer, setAnswer] = useState({});
    const [step, setStep] = useState(2);
    const [subStep, setSubStep] = useState(1);
    const [next, setNext] = useState(false);
    const [open, setOpen] = useState(false);

    const img1_name = schema[subStep].img1 + ((schema[subStep].img1 === 'diff' ? (step*2)-1 : step) + schema[subStep].img1_k);
    const img1 = require(`../assets/imgs/squares/${img1_name}.jpg`);
    const img2_name = schema[subStep].img2 + ((schema[subStep].img2 === 'diff' ? (step*2)-1 : step) + schema[subStep].img2_k);
    const img2 = require(`../assets/imgs/squares/${img2_name}.jpg`);

    useEffect(() => {
        window.app.type = 'squares';
    }, []);

    useEffect(() => {
        let timer;

        if (!next) {
            timer = setTimeout(() => {
                setOpen(true);
                setTimeout(() => {
                    setNext(true);
                    setOpen(false);
                }, 500);
            }, 500);
        }

        return () => {
            clearTimeout(timer);
        }
    }, [next]);

    const handleAnswer = (val) => () => {
        const ans = {
            ...answer,
            [step]: {
                ...answer[step],
                [subStep]: {
                    type: schema[subStep].type,
                    img1: img1_name,
                    img2: img2_name,
                    answer: val,
                    isCorrect: schema[subStep].type === val
                }
            }
        };
        setAnswer(ans);
        console.log(ans);

        setNext(false);

        if (subStep < Object.keys(schema).length) {
            setSubStep(subStep+1);
        } else {
            if (step+1 === 13) {
                window.app.squares = ans;
                history.push('/finish');
            }

            setSubStep(1);
            setStep(step+1);
        }
    };

    useEffect(() => {
        const callback = (event) => {
            const keyCode = event.code;
            console.log(event);

            if (keyCode === 'KeyQ') {
                handleAnswer('diff')();
            }

            if (keyCode === 'KeyE') {
                handleAnswer('same')();
            }
        };

        window.addEventListener('keypress', callback);

        if (!next) {
            window.removeEventListener('keypress', callback);
        }

        return () => window.removeEventListener('keypress', callback);
    }, [next]);

    return (
        <div>
            <Typography variant="h4">Шаг {step}_{subStep}</Typography>

            {!next
                ? <img src={img1.default} width={600} height={600} alt="square" />
                : <img src={img2.default} width={600} height={600} alt="square" />
            }

            {next && (
                <div style={{ position: 'absolute' }}>
                    <Typography>Отличаются?</Typography>
                    <Button
                        className={classes.button}
                        color="primary"
                        variant="contained"
                        onClick={handleAnswer('diff')}
                    >
                        Да [Q]
                    </Button>
                    <Button
                        className={classes.button}
                        color="primary"
                        variant="contained"
                        onClick={handleAnswer('same')}
                    >
                        Нет [E]
                    </Button>
                </div>
            )}
            <Dialog fullScreen open={open} TransitionComponent={Transition} />
        </div>
    );
}

export default SquarePage;
