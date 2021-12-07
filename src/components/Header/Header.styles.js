import styled from 'styled-components';

export const div = styled.div`
  //align-items: right;
  background-color: #062847;
  color: white;
  //::afterdisplay: flex;
  //justify-content: center;
  // min-width: 200rem;
  //display: flex;
  //text-align: center;
`;
export const img = styled.img`
  max-height: 5rem;
  //margin-top: 2rem;
  margin: auto 0;
`;
export const ul = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  margin-bottom: 10px;
  li {
    margin-left: 50px;
    a {
      text-decoration: none;
      color: white;
    }
  }
`;
