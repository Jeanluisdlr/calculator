import React from "react";
import "../styled-sheets/ClearButton.css";

const ClearButton = (props) => (
  <div className="clear-button" onClick={props.manageClear}>
    {props.children}
  </div>
);

export default ClearButton;
