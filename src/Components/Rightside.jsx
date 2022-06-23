import React from "react";
import "../Assets/Styles/Rightside.css";
import Header from "../Components/Subcomponents/Header";
import Center from "../Components/Subcomponents/Center";
import Footer from "../Components/Subcomponents/Footer";
const Rightside =() => {

    return(
        <div className="rightside-main">
        <div >
       
        <Header/>
         </div>
         <div className="center">
               <Center/>
         </div>
         
         <div className="footer"> 
              <Footer/>
         </div>
         </div>
    )
};
export default Rightside;