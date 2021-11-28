import React from "react";

import * as S from "./Header.styles";
import logo from "../../assets/norian_logo-3.png";
import { Container } from "..";

const Header = ({ children }) => {
  return (
    <S.div>
      <Container>
        <S.img src={logo} alt="logo" />
        <div>{children}</div>
      </Container>
    </S.div>
  );
};

export default Header;
