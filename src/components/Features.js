import React from 'react';
import possibility from '../assets/possibility.png';

const Features = () => {
  return (
    <div
      id="features"
      className="py-8 px-12 lg:px-24 flex flex-col lg:flex-row gap-8"
    >
      <div className="flex-1 flex justify-center items-center">
        <img src={possibility} alt="possibility" />
      </div>
      <div className="flex-[1.5] flex flex-col gap-6 justify-end items-start">
        <h4 className="text-[#71e5ff] cursor-pointer">
          Request Early Acces to Get Started
        </h4>
        <h1 className="text-4xl gradient__text font-bold leading-snug">
          The possibilities are beyond your imagination
        </h1>
        <p className="text-[#81AFDD]">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4 className="text-[#ff8a71] cursor-pointer">
          Request Early Access to Get Started
        </h4>
      </div>
    </div>
  );
};

export default Features;
