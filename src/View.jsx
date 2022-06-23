import React from "react";
import "./Assets/Styles/View.css";
import Leftside from "./Components/Leftside";
import Rightside from "./Components/Rightside";
const View = () => {
  return (
    <div className="view-main-div">
      <div className="leftside">
        <Leftside />
      </div>
      <div className="rightside">
        <Rightside />
      </div>
    </div>
  );
};
export default View;
