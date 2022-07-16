import React from 'react';

const Article = ({ image, title, date }) => {
  return (
    <div className="flex flex-col text-white rounded shadow overflow-hidden w-full h-full article__bg">
      <div>
        <img className="w-full h-full" src={image} alt="thumbnail" />
      </div>
      <div className="flex p-4 flex-col justify-between items-start h-full">
        <div className="flex flex-col gap-2">
          <h4 className="text-[12px] font-bold">{date}</h4>
          <h1 className="font-bold text-xl cursor-pointer">{title}</h1>
        </div>
        <p className="mt-20 text-[12px] font-bold cursor-pointer">
          Read full article
        </p>
      </div>
    </div>
  );
};

export default Article;
