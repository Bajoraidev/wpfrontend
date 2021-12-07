import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Container, Header, Loading } from './components/index';
import { Register, Login, Reservation } from './pages';
import './index.css';
import PrivateRoute from './components/PrivateRoute';

const LazyHome = lazy(() => import('./pages/Reservation/Reservation'));

const PageRoutes = () => {
  return (
    <Router>
      <Header>
        <h1>Workplace reservation</h1>
      </Header>
      <Container>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route
              component={LazyHome}
              path='/'
              element={
                <PrivateRoute>
                  <Reservation />
                </PrivateRoute>
              }
            />
            <Route path='*' element={'na'} />
          </Routes>
        </Suspense>
      </Container>
    </Router>
  );
};

export default PageRoutes;
