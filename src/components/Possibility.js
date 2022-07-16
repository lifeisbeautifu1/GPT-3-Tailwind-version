import React from 'react';
import Feature from './Feature';

const Possibility = () => {
  return (
    <div
      id="possibility"
      className="my-20 py-8 px-12 lg:px-24 text-white flex flex-col md:flex-row gap-12"
    >
      <div className="flex-1 flex flex-col justify-start items-start gap-8">
        <h1 className="text-4xl gradient__text font-bold leading-snug">
          The Future is Now and You Just Need to Realize It. Step into Future
          Today. & Make it Happen.
        </h1>
        <p className="text-[#ff8a71] cursor-pointer">
          Request Early Access to Get Started
        </p>
      </div>
      <div className="flex flex-[1.5] flex-col gap-12">
        <Feature
          text="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
          title="Improving end distrusts instantly"
        />
        <Feature
          text="Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
          title="Become the tended active"
        />
        <Feature
          text="Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
          title="Message or am nothing"
        />
        <Feature
          text="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.."
          title="Really boy law county"
        />
      </div>
    </div>
  );
};

export default Possibility;
