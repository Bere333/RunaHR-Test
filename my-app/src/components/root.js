import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from '../App';
import Home from '../views/Home/Home';
import Search from '../views/View-Data/Search'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router component={App}>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search}/>
    </Router>
  </Provider>
)
Root.propTypes = {
  store: PropTypes.object.isRequired
}
export default Root