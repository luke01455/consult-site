import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import HomePage from '../src/pages/homepage/homepage.component'
import CasesPage from '../src/pages/cases-page/cases-page.component'

import 'swiper/swiper.scss'
import './App.scss';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cases" component={CasesPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
