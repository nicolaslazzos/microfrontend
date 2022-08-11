import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core';

import Pricing from './components/Pricing';
import Landing from './components/Landing';

export default () => {
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/pricing" element={<Pricing />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};