import React from "react";
import "./Profile.css";
import { FaAngleRight } from "react-icons/fa";

export const Profile = () => {
  return (
    <div className="PortFolio_card">
      <h1>Increase your credit limit</h1>
      <h3 style={{ fontSize: "15px", color: "grey", marginTop: "1em" }}>
        Mark additional funds as collateral to increase your credit limit
        futher.
      </h3>
      <div className="profile">
        <div className="profile-1">
          <div className="profile_name">
            <h3>Fetch my Kfin portfolio</h3>
          </div>
          <div className="next_icon">
            <FaAngleRight
              style={{ cursor: "pointer" }}
              size={"2em"}
            ></FaAngleRight>
          </div>
        </div>
      </div>
      <div className="profile">
        <div className="profile-1">
          <div className="profile_name">
            <h3>Fetch my CAMS portfolio</h3>
          </div>
          <div className="next_icon">
            <FaAngleRight
              style={{ cursor: "pointer" }}
              size={"2em"}
            ></FaAngleRight>
          </div>
        </div>
      </div>
      <div className="profile_bottom">
        <p
          style={{
            color: "rgba(161, 161, 188, 1)",
            marginBottom: "2em",
            fontFamily: "Lato",
            fontStyle: "normal",
          }}
        >
          Make sure your overall MF portfoli is
          <br /> greater than Rs 25,000.
        </p>
        <div className="fetech_portfolio">
          <h4> Fetch my portfolio</h4>
        </div>
      </div>
    </div>
  );
};
