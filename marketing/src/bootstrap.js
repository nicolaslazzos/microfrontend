import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

export const mount = (element) => {
  ReactDOM.render(<App />, element);
};

if (process.env.NODE_ENV === 'development') {
  const element = document.querySelector('#marketing-root-dev');

  if (element) mount(element);
}