import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Container, Header } from "./components/index";
import { Register, Login } from "./pages";
import "./index.css";

const pages = [{ url: "/Register", name: "Register" }];

const PageRoutes = () => {
  return (
    <Router>
      <Header>
        <Container>
          <h1>Workplace reservation</h1>
        </Container>
      </Header>
      <Container>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="*" element={"na"} />
        </Routes>
      </Container>
    </Router>
  );
};

export default PageRoutes;
