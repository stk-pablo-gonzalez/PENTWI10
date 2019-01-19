import AppContainer from './components/container/AppComponent';
import ReactDOM from 'react-dom';
import React from 'react';

const wrapper = document.getElementById('main');
wrapper ? ReactDOM.render(<AppContainer />, wrapper) : false;