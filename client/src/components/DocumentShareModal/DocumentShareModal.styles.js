import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    left: "35%",
    top: "38%",
    width: "30vw",
    height: "24vh",
    borderRadius: 10,
    zIndex: 600,
    background: "linear-gradient(top, #000000, #55EFC4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
  },
  select: {
    marginBottom: 50,
    width: "50%",
  },
}));
