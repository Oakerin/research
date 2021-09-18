import React, { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { Transition } from '../../components/Transition';

// TODO: need to change step to a run/start variable
function Blinker({ step, onAnimationStart, onAnimationEnd }) {
    const [isBlinked, setIsBlinked] = useState(false);

    useEffect(() => {
        let timer;
        let timer1;

        if (!isBlinked) {
            timer = setTimeout(() => {
                onAnimationStart();
                setIsBlinked(true);

                timer1 = setTimeout(() => {
                    setIsBlinked(false);
                    onAnimationEnd();
                }, 500);
            }, 1000);
        }

        return () => {
            clearTimeout(timer);
            clearTimeout(timer1);
        }
    }, [step]);

    return (
        <>
            <Dialog fullScreen open={isBlinked} TransitionComponent={Transition} />
        </>
    );
}

export default Blinker;
