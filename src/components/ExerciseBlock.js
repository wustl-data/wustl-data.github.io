import React, { useEffect } from 'react';

export default function ExerciseBlock() {
    useEffect(initAddedDCLightExercises);
    return (
        <div data-datacamp-exercise data-lang="python">
            <code data-type="pre-exercise-code">
            </code>
            <code data-type="sample-code">
                import numpy as np

            </code>
            <code data-type="solution">
                a = 5
                print(a)
            </code>
            <code data-type="sct">
                test_object("a")
                test_function("print")
                success_msg("Great job!")
            </code>
            <div data-type="hint">Use the assignment operator (<code>=</code>) to create the variable <code>a</code>.</div>;
        </div>
    )
}