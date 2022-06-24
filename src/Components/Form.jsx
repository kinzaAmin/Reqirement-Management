import React from "react";
import "../Assets/Styles/Form.css";
// import Leftside from "./Leftside";
// import Rightside from "./Rightside";

function Form() {
  return (
    <div
      className="centerContainer "
    >
      <div className="Enter-name">
        <input
          type="text"
          placeholder="Enter name of your Recuitment"
          className="name-input"
        />
      </div>
      <div className="jobrole">
       
          {/* <input type="text" placeholder="Job Role: Other"></input> */}
          <select className="selector1" name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
          </select>
          <select className="selector1">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
          </select>
      </div>
      <div className="OTHER">
        <input type="text" placeholder="Other"></input>
      </div>
      <div className="description">
        <input type="text" placeholder="Write description here"></input>
      </div>
      <div className="btn">
        <div className="btn1">
       Cancel
        </div>
        <div  className="btn2">
        Save & Continue
        </div>
      </div>
    </div>
  );
}
export default Form;
