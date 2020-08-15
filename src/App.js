import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import LandingPage from '../src/components/landing-page/landing-page.component'
import ServicesSection from '../src/components/services-section/services-section.component'
import CasesSection from '../src/components/cases-section/cases-section.component'
import ClientsSection from '../src/components/clients-section/clients-section.component'

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
        <ClientsSection />
      </BrowserRouter>
    </div>
  );
}

export default App;
