import React from 'react';

const CTA = () => {
  return (
    <div className="gradient__bg--bar mx-12 my-16 lg:mx-24 rounded p-8 flex text-white justify-between items-center flex-col md:flex-row gap-8">
      <div className="flex-1 flex flex-col justify-center items-start gap-2">
        <h4 className="text-sm">Request Early Access to Get Started</h4>
        <p className="font-bold text-2xl leading-normal">
          Register Today & start exploring the endless possibilities.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <button className="font-primary font-bold transition duration-200 hover:scale-105 bg-black rounded-3xl py-3 px-6 shadow">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CTA;
