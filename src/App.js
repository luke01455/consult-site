import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import HomePage from '../src/pages/homepage/homepage.component'
import CasesPage from '../src/pages/cases-page/cases-page.component'
import ServicesPage from '../src/pages/services-page/services-page.component'
import SquadPage from '../src/pages/squad-page/squad-page.component'

import 'swiper/swiper.scss'
import './App.scss';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cases" component={CasesPage} />
          <Route exact path="/services" component={ServicesPage} />
          <Route exact path="/squad" component={SquadPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
