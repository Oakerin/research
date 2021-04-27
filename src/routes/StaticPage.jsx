import React, { useEffect, useState } from 'react';
import staticImg1 from '../assets/imgs/static1.png';
import staticImg2 from '../assets/imgs/static2.png';
import Dialog from '@material-ui/core/Dialog';
import { Transition } from '../components/Transition';
import Typography from '@material-ui/core/Typography';

export function StaticPage() {
    const [next, setNext] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setNext(true);
            setOpen(true);
            setTimeout(() => {
                setOpen(false);
            }, 500);
        }, 5000);
    }, []);

    return (
        <div>
            {!next
                ? <img width={1280} src={staticImg1} alt="static1" />
                : (
                    <>
                        <Typography>
                            Заметили ли вы какие - нибудь изменения?
                        </Typography>
                        <img width={1280} src={staticImg2} alt="static2" />
                    </>
                )
            }

            <Dialog fullScreen open={open} TransitionComponent={Transition} />
        </div>
    );
}
