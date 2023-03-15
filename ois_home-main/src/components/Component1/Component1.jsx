import React from "react";
import "./style.css";

export const Component1 = ({ style, vector = "/img/vector-3-1.png" }) => {
  return (
    <a href="http://35.72.8.63:36475/">
      <div className={"component-1-component"} style={style}>
      <div className={"component-1-overlap-group"}>
        <div className={"component-1-rectangle"} />
        <img className={"component-1-vector"} src={vector} />
        <div className={"component-1-rectangle-19"} />
        <div className={"component-1-REGISTER"}>REGISTER</div>
        <div className={"component-1-BASEBALL"}>BASEBALL</div>
        <img className={"component-1-SOFT"} src={"/img/soft-3.png"} />
        <div className={"component-1-rectangle-22"} />
      </div>
    </div>
    </a>
    
  );
};
