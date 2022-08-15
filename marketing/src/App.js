import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

import Pricing from './components/Pricing';
import Landing from './components/Landing';

const generateClassName = createGenerateClassName({ productionPrefix: 'ma' });

export default () => {
  return (
    <div>
      <BrowserRouter>
        <StylesProvider generateClassName={generateClassName} >
          <Routes>
            <Route exact path="/pricing" element={<Pricing />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </StylesProvider>
      </BrowserRouter>
    </div>
  );
};