import React from 'react';
import { getCartoons } from '../utils/cartoons';

export function CartoonsPage() {
    const cartoons = getCartoons();

    return (
        <div>
            {cartoons.map(cartoon => {
                return (
                    <div key={cartoon.id}>
                        <img height={354} width={260} src={cartoon.src} alt={cartoon.name} />
                    </div>
                )
            })}
        </div>
    );
}
