import React from "react";
import "../../Assets/Styles/Footer.css";
import send from "../../Assets/images/send.png";
import Twitter from "../../Assets/images/twitter.png";
import facebook from "../../Assets/images/fb.png";
import insta from "../../Assets/images/insta.png";
import Linkedin from "../../Assets/images/linkedin.png";

const Footer = () => {
  return (
    <>
      <div className="main-footer">
        
        <div className="footer-div-1">
          <div className="first-info">
            <span> Services</span>
            <span> Piricing</span>
            <span> Contact</span>
          </div>
          <div className="second-info">
            <span> Terms of Services</span>
            <span> Terms of Sale</span>
            <span> Privacy policy & Cookies</span>
          </div>
          <div className="third-info">
            <span> For subject-matter experts</span>
            <span> Help center</span>
            <span> Information for candidates</span>
          </div>
          <div>
            <div className="forth-info" >
              <div className="social-media-links">
                <img alt= "" src= {Twitter} />
                <img alt= "" src= {facebook} />
                <img alt= "" src= {insta} />
                <img alt= "" src= {Linkedin } />
                 </div>
                 <div className="explanation">
              <span > Subscribe our Newsletters to keep updated yourself with Current
                Revolution in Fitness Sector. </span>
                </div>
              <div className="input-field">
            <input type="text" placeholder="Enter your Email" className="input1"/> 
            <img alt=" " src={send} style={{cursor:"pointer"}}/>
            </div>
            </div>
          </div>
        </div>

        <div className="copyRight">© CertiJob 2021. All rights reserved.</div>
      </div>
    </>
  );
};
export default Footer;
