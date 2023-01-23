import React from "react";
import "./footer.css";
import { FaHouseUser, FaUser, FaBriefcase } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_item">
          <div className="footer_icon">
            <FaHouseUser className="icons" size={"2em"} />
          </div>
          <h6 className="icons">Home</h6>
        </div>
        <div className="footer_item">
          <div className="footer_icon">
            <FaBriefcase className="icons" size={"2em"} />
          </div>
          <h6 className="icons">PortFolio</h6>
        </div>
        <div className="footer_item">
          <div className="footer_icon">
            <FaUser className="icons" size={"2em"} />
          </div>
          <h6 className="icons">Profile</h6>
        </div>
      </div>
    </>
  );
};

export default Footer;
