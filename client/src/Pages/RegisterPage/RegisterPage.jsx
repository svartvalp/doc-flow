import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import { useStyles } from "./RegisterPage.styles.js";
import { UserService } from "../../ClientService/UserService/UserService.js";
import Loader from "../../components/Loader/Loader.jsx";

const RegisterPage = ({ switchToAuthorize }) => {
  const classes = useStyles();
  const client = new UserService();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [error, setError] = React.useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleShowPasswordChange = (event) => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const credintials = {
      firstName,
      lastName,
      login: username,
      password,
    };
    const resp = await client.register(credintials);
    setIsLoading(false);
    if (!resp.status) {
      setError("Something went wrong");
      return;
    }
    switchToAuthorize(credintials);
  };

  return (
    <div className={classes.root}>
      <Loader show={isLoading} />
      <div className={classes.wrapper}>
        <div className={classes.header}>Sign Up</div>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.credentials}>
            <TextField
              id="Firstname"
              label="Firstname"
              variant="outlined"
              value={firstName}
              onChange={handleFirstNameChange}
            />
            <TextField
              id="Lastname"
              label="Lastname"
              variant="outlined"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </div>
          <div className={classes.credentials}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
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
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleShowPasswordChange}
                  size={"small"}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
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
        </form>
        <div className={classes.errorText}>{error}</div>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          onClick={switchToAuthorize}
        >
          Switch to LogIn
        </Button>
      </div>
    </div>
  );
};

export default RegisterPage;
