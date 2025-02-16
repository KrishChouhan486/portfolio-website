import React, { forwardRef } from "react";
import PropTypes from 'prop-types'; 

const TiltText = React.forwardRef(function MyTiltText({ } ,ref) { 
 
  return (
    <div id="tiltDiv" ref={ref} className="mt-[7vw] ml-20">
      <h1 className="ml-[0.2vw] text-[4.24vw] uppercase font-[anzo3]">
        i am<span className="text-black">DARK MODE</span>™
      </h1>
      <h1 className="text-[7.7vw] leading-[4vw] font-[anzo1]">DESIGNER</h1>
      <h1 className="ml-[0.2vw] text-[4.4vw] uppercase leading-[6hw] font-[anzo3]">
        TO HIRE
      </h1>
    </div>
  );
});

TiltText.propTypes = {
  ref: PropTypes.shape({ current: PropTypes.any }).isRequired, 
};

export default TiltText;