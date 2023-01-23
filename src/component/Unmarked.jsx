import React, { useState } from "react";
import "./Unmarked.css";
import { FaBackward } from "react-icons/fa";
import CardModal from "./CardModal";

const Unmarked = (props) => {
  const [sum, setSum] = React.useState(props.portFolio);
  const [newCredit, setNewCredit] = React.useState(0);
  const [checked, setChecked] = React.useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const check = (index, event) => {
    if (event.target.checked) {
      let arr = [...checked];
      arr[index] = 1;
      setChecked([...arr]);
      console.log("sum", sum);
      setSum(sum + 50000);
      setNewCredit(newCredit + 50000);
    } else {
      let arr = [...checked];
      arr[index] = 0;

      setChecked([...arr]);
      setSum(sum - 50000);
      setNewCredit(newCredit - 50000);
    }
  };
  var isChecked = (item) =>
    checked[item] ? "checked-item" : "not-checked-item";
  return (
    <>
      <div className="modal">
        <div className="back_icon">
          <span style={{ cursor: "arrow" }}>
            <FaBackward></FaBackward>
          </span>
          <span style={{ marginBottom: "4px" }}>
            <h4>Back</h4>
          </span>
        </div>
        <h1>Unmark funds as collateral</h1>
        <h4 style={{ fontSize: "15px", color: "grey", marginTop: "1em" }}>
          Select the funds you wish to unmark as collateral
        </h4>
        <h2 style={{ fontSize: "20px", color: "grey", marginTop: "1em" }}>
          List of mututal funds-
        </h2>
        <div className="main_div">
          {checked.map((key, index) => {
            return (
              <div className={isChecked(index)} id="unmarked">
                <div className="unmarked_child">
                  <div className="input_tag">
                    <input
                      type="checkbox"
                      name="my-checkbox"
                      onChange={(e) => {
                        check(index, e);
                      }}
                    />
                  </div>
                  <div>
                    <h5>SBI Mutual Fund</h5>
                    <h5 style={{ color: "rgba(129, 129, 165, 1)" }}>
                      Marked value ₹ 50000
                    </h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="unmarked_card">
        <div className="unmarked_card-1">
          <p>New Credit Line Value</p>
          <p style={{ fontWeight: "bold" }}>₹ {newCredit}</p>
        </div>
        <div className="unmarked_card-2">
          <button
            className="unmarked_card_btn"
            onClick={() => {
              onOpenModal();
            }}
          >
            Unmark funds
          </button>
        </div>
        <CardModal
          open={open}
          onOpenModal={onOpenModal}
          onCloseModal={onCloseModal}
          newCredit={newCredit}
          setPortfolio={props.setPortfolio}
          sum={sum}
          setSum={setSum}
        ></CardModal>
      </div>
    </>
  );
};

export default Unmarked;
