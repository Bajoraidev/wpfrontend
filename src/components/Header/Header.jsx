import React from 'react';
import { HeaderLinks } from './HeaderLinks';
import { Container, Button } from '..';
import * as S from './Header.styles';
import logo from '../../assets/norian_logo-3.png';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ children }) => {
  const refreshPage = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  const Navigate = useNavigate();

  return (
    <>
      <S.div>
        <Container>
          <S.img src={logo} alt='logo' />
          <div>{children}</div>
          <S.ul>
            {HeaderLinks.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    to={item.url}
                    onClick={() => {
                      refreshPage();
                    }}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </S.ul>
          <Button
            onClick={(e) => {
              localStorage.removeItem('token');
              Navigate('/', { replace: true });
            }}
          >
            LOG OUT
          </Button>
        </Container>
      </S.div>
    </>
  );
};

export default Header;
