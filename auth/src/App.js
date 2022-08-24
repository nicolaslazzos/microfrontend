import React from 'react';
import { Routes, Route, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

import SignUp from './components/Signup';
import SignIn from './components/Signin';

const generateClassName = createGenerateClassName({ productionPrefix: 'au' });

export default ({ history, onSignIn }) => {
  return (
    <HistoryRouter history={history}>
      <StylesProvider generateClassName={generateClassName} >
        <Routes>
          <Route path="/auth/signin" element={<SignIn onSignIn={onSignIn} />} />
          <Route path="/auth/signup" element={<SignUp onSignIn={onSignIn} />} />
        </Routes>
      </StylesProvider>
    </HistoryRouter>
  );
};