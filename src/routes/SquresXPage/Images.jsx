import React, { useEffect, useState } from 'react';

function Images({ img1, img2, isShowSecond = false }) {
    const [imgsSrc, setImgsSrc] = useState({
        first: require(`../../assets/imgs/squares/${img1}.jpg`),
        second: require(`../../assets/imgs/squares/${img2}.jpg`)
    });

    useEffect(() => {
        setImgsSrc({
            first: require(`../../assets/imgs/squares/${img1}.jpg`),
            second: require(`../../assets/imgs/squares/${img2}.jpg`)
        });
    }, [img1, img2]);

    return (
        <div>
            {isShowSecond
                ? <img src={imgsSrc.first.default} width={600} height={600} alt="square" />
                : <img src={imgsSrc.second.default} width={600} height={600} alt="square" />
            }
        </div>
    );
}

export default Images;
