import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    left: "35%",
    top: "30%",
    width: "30vw",
    height: "40vh",
    borderRadius: 10,
    zIndex: 600,
    background: "linear-gradient(top, #000000, #55EFC4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    height: "40%",
    display: "flex",
    padding: 50,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
  },
  fileInput: {
    display: "none",
  },
  errorText: {
    color: "#a31212",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "bold",
  },
}));
