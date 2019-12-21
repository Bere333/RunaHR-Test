import React from 'react';
import './index.css';

import store from './store';
import Root from './components/root'
import { render } from 'react-dom'

import * as serviceWorker from './serviceWorker';

render(<Root store={store} />, document.getElementById('root'))
serviceWorker.unregister();
