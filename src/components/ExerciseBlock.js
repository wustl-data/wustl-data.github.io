import React from 'react';
import Head from '@docusaurus/Head';

export function ExerciseBlock() {
    <Head> </Head>
    return (
        <div data-datacamp-exercise data-lang="python">
            <code data-type="pre-exercise-code">
            </code>
            <code data-type="sample-code">
                import numpy as np
                import matplotlib.pyplot as plt

                x = np.arange(0, 5, 0.1);
                y = np.sin(x)
                plt.plot(x, y)
                plt.show()


            </code>
            <code data-type="solution">
                # Create a variable a, equal to 5
                a = 5

                # Print out a
                print(a)
            </code>
            <code data-type="sct">
                test_object("a")
                test_function("print")
                success_msg("Great job!")
            </code>
            <div data-type="hint">Use the assignment operator (<code>=</code>) to create the variable <code>a</code>.</div>
        </div>
    )
}