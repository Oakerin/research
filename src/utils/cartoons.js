import mermaidSrc from '../assets/imgs/p_mermaid.png';
import spongeSrc from '../assets/imgs/p_sponge.png';

const dataSet_1 = {
    1: { name: '', src: mermaidSrc, checked: false },
    2: { name: '', src: mermaidSrc, checked: false },
    3: { name: '', src: mermaidSrc, checked: false },
    4: { name: '', src: mermaidSrc, checked: false },
    5: { name: '', src: mermaidSrc, checked: false },
    6: { name: '', src: mermaidSrc, checked: false },
    7: { name: '', src: mermaidSrc, checked: false },
    8: { name: '', src: mermaidSrc, checked: false },
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
