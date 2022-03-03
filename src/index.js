import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ThemeProvaider} from './context/Context'

ReactDOM.render(
  <ThemeProvaider>
    <App />
  </ThemeProvaider>,
  document.getElementById('root')
);

