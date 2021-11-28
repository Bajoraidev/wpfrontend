import React from "react";
import map from "../../assets/4_floor.png";
import * as S from "./Container.styles";

const Container = ({ children }) => {
  return <S.div>{children}</S.div>;
};

/*<div>
      <img src={map} alt="map4" useMap="#workmap" />
      <map name="workmap">
        <area
          shape="circle"
          coords="959,606,10"
          href="https://www.15min.lt/"
          alt="Test"
        />
      </map>
    </div>*/

export default Container;
