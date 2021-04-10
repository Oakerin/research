import React from 'react';
import { getCartoons } from '../utils/cartoons';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import makeStyles from '@material-ui/styles/makeStyles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    grid: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden'
    },
    bar: {
        borderRadius: 14
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    buttonNext: {
        marginTop: 32
    }
}));

export function CartoonsPage() {
    const classes = useStyles();
    const cartoons = getCartoons(1);

    return (
        <div>
            <div className={classes.grid}>
                <GridList cellHeight="auto" cols={4} spacing={46}>
                    {cartoons.map((cartoon) => (
                        <GridListTile key={cartoon.id}>
                            <img src={cartoon.src} alt={cartoon.name} />
                            <GridListTileBar
                                className={classes.bar}
                                title={cartoon.title}
                                subtitle={<span>by: {cartoon.name}</span>}
                                actionIcon={
                                    <IconButton className={classes.icon}>
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
            <div>
                <Button className={classes.buttonNext} color="primary" variant="contained">Далее</Button>
            </div>
        </div>
    );
}
