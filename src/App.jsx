import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './navbar';
import Home from './Home';
import News from './News';
import NewsSection from './NewsSection';
import NewsDetailed from './NewsDetailed';
import Education from './Education';
import Report from './Report';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/news" exact component={NewsSection} />
        <Route path="/newsSection/:newsType" component={NewsSection} />
        <Route path="/newsDetailed" component={NewsDetailed} />
        <Route path="/education" component={Education} />
        <Route path="/report" component={Report} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
