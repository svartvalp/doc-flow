import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import Button from "@material-ui/core/Button";
import { useStyles } from "./DocumentShareModal.styles";
import Select from "react-select";
import { UserService } from "../../ClientService/UserService/UserService";
import { DocumentService } from "../../ClientService/DocumentService/DocumentService";

const DocumentShareModal = ({ cancelHandler }) => {
  const classes = useStyles();
  const [users, setUsers] = React.useState([]);
  const [selectValue, setSelectValue] = React.useState("");
  const docClient = new DocumentService();
  const userClient = new UserService();

  const selectChangeValueHandler = (inputValue) => {
    setSelectValue(inputValue.value);
  };

  const handleSubmit = async () => {
    const flag = await docClient.shareDocument(selectValue, window.documentID);
  };

  React.useEffect(() => {
    async function getAllUsers() {
      const data = await userClient.getAllUsers();
      setUsers(data);
    }
    getAllUsers();
  }, []);

  return (
    <Backdrop onCancel={cancelHandler}>
      <div className={classes.root}>
        <div className={classes.form}>
          <Select
            onChange={selectChangeValueHandler}
            className={classes.select}
            isSearchable={true}
            isClearable={true}
            options={users}
          />
          <Button variant="contained" color="default" onClick={handleSubmit}>
            Upload
          </Button>
        </div>
      </div>
    </Backdrop>
  );
};

export default DocumentShareModal;
