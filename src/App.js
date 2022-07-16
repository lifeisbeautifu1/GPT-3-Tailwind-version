import React from 'react';

import {
  Navbar,
  Header,
  Brand,
  WhatGPT3,
  Possibility,
  Features,
  CTA,
  Blog,
  Footer,
} from './components';

const App = () => {
  return (
    <div className="font-primary bg-[#040C18]">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Possibility />
      <Features />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
