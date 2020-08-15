import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import LandingPage from '../src/components/landing-page/landing-page.component'
import ServicesSection from '../src/components/services-section/services-section.component'
import CasesSection from '../src/components/cases-section/cases-section.component'
import ClientsSection from '../src/components/clients-section/clients-section.component'
import BlogSection from '../src/components/blog-section/blog-section.component'

import 'swiper/swiper.scss'
import './App.scss';

function App() {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
  }

  useEffect(() => {
      window.addEventListener('scroll', onScroll);
  }, []);
  
  return (
    <div className="App">
      <BrowserRouter>
        <LandingPage scrollLocation={scrollTop} />
        <ServicesSection />
        <CasesSection />
        {/* <ClientsSection /> */}
        <div className='blog-title-container'>
          <h1> BLOG </h1>
        </div>
        <BlogSection />
      </BrowserRouter>
    </div>
  );
}

export default App;
