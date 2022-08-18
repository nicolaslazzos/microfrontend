import React, { createContext, useContext, lazy, Suspense } from 'react';
import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

import Header from './components/Header';
import Progress from './components/Progress';

const LazyMarketing = lazy(() => import('./components/MarketingApp'));
const LazyAuth = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({ productionPrefix: 'co' });

const HistoryContext = createContext();

export const useHistory = () => useContext(HistoryContext);

export default ({ history }) => {
  return (
    <HistoryRouter history={history}>
      <HistoryContext.Provider value={history}>
        <StylesProvider generateClassName={generateClassName}>
          <Header />
          <Suspense fallback={<Progress />}>
            <Routes>
              <Route path="/auth/*" element={<LazyAuth />} />
              <Route path="/*" element={<LazyMarketing />} />
            </Routes>
          </Suspense>
        </StylesProvider>
      </HistoryContext.Provider>
    </HistoryRouter>
  );
};