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
                      if (item.title === 'LOGOUT') {
                        refreshPage();
                        console.log(item.title);
                      }
                      localStorage.removeItem('token');
                      refreshPage();
                      Navigate('/login', { replace: true });
                    }}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </S.ul>
        </Container>
      </S.div>
    </>
  );
};

export default Header;
