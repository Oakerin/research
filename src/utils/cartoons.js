import brain from '../assets/imgs/brain.jpg';
import chipmunks from '../assets/imgs/chipmunks.jpg';
import curse from '../assets/imgs/curse.jpg';
import rapunzel from '../assets/imgs/rapunzel.jpg';
import soul from '../assets/imgs/soul.jpg';
import chipmunksExtra from '../assets/imgs/chipmunks+.jpg';
import curseExtra from '../assets/imgs/curse+.jpg';
import soulExtra from '../assets/imgs/soul+.jpg';

/**
 * clickable - чтобы найти спанчбоба на второй странице
 */
const dataSet_1 = {
    1: { name: 'curse', src: curse, checked: false },
    2: { name: 'rapunzel', src: rapunzel, checked: false, clickable: true },
    3: { name: 'soul', src: soul, checked: false },
    4: { name: 'brain', src: brain, checked: false },
    5: { name: 'chipmunks', src: chipmunks, checked: false }
};

const dataSet_2 = {
    1: { name: 'curseExtra', src: curseExtra, checked: false },
    2: { name: 'rapunzel', src: rapunzel, checked: false },
    3: { name: 'soulExtra', src: soulExtra, checked: false },
    4: { name: 'brain', src: brain, checked: false },
    5: { name: 'chipmunksExtra', src: chipmunksExtra, checked: false }
};

const cartoons = {
    1: dataSet_1,
    2: dataSet_2
};

function getCartoons(n = 1) {
    const data = cartoons[n];

    return Object.keys(data).map(key => {
        return { id: key, ...data[key] };
    })
}

export { getCartoons };
