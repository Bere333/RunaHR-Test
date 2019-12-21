import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './views/Home/Home'
import Search from './views/View-Data/Search'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Route  exact path='/' component={Home} />
        <Route  path='/search' component={Search} />
        
    </Router>

  );
}

export default App;
