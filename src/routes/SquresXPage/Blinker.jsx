import React, { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { Transition } from '../../components/Transition';

// TODO: need to change step to a run/start variable
function Blinker({ step }) {
    const [isBlinked, setIsBlinked] = useState(false);

    useEffect(() => {
        let timer;

        if (!isBlinked) {
            timer = setTimeout(() => {
                setIsBlinked(true);

                setTimeout(() => {
                    setIsBlinked(false);
                }, 500);
            }, 1000);
        }

        return () => {
            clearTimeout(timer);
        }
    }, [step]);

    return (
        <>
            <Dialog fullScreen open={isBlinked} TransitionComponent={Transition} />
        </>
    );
}

export default Blinker;
