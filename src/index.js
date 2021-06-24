import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StyledNormalize from './StyledNormalize';

ReactDOM.render(
  <React.StrictMode>
    <StyledNormalize />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
