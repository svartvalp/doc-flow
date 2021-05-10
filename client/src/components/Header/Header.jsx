import React from "react";
import {useStyles} from "./Header.styles";
import addIcon from "../../assets/icons/addIcon.svg";
import {UserService} from "../../ClientService/UserService/UserService";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const Header = ({username, showAddDocumentModal}) => {
    const classes = useStyles();
    const userService = new UserService();
    return (
        <div className={classes.root}>
            <span className={classes.title}>DocFlow</span>
            <span className={classes.button} onClick={showAddDocumentModal}>
        <img className={classes.icon} src={addIcon} alt="add"/>
      </span>
            <span className={classes.user}>Hello, {username}!
          <span className={classes.logoutButton}>
              <Button
                  variant="contained"
                  color="default"
                  size="small"
                  onClick={() => userService.userLogout()}
              >
            Logout
          </Button>
          </span>
      </span>
        </div>
    );
};

export default Header;
