import React from 'react';
import { Routes, Route, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

import Pricing from './components/Pricing';
import Landing from './components/Landing';

const generateClassName = createGenerateClassName({ productionPrefix: 'ma' });

export default ({ history }) => {
  return (
    <HistoryRouter history={history}>
      <StylesProvider generateClassName={generateClassName} >
        <Routes>
          <Route exact path="/pricing" element={<Pricing />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </StylesProvider>
    </HistoryRouter>
  );
};