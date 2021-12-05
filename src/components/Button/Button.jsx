import React from 'react';

import * as S from './Button.styles';

const Button = ({ type, children, handleButtonClick }) => {
  return (
    <S.button type={type || 'button'} onClick={handleButtonClick}>
      {children}
    </S.button>
  );
};

export default Button;
