import React from "react";
// import Rectangle from "../../Assets/images/Rectangle.png";
// import Flag from "../../Assets/images/flag.png";
// import EN from "../../Assets/images/EN.png";
// import arrow1 from "../../Assets/images/arrow1.png";
import arrow2 from "../../Assets/images/arrow2.png";
import bell from "../../Assets/images/bell.png";
import dp from "../../Assets/images/Ellipse 2.png";
import group from "../../Assets/images/group1.png";
import "../../Assets/Styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="title">
        <span >My Recruitments</span>
      </div>
      <div className="header-end-portion">
        <div className="white-rectangle">
            <img alt= " " src={group}/>
          {/* <img alt=" " src={Flag} className="flag" />
          <img alt=" " src={EN} className="EN" />
          <img alt=" " src={arrow1} className="arrow1" /> */}
        </div>
        <div className="bell" >
          <img alt=" " src={bell}  />
        </div>
        <div className="profile">
          <img alt=" " src={dp} className="dp" />
         
            <span className="name"> John Doe</span>
            <img alt=" " src={arrow2} className="arrow2" />
          
        </div>
      </div>
    </div>
  );
};
export default Header;
