import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Container, Header } from './components/index';
import { Register, Login, Reservation } from './pages';
import './index.css';
import PrivateRoute from './components/PrivateRoute';

//const pages = [{ url: "/Register", name: "Register" }];

const PageRoutes = () => {
  return (
    <Router>
      <Header>
        <h1>Workplace reservation</h1>
      </Header>
      <Container>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route
            path='/'
            element={
              <PrivateRoute>
                <Reservation />
              </PrivateRoute>
            }
          />
          <Route path='*' element={'na'} />
        </Routes>
      </Container>
    </Router>
  );
};

export default PageRoutes;
