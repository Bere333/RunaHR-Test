import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './Views/Home/Home'
import Search from './Views/View-Data/Search'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Route  exact path='/' component={Home} />
        <Route  path='/search' component={Search} />
        
    </Router>

  );
}

export default App;
