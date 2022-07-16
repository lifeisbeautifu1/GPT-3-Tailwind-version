import React from 'react';
import ai from '../assets/ai.png';
import people from '../assets/people.png';

const Header = () => {
  return (
    <div
      id="home"
      className="flex flex-col lg:flex-row gap-8 py-8 px-12 md:px-24"
    >
      <div className="flex-1 flex flex-col mt-8 lg:mt-16 justify-start items-start gap-8">
        <h1 className="gradient__text font-black text-5xl leading-snug lg:text-6xl lg:leading-tight">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className="text-[#81AFDD] text-lg">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="flex w-full">
          <input
            type="email"
            className="flex-1 py-2 px-4 border-none outline-none text-lg bg-gray-800 text-white rounded rounded-tr-none rounded-br-none"
            placeholder="Your Email Address"
          />
          <button
            className="w-32 font-semibold bg-orange-500 hover:bg-orange-600 transition duration-200 text-white rounded rounded-tl-none rounded-bl-none"
            type="button"
          >
            Get Started
          </button>
        </div>
        <div className="flex items-center justify-start gap-6 text-white">
          <img src={people} alt="people" />
          <p className="text-sm">
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>
      <div className="flex-1 mt-8 lg:mt-0">
        <img src={ai} className="w-full h-full" alt="ai" />
      </div>
    </div>
  );
};

export default Header;
