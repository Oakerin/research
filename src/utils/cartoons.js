import mermaidSrc from '../assets/imgs/p_mermaid.png';
import spongeSrc from '../assets/imgs/p_sponge.png';

const dataSet_1 = {
    1: { name: '', src: mermaidSrc },
    2: { name: '', src: mermaidSrc },
    3: { name: '', src: mermaidSrc },
    4: { name: '', src: mermaidSrc },
    5: { name: '', src: spongeSrc },
    6: { name: '', src: spongeSrc },
    7: { name: '', src: spongeSrc },
    8: { name: '', src: spongeSrc },
};

const dataSet_2 = {
    1: { name: '', src: spongeSrc },
    2: { name: '', src: spongeSrc },
    3: { name: '', src: spongeSrc },
    4: { name: '', src: spongeSrc },
    5: { name: '', src: mermaidSrc },
    6: { name: '', src: mermaidSrc },
    7: { name: '', src: mermaidSrc },
    8: { name: '', src: mermaidSrc }
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
