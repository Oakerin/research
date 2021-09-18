import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Square from './Square';

const dataset = [
    { img1: 'same2', img2: 'same2' },
    { img1: 'diff3', img2: 'diff4' },
    { img1: 'same3', img2: 'same3' },
    { img1: 'diff5', img2: 'diff6' }
];

function Step(img1, img2) {
    this.img1 = img1;
    this.img2 = img2;
    this.isSame = this.img1 === this.img2;
}

function StepsController(data) {
    const steps = new Set(data.map(d => new Step(d.img1, d.img2)));
    const stepsValues = steps.values();

    this.next = function() {
        return stepsValues.next();
    }
}

const steps = new StepsController(dataset);
const firstStep = steps.next();

export default function SquaresXPage() {
    const [currentStep, setCurrentStep] = useState(firstStep);

    const nextStep = () => {
        setCurrentStep(steps.next());
    };

    console.log('currentStep', currentStep);

    return (
        <div>
            <Typography variant="h4">Шаг #</Typography>

            <Square
                step={currentStep}
                onAnswer={nextStep}
            />
        </div>
    );
}
