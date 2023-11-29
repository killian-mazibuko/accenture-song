import Brands from '../components/Brands';
import React from 'react';
import Hero from '../components/Hero';
import WeDo from '../components/WeDo';
import CaseStudies from '../components/CaseStudies';

function HomePage() {
  return (
    <>
      <Hero />
      <WeDo />
      <CaseStudies />
      <Brands />
    </>
  );
}

export default HomePage;
