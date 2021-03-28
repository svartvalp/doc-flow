import React from "react";
import "./Loader.css";
import Backdrop from "../Backdrop/Backdrop";

const Loader = ({ show }) => {
  return (
    show && (
      <Backdrop>
        <div class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Backdrop>
    )
  );
};

export default Loader;
