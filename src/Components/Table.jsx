import React from "react";
import "../Assets/Styles/Table.css";
import arrow1 from "../Assets/images/arrow1.png";
import archive from "../Assets/images/archive.png";
import dell from "../Assets/images/delete.png";
import edit from "../Assets/images/edit.png";
import addnew from "../Assets/images/addnewperson.png";
const Table = (props) => {
    const recruitmentData = [
        {id:"RID-001" , name:"Kinza Amin" , Candidate_Number:"1" , start_date:"24/jun/2022"},
        {id:"RID-002" , name:"Asra khan" , Candidate_Number:"2" , start_date:"24/jun/2022"},
        {id:"RID-003" , name:"Faiza Aslam" , Candidate_Number:"3" , start_date:"25/jun/2022"},
        {id:"RID-004" , name:"Zubia Alam" , Candidate_Number:"4" , start_date:"22/jun/2022"},
        {id:"RID-005" , name:"Sadaf Amin" , Candidate_Number:"5" , start_date:"24/july/2022"},
        {id:"RID-006" , name:"Alizay Amin" , Candidate_Number:"6" , start_date:"24/April/2022"},
    ]
  return (
    <div className="tableContainer">
      <div className="table-heading">
        <span>ID</span>
        <span>Recruitment Name</span>
        <span>Candidates No.</span>
        <span>Start Date</span>
        <span>Status</span>
        <span>Actions</span>
      </div>

     
        { recruitmentData.map( (data , index) => (
             <div key={index} className="table-data">
             <span className="tableValue">{data.id}</span>
             <span className="tableValue">{data.name}</span>
             <span className="tableValue">{data.Candidate_Number}</span>
             <span className="tableValue">{data.start_date}</span>
     
             <div className="progress-btn">
               <span className="progress-btn-text">In Progress</span>
               <img
                 alt=""
                 src={arrow1}
                 style={{
                   width: "10px",
                   height: "10px",
                   paddingLeft: "10px",
                   cursor: "pointer",
                   marginTop: "5px",
                 }}
               />
             </div>
             <div className="actions">
               <img alt="" src={archive} />
               <img alt="" src={dell} />
               <img alt="" src={edit} />
               <img alt="" src={addnew} />
             </div>
           </div>
    ))}
        
    </div>
  );
};
export default Table;
