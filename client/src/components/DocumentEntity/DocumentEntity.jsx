import React from "react";
import { useStyles } from "./DocumentEntity.styles.js";
import shareIcon from "../../assets/icons/shareIcon.svg";
import clsx from "clsx";

const DocumentEntity = ({ name, showPreview, id, date, share }) => {
  const classes = useStyles();
  const clickHandler = (event, id) => {
    showPreview(id);
  };
  const newDate = new Date(date);
  const shareClickHandler = (event) => {
    if (event.target.alt === "share") {
      event.stopPropagation();
    }
    share(id);
  };
  return (
    <tr
      className={classes.element}
      onClick={(event) => clickHandler(event, id)}
    >
      <td className={classes.cell}>{name}</td>
      <td className={classes.cell}>{newDate.toUTCString()}</td>
      <td className={clsx(classes.shareCell)}>
        {" "}
        <img
          onClick={shareClickHandler}
          className={classes.icon}
          src={shareIcon}
          alt="share"
        />
      </td>
    </tr>
  );
};

export default DocumentEntity;
