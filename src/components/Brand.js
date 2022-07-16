import React from 'react';
import google from '../assets/google.png';
import atlassian from '../assets/atlassian.png';
import dropbox from '../assets/dropbox.png';
import shopify from '../assets/shopify.png';
import slack from '../assets/slack.png';

const Brand = () => {
  return (
    <div className="py-8 px-12 lg:px-24 flex justify-center flex-wrap items-center gap-6">
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
    </div>
  );
};

export default Brand;
