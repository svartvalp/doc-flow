import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    "& .MuiButton-root": {
      marginTop: 20,
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  wrapper: {
    width: "20vw",
    height: "40vh",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    overflow: "hidden",
    padding: "45px 55px 37px 55px",
    background: "linear-gradient(top, #7579ff, #b224ef)",
  },
  credentials: {
    marginTop: 5,
    alignSelf: "center",
  },
  header: {
    fontWeight: "bold",
    paddingBottom: 45,
    fontSize: 36,
    color: "white",
  },
  error: {
    color: "#666",
  },
}));
