import styled from 'styled-components';

export const MapContainer = styled.div``;

export const SVGContainer = styled.svg`
  height: ${(props) => props.height}rem;
  width: ${(props) => props.width}rem;

  /*<style > .cls-1,
  .cls-2 {
    fill: #fff;
  }
  .cls-2 {
    stroke: #000;
    stroke-miterlimit: 10;
  }
  </style > */

  circle {
    :hover {
      cursor: pointer;
    }
  }
  rect {
    fill: #bfbfbf;
  }
  path {
    fill: #000;
    /*
    :hover {
      fill: blue;
      cursor: pointer;
    }

    :active {
      fill: green;
    }

    :focus {
      fill: balck;
    }*/
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
