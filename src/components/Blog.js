import React from 'react';
import Article from './Article';
import blog01 from '../assets/blog01.png';
import blog02 from '../assets/blog02.png';
import blog03 from '../assets/blog03.png';
import blog04 from '../assets/blog04.png';
import blog05 from '../assets/blog05.png';

const Blog = () => {
  return (
    <div
      id="blog"
      className="mx-12 mt-20 mb-8 lg:mx-24 flex flex-col justify-start items-start gap-12"
    >
      <h1 className="text-6xl gradient__text font-bold leading-tight mb-8">
        A lot is happening, <br /> We are blogging about it.
      </h1>
      <div className="flex flex-col-reverse lg:flex-row gap-6 w-full h-full">
        <div className="flex-1 flex justify-center items-center">
          <Article
            image={blog01}
            title="GPT-3 and Open AI is the future. Let us exlore how it is?"
            date="Sep 26, 2022"
          />
        </div>
        <div className="flex-[1.5] grid grid-cols-1 md:grid-cols-2 gap-6">
          <Article
            image={blog02}
            title="GPT-3 and Open AI is the future. Let us exlore how it is?"
            date="Sep 26, 2022"
          />
          <Article
            image={blog03}
            title="GPT-3 and Open AI is the future. Let us exlore how it is?"
            date="Sep 26, 2022"
          />
          <Article
            image={blog04}
            title="GPT-3 and Open AI is the future. Let us exlore how it is?"
            date="Sep 26, 2022"
          />
          <Article
            image={blog05}
            title="GPT-3 and Open AI is the future. Let us exlore how it is?"
            date="Sep 26, 2022"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
