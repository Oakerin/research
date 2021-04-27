import React, { useEffect, useState } from 'react';
import staticImg1 from '../assets/imgs/static1.png';
import staticImg2 from '../assets/imgs/static2.png';
import Dialog from '@material-ui/core/Dialog';
import { Transition } from '../components/Transition';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export function StaticPage() {
    const [next, setNext] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        window.app.type = 'static';
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setNext(true);
            setOpen(true);
            setTimeout(() => {
                setOpen(false);
            }, 500);
        }, 5000);

        return () => {
            clearTimeout(timer);
        }
    }, []);

    const handleAnswer = (val) => (location) => {
        window.app.changed = val;
        return { ...location, pathname: '/finish' };
    };

    return (
        <div>
            {!next
                ? <img width={1280} src={staticImg1} alt="static1" />
                : (
                    <>
                        <Typography>
                            Заметили ли вы какие - нибудь изменения?
                        </Typography>
                        <Button variant="contained" component={Link} to={handleAnswer(true)}>Да</Button>
                        <Button variant="contained" component={Link} to={handleAnswer(false)}>Нет</Button>
                        <img width={1280} src={staticImg2} alt="static2" />
                    </>
                )
            }

            <Dialog fullScreen open={open} TransitionComponent={Transition} />
        </div>
    );
}
