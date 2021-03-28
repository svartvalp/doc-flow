import React from "react";
import { useStyles } from "./Header.styles";
import addIcon from "../../assets/icons/addIcon.svg";

const Header = ({ username, showAddDocumentModal }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <span className={classes.title}>DocFlow</span>
      <span className={classes.button} onClick={showAddDocumentModal}>
        <img className={classes.icon} src={addIcon} alt="add" />
      </span>
      <span className={classes.user}>Hello, {username}!</span>
    </div>
  );
};

export default Header;
