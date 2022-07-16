import React from 'react';

const Feature = ({ title, text, direction }) => {
  return (
    <div
      className={`flex justify-between min-w-[240px] items-start text-white flex-1 gap-2 flex-col md:${direction}`}
    >
      <div className="flex flex-1 flex-col justify-start items-start">
        <div className="w-10 h-1 gradient__bg--bar"></div>
        <div>
          <h1 className="text-lg color-white font-bold">{title}</h1>
        </div>
      </div>
      <div className="flex flex-[1.5] justify-start items-start text-sm">
        <p className="text-[#81AFDD]">{text}</p>
      </div>
    </div>
  );
};

export default Feature;
