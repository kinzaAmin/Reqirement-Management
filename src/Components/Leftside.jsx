import React from "react";
import "../Assets/Styles/Leftside.css";
import Logo from "../Assets/images/logo2.png";
import Bag from "../Assets/images/Vector.png";
import Line from "../Assets/images/Line 12.png";
import box from "../Assets/images/Illustration.png";

const Leftside = () => {
  return (
    <div className="leftside-main" >
      <div className="upper-part">
        <div className="logo">
          <img alt="" src={Logo} />
        </div>
        <div className="my-recruitment" style={{ marginLeft: "8px" }}>
          <img alt="" src={Bag} />
          <span style={{ marginLeft: "10px" , cursor:"pointer" }}> My Recruitment</span>
        </div>
      </div>
      <div className="lower-part">
        <div className="line">
          <img alt="" src={Line} />
        </div>
        <div className="box-img">
          <img alt=" " src={box} />
        </div>
        <div className="text1">
          <p> Lorem ipsum dolor sit amet, consec tetur adipiscing elit. </p>
        </div>
      </div>
    </div>
  );
};
export default Leftside;
