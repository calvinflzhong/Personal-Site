import React from 'react';
import Lottie from 'react-lottie';
import animationData from './CodingPersonAnimation.json';

export const CodingAnimation = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <div>
      <Lottie options={defaultOptions} />
    </div>
  );
};

// export default CodingAnimation;
