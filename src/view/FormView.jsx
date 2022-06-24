import React from "react";
import Leftside from "../Components/Leftside";
import Rightside from "../Components/Rightside";

function FormView () {
    return(
        <div className="view-main-div">
        <div className="leftside">
          <Leftside />
        </div>
        <div className="rightside">
          <Rightside form label = "Create New Recruitment" />
        </div>
      </div>
    )
};
export default FormView ;