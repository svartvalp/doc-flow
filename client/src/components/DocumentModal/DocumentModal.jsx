import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import { useStyles } from "./DocumentModal.styles";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

const DocumentModal = ({ preview, cancelHandler }) => {
  const classes = useStyles();
  return (
    <Backdrop onCancel={cancelHandler}>
      <DocViewer
        className={classes.root}
        pluginRenderers={DocViewerRenderers}
        documents={[{ uri: preview }]}
        config={{
          header: {
            disableHeader: true,
            disableFileName: true,
          },
        }}
      />
    </Backdrop>
  );
};

export default DocumentModal;
