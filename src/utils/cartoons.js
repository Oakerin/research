// 1
import mermaidSrc from '../assets/imgs/p_mermaid.png';
import everest from '../assets/imgs/everest.jpg';
import head from '../assets/imgs/head.jpg';
import heart from '../assets/imgs/heart.jpg';
import hero from '../assets/imgs/hero.jpg';
import ralf from '../assets/imgs/ralf.jpg';
import tort from '../assets/imgs/tort.jpg';
import up from '../assets/imgs/up.jpg';

// 2
import spongeSrc from '../assets/imgs/p_sponge.png';
import boss from '../assets/imgs/boss.jpg';
import brain from '../assets/imgs/brain.jpg';
import chipmunks from '../assets/imgs/chipmunks.jpg';
import corgi from '../assets/imgs/corgi.jpg';
import curse from '../assets/imgs/curse.jpg';
import rapunzel from '../assets/imgs/rapunzel.jpg';
import soul from '../assets/imgs/soul.jpg';

// 3
import bossExtra from '../assets/imgs/boss+.jpg';
import chipmunksExtra from '../assets/imgs/chipmunks+.jpg';
import curseExtra from '../assets/imgs/curse+.jpg';
import soulExtra from '../assets/imgs/soul+.jpg';


const dataSet_1 = {
    1: { name: 'everest', src: everest, checked: false },
    2: { name: 'heart', src: heart, checked: false },
    3: { name: 'ralf', src: ralf, checked: false },
    4: { name: 'mermaidSrc', src: mermaidSrc, checked: false },
    5: { name: 'head', src: head, checked: false },
    6: { name: 'hero', src: hero, checked: false },
    7: { name: 'up', src: up, checked: false },
    8: { name: 'tort', src: tort, checked: false }
};

/**
 * clickable - чтобы найти спанчбоба на второй странице
 */
const dataSet_2 = {
    1: { name: 'brain', src: brain, checked: false },
    2: { name: 'soul', src: soul, checked: false },
    3: { name: 'corgi', src: corgi, checked: false },
    4: { name: 'boss', src: boss, checked: false },
    5: { name: 'chipmunks', src: chipmunks, checked: false },
    6: { name: 'spongeSrc', src: spongeSrc, checked: false, clickable: true },
    7: { name: 'curse', src: curse, checked: false },
    8: { name: 'rapunzel', src: rapunzel, checked: false }
};

const dataSet_3 = {
    1: { name: 'brain', src: brain, checked: false },
    2: { name: 'soulExtra', src: soulExtra, checked: false },
    3: { name: 'corgi', src: corgi, checked: false },
    4: { name: 'bossExtra', src: bossExtra, checked: false },
    5: { name: 'chipmunksExtra', src: chipmunksExtra, checked: false },
    6: { name: 'spongeSrc', src: spongeSrc, checked: false },
    7: { name: 'curseExtra', src: curseExtra, checked: false },
    8: { name: 'rapunzel', src: rapunzel, checked: false }
};

const cartoons = {
    1: dataSet_1,
    2: dataSet_2,
    3: dataSet_3
};

function getCartoons(n = 1) {
    const data = cartoons[n];

    return Object.keys(data).map(key => {
        return { id: key, ...data[key] };
    })
}

export { getCartoons };
