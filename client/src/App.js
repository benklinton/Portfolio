import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path = '/' component={Home}/>
        <Route exact path = '/resume' component={Resume}/>
      </Switch>
    </Router>
  </>
  );
}

export default App;
