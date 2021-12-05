import styled from 'styled-components';

export const MapContainer = styled.div``;

export const SVGContainer = styled.svg`
  height: ${(props) => props.height}rem;
  width: ${(props) => props.width}rem;

  path {
    fill: gray;

    :hover {
      fill: blue;
      cursor: pointer;
    }

    :active {
      fill: green;
    }

    :focus {
      fill: black;
    }
  }

  .red {
    fill: #ff0000;
  }

  .yellow {
    fill: rgba(200, 200, 200, 0.2);
  }
`;

export const svgPathContainer = styled.a`
  color: green;
  background-color: pink;
  :visited {
    background-color: yellow;
  }
`;
