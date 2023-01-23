import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./CardModal.css";
import warnImg from "../images/Popup.png";

const CardModal = (props) => {
  return (
    <>
      <div className="card_modal">
        <Modal open={props.open} onClose={props.onCloseModal} center>
        <div className="Warning_card">
        <p>Are you sure you want to unmark these<br></br> funds as collateral?</p>
        <div className="image">
          <img src={warnImg} alt=""></img>
        </div>
        <h6 style={{ color: "rgba(129, 129, 165, 1)" }}>
          Your Credit line value will  decrease.
        </h6>
        <h6>New Credit Line Value ₹ {props.newCredit}</h6>
        <div className="unmarked_btn">
          <button className="unmarked_btn-1 " onClick={()=>{
            props.onCloseModal();
          }}>Go back</button>
          <button className="unmarked_btn-2" onClick={()=>{
            props.setPortfolio(props.sum)
            props.onCloseModal();
          }}>Confirm</button>
        </div>
      </div>
        </Modal>
      </div>
    </>
  );
};

export default CardModal;
