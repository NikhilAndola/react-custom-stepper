import React from 'react';
import Styles from './stepcomp.module.css';

const StepperButton = ({
  handlePrev,
  handleNext,
  stepperCount,
  submitForm,
}) => {
  console.log('stepper count', stepperCount);
  return (
    <>
      <div className={Styles.stepButton}>
        <button
          disabled={stepperCount == 0}
          onClick={() => handlePrev(stepperCount)}
        >
          Prev
        </button>
        {stepperCount === 2 ? (
          <button onClick={submitForm}>Submit</button>
        ) : (
          <button
            disabled={stepperCount == 2}
            onClick={() => handleNext(stepperCount + 1)}
          >
            Next
          </button>
        )}
      </div>
    </>
  );
};

export default StepperButton;
