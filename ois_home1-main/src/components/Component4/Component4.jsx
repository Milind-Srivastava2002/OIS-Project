import React from "react";
import "./style.css";

export const Component4 = ({ style, vector = "/img/vector-3-1.png" }) => {
  return (
    <a href="http://35.72.8.63:36475/">
          <div className={"component-4-component"} style={style}>
        <img className={"component-4-vector"} src={vector} />
        <div className={"component-4-div-wrapper"}>
          <div className={"component-4-CRICKET"}>CRICKET</div>
        </div>
        <div className={"component-4-REGISTER"}>REGISTER</div>
        <div className={"component-4-overlap-group"}>
          <img className={"component-4-SOFT"} src={"/img/soft-6.png"} />
          <div className={"component-4-rectangle"} />
        </div>
      </div>
    </a>
    
  );
};
