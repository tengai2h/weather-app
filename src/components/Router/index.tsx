import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import CardPage from 'components/Pages/CardPage';
import MainPage from 'components/Pages/MainPage';
import { ROUTES } from 'constant/routes';

const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path={ROUTES.CARD} element={<CardPage />} />
    </Routes>
  );
};

export default Router;
