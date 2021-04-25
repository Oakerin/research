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

const dataSet_1 = {
    1: { name: 'everest', src: everest, checked: false },
    2: { name: 'heart', src: heart, checked: false },
    3: { name: 'ralf', src: ralf, checked: false },
    4: { name: 'mermaidSrc', src: mermaidSrc, checked: false },
    5: { name: 'head', src: head, checked: false },
    6: { name: 'hero', src: hero, checked: false },
    7: { name: 'up', src: up, checked: false },
    8: { name: 'tort', src: tort, checked: false },
};

/**
 * clickable - чтобы найти спанчбоба на второй странице
 */
const dataSet_2 = {
    1: { name: '', src: mermaidSrc, checked: false },
    2: { name: '', src: mermaidSrc, checked: false },
    3: { name: '', src: mermaidSrc, checked: false },
    4: { name: '', src: mermaidSrc, checked: false },
    5: { name: '', src: mermaidSrc, checked: false },
    6: { name: '', src: spongeSrc,  checked: false, clickable: true },
    7: { name: '', src: mermaidSrc, checked: false },
    8: { name: '', src: mermaidSrc, checked: false }
};

const dataSet_3 = {
    1: { name: '', src: mermaidSrc, checked: false },
    2: { name: '', src: mermaidSrc, checked: false },
    3: { name: '', src: spongeSrc, checked: false },
    4: { name: '', src: mermaidSrc, checked: false },
    5: { name: '', src: mermaidSrc, checked: false },
    6: { name: '', src: spongeSrc,  checked: false },
    7: { name: '', src: mermaidSrc, checked: false },
    8: { name: '', src: spongeSrc, checked: false }
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
