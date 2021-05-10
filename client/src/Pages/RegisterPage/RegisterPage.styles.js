import {makeStyles} from "@material-ui/core/styles";

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
        width: "22vw",
        height: "55vh",
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        fontWeight: "bold",
        paddingBottom: 45,
        fontSize: 36,
        color: "white",
    },
    errorText: {
        color: "#a31212",
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "bold",
    },
}));
