import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  backdrop: {
    position: "absolute",
    width: "100vw",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.3)",
    zIndex: 1,
  },
}));
