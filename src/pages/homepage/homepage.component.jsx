import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'

import LandingPage from '../../components/landing-page/landing-page.component'
import Header from '../../components/header/header.component'
import ServicesSection from '../../components/services-section/services-section.component'
import CasesSection from '../../components/cases-section/cases-section.component'
import ClientsSection from '../../components/clients-section/clients-section.component'
import BlogSection from '../../components/blog-section/blog-section.component'
import CTAButton from '../../components/cta-button/cta-button.component'
import Footer from '../../components/footer/footer.component'

import 'swiper/swiper.scss'
import './homepage.styles.scss';

function HomePage() {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = (e) => {
    setScrollTop(e.target.documentElement.scrollTop);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="App">
          <LandingPage />
          <Header scrollLocation={scrollTop} />
          <ServicesSection />
          <CasesSection />
          <ClientsSection />
          <div className='blog-title-container'>
            <h1> BLOG </h1>
          </div>
          <BlogSection />
          <div className='blog-cta-container'>
            <CTAButton content='See more' />
          </div>
          <Footer />
    </div>
  );
}

export default HomePage;