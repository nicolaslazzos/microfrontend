import React from 'react';
import { Routes, Route, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

import SignUp from './components/Signup';
import SignIn from './components/Signin';

const generateClassName = createGenerateClassName({ productionPrefix: 'au' });

export default ({ history }) => {
  return (
    <HistoryRouter history={history}>
      <StylesProvider generateClassName={generateClassName} >
        <Routes>
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />
        </Routes>
      </StylesProvider>
    </HistoryRouter>
  );
};