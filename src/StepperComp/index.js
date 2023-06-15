import * as React from 'react';
import Stepper from './Stepper';
import StepperButton from './StepperButton';

export default function StepperComponent() {
  const [stepperCount, setStepperCount] = React.useState(0);
  const [stepperData, setStepperData] = React.useState([
    {
      lable: '1',
      checked: true,
    },
    {
      lable: '2',
      checked: false,
    },
    {
      lable: '3',
      checked: false,
    },
  ]);

  console.log('stepperData', stepperData);

  const handlePrev = (stepperNum) => {
    console.log('stepper number', stepperNum);
    const filteredArray = stepperData.map((item, index) => {
      if (stepperNum === 2 && index === 2) {
        return { lable: item.lable, checked: false };
      }
      if (stepperNum === 1 && index === 1) {
        return { lable: item.lable, checked: false };
      } else return item;
    });

    setStepperData(filteredArray);
    setStepperCount((prev) => prev - 1);
  };

  const handleNext = (stepperCount) => {
    const filteredArray = stepperData.map((item, index) => {
      if (index === stepperCount) {
        return { lable: item.lable, checked: true };
      } else return item;
    });
    setStepperData(filteredArray);
    setStepperCount((prev) => prev + 1);
  };

  const submitForm = () => {};

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <Stepper stepperData={stepperData} />
      <StepperButton
        stepperCount={stepperCount}
        handlePrev={handlePrev}
        handleNext={handleNext}
        submitForm={submitForm}
      />
    </div>
  );
}
