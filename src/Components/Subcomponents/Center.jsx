import React from "react";
import Tableheader from "../../Components/Subcomponents/TableHeader";
import Table from "../Table";
const Center = () =>{
    return(
        <div className="centerContainer" style={{position:"inherit" , height:"100%" , width:"100%"}}>
          <Tableheader/>
          <Table/>
          
        </div>
    )
};
export default Center;