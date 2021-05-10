import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import { useStyles } from "./AddDocumentModal.styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { DocumentService } from "../../ClientService/DocumentService/DocumentService";

const AddDocumentModal = ({
  cancelHandler,
  updateData,
  hideAddDocumentModalHandler,
}) => {
  const classes = useStyles();
  const fileInputRef = React.useRef();
  const client = new DocumentService();
  const [fileName, setFileName] = React.useState("");
  const [isValid, setIsValid] = React.useState(false);
  const [error, setError] = React.useState("");

  const fileChangeHandler = () => {
    const file = fileInputRef.current.files[0];
    const extension = file.name.slice(-4, file.name.length);
    setFileName(fileInputRef.current.files[0].name.slice(0, -4));
    if (extension !== ".pdf") {
      setError("Invalid File Extension");
      setIsValid(false);
      return;
    }
    setIsValid(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const file = new Blob([fileInputRef.current.files[0]], {
      type: "application/pdf",
    });
    const formData = new FormData();
    formData.append("file", fileInputRef.current.files[0]);
    const makeResult = await client.makeDocument(
      window.userID,
      fileName,
      formData
    );
    updateData();
    hideAddDocumentModalHandler();
  };
  const uploadHandler = () => {
    fileInputRef.current.click();
  };
  return (
    <Backdrop onCancel={cancelHandler}>
      <div className={classes.root}>
        <form className={classes.form}>
          <div>
            <TextField
              id="fileName"
              label="File Name"
              variant="outlined"
              disabled={true}
              value={fileName}
            />
            <IconButton
              onClick={uploadHandler}
              color="secondary"
              aria-label="upload"
            >
              <CloudUploadIcon />
            </IconButton>
            <input
              ref={fileInputRef}
              className={classes.fileInput}
              onChange={fileChangeHandler}
              type="file"
            />
          </div>
          <div className={classes.errorText}>{error}</div>
          <Button
            variant="contained"
            color="default"
            startIcon={<CloudUploadIcon />}
            disabled={!isValid}
            onClick={handleSubmit}
          >
            Upload
          </Button>
        </form>
      </div>
    </Backdrop>
  );
};

export default AddDocumentModal;
