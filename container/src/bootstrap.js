import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import App from './App';

ReactDOM.render(<App history={createBrowserHistory({ window })} />, document.querySelector('#root'));