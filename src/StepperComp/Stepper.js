import React from 'react';
import { MdCheck } from 'react-icons/md';

const Stepper = ({ stepperData }) => {
  return (
    <>
      <div className="stepCircle">
        {stepperData?.map((data, ind) => (
          <React.Fragment key={ind}>
            <div className={data?.checked ? 'circle checked' : 'circle'}>
              {data?.checked === true ? <MdCheck size="30px" /> : data?.lable}
            </div>
            {!(ind === stepperData.length - 1) && (
              <div className={data?.checked ? 'bar trans' : 'bar'}></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Stepper;
