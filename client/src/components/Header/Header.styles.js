import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    width: "100vw",
    margin: 0,
    height: "6vh",
    alignItems: "center",
    background: "linear-gradient(to left, #04619F, #000000)",
  },
  title: {
    color: "white",
    fontSize: "20px",
    margin: "20px",
    cursor: "default",
  },
  user: {
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    margin: "20px",
    cursor: "default",
  },
  button: {
    display: "flex",
    width: "2%",
    height: "70%",
    alignSelf: "center",
    justifySelf: "center",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
      outline: "1px solid blue",
    },
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));
