import React from "react";
import Footer from "./Footer";
import { FaBell } from "react-icons/fa";
import "./Card.css";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <>
      <div className="Container">
        <div className="header">
          <div className="name">
            <span> WELCOME</span>
            <span style={{ fontWeight: "bold", marginLeft: "1rem" }}>Yash</span>
          </div>
          <div className="logo">
            <span>
              <FaBell
                size={"1.5em"}
                style={{ borderColor: "1.5px solid rgba(85, 22, 170, 1)" }}
              />
            </span>
          </div>
        </div>
        <div className="portfolio">
          <div>
            <h2>Total Portfolio Value</h2>
            <h2> $ {props.portFolio}</h2>
          </div>
        </div>
        <div className="Second_section">
          <div className="Second_section-1">
            <h5>Login to Value</h5>
            <h1>Healthy!!</h1>
          </div>
          <div>
            <button className="Second_section_button">Learn More</button>
          </div>
        </div>
        <div className="third_section">
          <Link to="./Profile">
          <button className="third_section_button">
            Increase Credit Limit
          </button>
          </Link>
        </div>
        <div className="fourth_section">
          <div className="fourth_section-1">
            <p>Marked Mutual Funds-</p>
          </div>
          <div>
            <Link to="./Unmarked">
              {" "}
              <button className="fourth_section_button">Unmark funds</button>
            </Link>
          </div>
        </div>
        {props.data.map((index) => {
          return (
            <div className="main_card">
              <h3>{index.scheme_name.slice(0,21)}<span style={{cursor:"pointer"}} onClick={()=>{     
              }}>...</span></h3>
              <div className="main_card_child">
                <div className="main_card-child-1">
                  <div className="main_card-child-1-1">
                    <div style={{ color: " rgba(129, 129, 165, 1)" }}>
                      {" "}
                      <h5>Current value</h5>
                    </div>
                    <div>
                      <h5>${index.current_value.toString().slice(0, 3)}</h5>
                    </div>
                  </div>
                  <div className="main_card-child-1-1">
                    <div style={{ color: " rgba(129, 129, 165, 1)" }}>
                      <h5>Folio Number</h5>
                    </div>
                    <div>
                      <h5>${index.folio_number.toString().slice(0, 4)}</h5>
                    </div>
                  </div>
                </div>
                <div className="main_card-child-2">
                  <div className="main_card-child-1-1">
                    <div style={{ color: " rgba(129, 129, 165, 1)" }}>
                      <h5>Units</h5>
                    </div>
                    <div>
                      <h5>{index.units}</h5>
                    </div>
                  </div>
                  <div className="main_card-child-1-1">
                    <div style={{ color: " rgba(129, 129, 165, 1)" }}>
                      <h5>Nav</h5>
                    </div>
                    <div>
                      <h5>{index.nav.toString().slice(0, 3)}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Card;
