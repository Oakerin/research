import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Square from './Square';
import { Redirect } from 'react-router-dom';
import { dataset } from './dataset';

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

export default function SquaresXPage() {
    const [steps] = useState(new StepsController(dataset));
    const [currentStep, setCurrentStep] = useState(null);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        window.app.type = 'squares';
        const firstStep = steps.next();
        setCurrentStep(firstStep);
    }, []);

    /**
     * @param answer
     *      true - a user clicked diff
     *      false - a user clicked same
     */
    const nextStep = (answer) => {
        const val = [...answers, {
            ...currentStep.value,
            isCorrect: currentStep.value.isSame === !answer
        }];

        setAnswers(val);
        setCurrentStep(steps.next());

        window.app.squares = val;
    };

    if (!currentStep) {
        return null;
    }

    if (!currentStep.done) {
        return (
            <div>
                <Typography variant="h4">Шаг: {answers.length+1} / {dataset.length}</Typography>

                <Square
                    step={currentStep}
                    onAnswer={nextStep}
                />
            </div>
        );
    }

    return (
        <>
            <Redirect to="/finish" />
        </>
    )
}
