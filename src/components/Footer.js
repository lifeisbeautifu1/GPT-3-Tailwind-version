import React from 'react';

const Footer = () => {
  return (
    <div className="mt-40 py-12 px-12 lg:px-24 article__bg text-white flex flex-col gap-10">
      <div className="flex flex-col gap-10 items-center justify-center">
        <h1 className="text-6xl gradient__text font-bold text-center w-4/5 leading-tight">
          Do you want to step in to the future before others
        </h1>
        <button className="font-primary text-lg py-4 px-6 border-2 border-white transition duration-200 hover:border-gray-300 hover:text-gray-300">
          Request Early Access
        </button>
      </div>
      <div className="mt-10 flex flex-col gap-8 md:flex-row justify-between">
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-4xl font-bold">GPT-3</h1>
          <p className="text-sm">
            Crechterwooord K12 182 DK Alknjcb, All Rights Reverved
          </p>
        </div>
        <div className="flex-[1.5] flex flex-col gap-8 md:flex-row flex-wrap justify-between items-start">
          <div className="flex flex-col justify-start items-start gap-4">
            <h1 className="font-bold">Links</h1>
            <ul className="flex flex-col gap-4 text-sm">
              <li>
                <a href="#">Overns</a>
              </li>
              <li>
                <a href="#">Social Media</a>
              </li>
              <li>
                <a href="#">Counters</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            <h1 className="font-bold">Company</h1>
            <ul className="flex flex-col gap-4 text-sm">
              <li>
                <a href="#">Terms & Condition</a>
              </li>
              <li>
                <a href="#">Privacy & Policy</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-start items-start gap-4">
            <h1 className="font-bold">Get in Touch</h1>
            <ul className="flex flex-col gap-4 text-sm">
              <li>
                <a href="#">Crechterwoord K12 182 DK Alknjcb</a>
              </li>
              <li>
                <a href="#">085-321321</a>
              </li>
              <li>
                <a href="#">info@pay.me</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-8">
        <h1 className="text-sm">
          © {new Date().getFullYear()} GPT-3. All rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
