import React, { useState, useEffect } from 'react'
import Header from '../../components/header/header.component'
import CasesWrapper from './cases-wrapper/cases-wrapper.component'
import CasesSwiperMob from './cases-swiper/cases-swiper-mob.component'
import CasesSwiperDesk from './cases-swiper/cases-swiper-desk.component'
import Footer from '../../components/footer/footer.component'
import './cases-page.styles.scss';

function CasesPage() {
  const [scrollTop, setScrollTop] = useState(0);
  const [mediaQ, setMediaQ] = useState(0);
  const [mediaMidQ, setMediaMidQ] = useState(0);

  const onScroll = (e) => {
    setScrollTop(e.target.documentElement.scrollTop);
  }
  
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    setMediaQ(window.matchMedia("(max-width: 1150px)"))
    setMediaMidQ(window.matchMedia("(max-width: 1400px)"))
  }, []);

  return (
    <div className="App">
        <Header scrollLocation={scrollTop} />
        <CasesWrapper />
        {mediaQ.matches ? <CasesSwiperMob /> : mediaMidQ.matches ? <CasesSwiperDesk /> : <div></div>}
        <Footer />
    </div>
  );
}

export default CasesPage;