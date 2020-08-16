import React, { useState, useEffect } from 'react'

import Header from '../../components/header/header.component'
import CasesWrapper from './cases-wrapper/cases-wrapper.component'
import Footer from '../../components/footer/footer.component'
import './cases-page.styles.scss';

function CasesPage() {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = (e) => {
    setScrollTop(e.target.documentElement.scrollTop);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="App">
        <Header scrollLocation={scrollTop} />
        <CasesWrapper />
        <Footer />
    </div>
  );
}

export default CasesPage;