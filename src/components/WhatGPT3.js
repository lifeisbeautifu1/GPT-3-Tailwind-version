import React from 'react';
import Feature from './Feature';

const WhatGPT3 = () => {
  return (
    <div
      id="wgpt3"
      className="my-12 mx-12 lg:mx-24 gpt3__gradientBg p-8 rounded flex flex-col
    gap-16 text-white"
    >
      <Feature
        width="w-full"
        direction="flex-row"
        title="What is GPT-3?"
        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
      />
      <div className="flex w-full justify-between items-center flex-col md:flex-row gap-6">
        <h1 className="flex-1 gradient__text font-bold text-3xl">
          The possibilities are beyond your imagination
        </h1>
        <p className="flex-1 text-[#ff8a71] flex justify-start md:justify-end items-center cursor-pointer w-full">
          Explore the library
        </p>
      </div>
      <div className="flex flex-wrap gap-6">
        <Feature
          direction="flex-col"
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />
        <Feature
          direction="flex-col"
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Feature
          direction="flex-col"
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
