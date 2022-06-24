import React from "react";
import "../../Assets/Styles/Tableheader.css";
//import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
const Tableheader = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="tableheader-main">
        <div className="menu">
          <span style={{ color: "#142D52" }}> Active</span>
          <span> Archive</span>
          <span>Draft</span>
        </div>
        <div
          className="createRequirementBtn"
          onClick={(e) => navigate("/create-requirements")}
        >
          Create New Recruitment
        </div>
      </div>
    </>
  );
};
export default Tableheader;
