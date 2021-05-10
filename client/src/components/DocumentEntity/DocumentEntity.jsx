import React from "react";
import { useStyles } from "./DocumentEntity.styles.js";
import shareIcon from "../../assets/icons/shareIcon.svg";
import trashIcon from "../../assets/icons/trashIcon.svg";
import clsx from "clsx";

const DocumentEntity = ({ name, showPreview, id, date, share, deleteDocument }) => {
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

  const deleteClickHandler = (event) => {
    if (event.target.alt === "delete") {
      event.stopPropagation();
    }
    deleteDocument(id);
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
      <td className={clsx(classes.shareCell)}>
        {" "}
        <img
            onClick={deleteClickHandler}
            className={classes.icon}
            src={trashIcon}
            alt="delete"
        />
      </td>
    </tr>
  );
};

export default DocumentEntity;
