import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import {useStyles} from "./AuthorizationPage.styles.js";
import {LOGIN_ERROR, UserService,} from "../../ClientService/UserService/UserService.js";

const AuthorizationPage = ({
                               setId,
                               setLogin,
                               setFirstName,
                               switchToRegister,
                           }) => {
    const client = new UserService();
    const classes = useStyles();
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const [showError, setShowError] = React.useState(false);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const handleShowPasswordChange = (event) => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const ans = await client.authorize(username, password);
        if (ans !== LOGIN_ERROR) {
            setLogin(ans.login);
            setId(ans.id);
            window.userID = ans.id;
            setFirstName(ans.firstName);
        } else {
            setShowError(true);
        }
    };

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <div className={classes.header}>LogIn</div>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <div className={classes.credentials}>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <AccountCircle/>
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="Username"
                                    label="Username"
                                    value={username}
                                    onChange={handleUsernameChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid container alignItems="flex-end">
                            <Grid item>
                                <IconButton
                                    size={"small"}
                                    aria-label="toggle password visibility"
                                    onClick={handleShowPasswordChange}
                                >
                                    {showPassword ? <Visibility/> : <VisibilityOff/>}
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="Password"
                                    type={showPassword ? "text" : "password"}
                                    label="Password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    {showError && <div className={classes.error}>LOGIN_ERROR</div>}
                </form>

                <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    onClick={handleSubmit}
                >
                    Login
                </Button>
                <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    onClick={switchToRegister}
                >
                    Switch to SignUp
                </Button>
            </div>
        </div>
    );
};

export default AuthorizationPage;
