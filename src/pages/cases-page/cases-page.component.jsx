import React from 'react'

import Header from '../../components/header/header.component'
import CasesWrapper from './cases-wrapper/cases-wrapper.component'
import Footer from '../../components/footer/footer.component'
import './cases-page.styles.scss';

function CasesPage() {

  return (
    <div className="App">
        <Header />
        <CasesWrapper />
        <Footer />
    </div>
  );
}

export default CasesPage;