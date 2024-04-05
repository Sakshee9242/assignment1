import React, { Suspense, lazy } from 'react';

const HeroSection = lazy(() => import('./Components/HeroSection'));
const About = lazy(() => import('./About'));
const Service = lazy(() => import('./Service'));
const Contact = lazy(() => import('./Contact'));
const Footer = lazy(() => import('./Components/Footer'));

function Home() {
  return (
    <div>
      <Suspense fallback={<div>Loading....</div>}>
        <HeroSection />
        <About />
        <Service />
        <Contact />
      <Footer />
      </Suspense>
    </div>
  );
}

export default Home;
