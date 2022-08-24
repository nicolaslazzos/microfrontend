import React, { createContext, useContext, lazy, Suspense, useState, useEffect } from 'react';
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
  const [isSignedIn, setIsSignedIn] = useState(localStorage.getItem('isSignedIn') === 'true');

  useEffect(() => { localStorage.setItem('isSignedIn', isSignedIn); }, [isSignedIn]);

  return (
    <HistoryRouter history={history}>
      <HistoryContext.Provider value={history}>
        <StylesProvider generateClassName={generateClassName}>
          <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
          <Suspense fallback={<Progress />}>
            <Routes>
              <Route path="/auth/*" element={<LazyAuth onSignIn={() => setIsSignedIn(true)} />} />
              <Route path="/*" element={<LazyMarketing />} />
            </Routes>
          </Suspense>
        </StylesProvider>
      </HistoryContext.Provider>
    </HistoryRouter>
  );
};