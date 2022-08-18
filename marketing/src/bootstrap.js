import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';

export const mount = (element, { onNavigate, defaultHistory } = {}) => {
  const history = defaultHistory ?? createMemoryHistory();

  if (onNavigate) history.listen(onNavigate);

  ReactDOM.render(<App history={history} />, element);

  const onParentNavigate = ({ location: { pathname } }) => {
    if (history.location.pathname !== pathname) history.push(pathname);
  };

  return { onParentNavigate };
};

if (process.env.NODE_ENV === 'development') {
  const element = document.querySelector('#marketing-root-dev');

  if (element) mount(element, { defaultHistory: createBrowserHistory({ window }) });
}