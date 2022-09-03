import React, { useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function ExerciseBlock() {
    useEffect(() => { window["initAddedDCLightExercises"]() }, []);
    return (
        // <BrowserOnly>
        //     {() => {
        // ts-ignore
        <div data-datacamp-exercise data-lang="python">
            <code data-type="pre-exercise-code">
                heights = {'Ann': 1.5, 'Brian': 1.6, 'Charlie': 1.7, 'Dan': 1.8, 'Emma': 1.9}
            </code>
            <code data-type="sample-code">
                print(heights)

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
        //     }}
        // </BrowserOnly>
    )
}