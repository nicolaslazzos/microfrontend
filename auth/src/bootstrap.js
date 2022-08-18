import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';

export const mount = (element, { onNavigate, defaultHistory, initialPath } = {}) => {
  const history = defaultHistory ?? createMemoryHistory({ initialEntries: [initialPath] });

  if (onNavigate) history.listen(onNavigate);

  ReactDOM.render(<App history={history} />, element);

  const onParentNavigate = ({ location: { pathname } }) => {
    if (history.location.pathname !== pathname) history.push(pathname);
  };

  return { onParentNavigate };
};

if (process.env.NODE_ENV === 'development') {
  const element = document.querySelector('#auth-root-dev');

  if (element) mount(element, { defaultHistory: createBrowserHistory({ window }) });
}