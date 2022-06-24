import React from "react";
import "../Assets/Styles/Rightside.css";
import Header from "../Components/Subcomponents/Header";
import Center from "../Components/Subcomponents/Center";
import Footer from "../Components/Subcomponents/Footer";
import Form from "./Form";
const Rightside = ( props) => {

    return(
        <div className="rightside-main">
        <div >
       
        <Header label = {props.label} />
         </div>
         <div className="center">
              {props.form ? <Form/> :  <Center/> }
         </div>
         
         <div className="footer"> 
              <Footer/>
         </div>
         </div>
    )
};
export default Rightside;