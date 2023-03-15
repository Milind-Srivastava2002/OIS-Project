import React from "react";
import "./style.css";

export const MouseoffSoftball = ({ style, vector = "/img/vector-3-1.png" }) => {
  return (
    <a href="http://35.72.8.63:36475/">
      <div className={"MOUSEOFF-SOFTBALL-MOUSEOFF-SOFTBALL"} style={style}>
        <img className={"MOUSEOFF-SOFTBALL-vector"} src={vector} />
        <div className={"MOUSEOFF-SOFTBALL-div-wrapper"}>
          <div className={"MOUSEOFF-SOFTBALL-SOFTBALL"}>SOFTBALL</div>
        </div>
        <div className={"MOUSEOFF-SOFTBALL-REGISTER"}>REGISTER</div>
        <div className={"MOUSEOFF-SOFTBALL-rectangle"} />
        <img className={"MOUSEOFF-SOFTBALL-SOFT"} src={"/img/soft-3-2.png"} />
      </div>
    </a>
    
  );
};
