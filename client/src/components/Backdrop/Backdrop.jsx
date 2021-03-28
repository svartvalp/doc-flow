import React from "react";
import { useStyles } from "./Backdrop.styles";

const Backdrop = ({ children, onCancel }) => {
  const classes = useStyles();
  const ref = React.useRef();

  const handleClick = (event) => {
    if (event.target === ref.current) {
      onCancel();
    }
  };

  return (
    <div onClick={handleClick} className={classes.backdrop} ref={ref}>
      {children}
    </div>
  );
};

export default Backdrop;
