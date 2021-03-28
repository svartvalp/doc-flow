import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {},
  element: {
    borderSpacing: 0,
    height: "25px",
    width: "100%",
    padding: 0,
    "&:hover": {
      cursor: "pointer",
      background: "grey",
      color: "white",
    },
    marginBottom: 5,
  },
  cell: {
    padding: "0px 5px",
    marginRight: 5,
    borderRight: "1px solid black",
    lineHeight: 1.4,
  },
  shareCell: {
    padding: 5,
    borderSpacing: 0,
    marginLeft: 10,
    lineHeight: 1.4,
  },
  icon: {
    marginLeft: 5,
    maxWidth: "100%",
    maxHeight: "90%",
    height: "25px",
  },
}));
