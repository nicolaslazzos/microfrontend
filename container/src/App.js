import React, { createContext, useContext } from 'react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

import Marketing from './components/MarketingApp';
import Header from './components/Header';

const generateClassName = createGenerateClassName({ productionPrefix: 'co' });

const HistoryContext = createContext();

export const useHistory = () => useContext(HistoryContext);

export default ({ history }) => {
  return (
    <HistoryRouter history={history}>
      <HistoryContext.Provider value={history}>
        <StylesProvider generateClassName={generateClassName}>
          <Header />
          <Marketing />
        </StylesProvider>
      </HistoryContext.Provider>
    </HistoryRouter>
  );
};