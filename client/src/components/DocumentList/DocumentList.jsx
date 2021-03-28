import React from "react";
import DocumentEntity from "../DocumentEntity/DocumentEntity";
import { useStyles } from "./DocumentList.styles.js";
import DocumentModal from "../DocumentModal/DocumentModal";
import { DocumentService } from "../../ClientService/DocumentService/DocumentService";

const DocumentList = ({ showDocumentShareModalHandler, documents }) => {
  const classes = useStyles();
  const client = new DocumentService();
  const [preview, setPreview] = React.useState("");
  const showPreview = (id) => {
    const url = `/document/${id}/data`;
    setPreview(url);
  };
  const cancelPreview = (event) => {
    setPreview("");
  };
  return (
    <div className={classes.root}>
      {preview && (
        <DocumentModal preview={preview} cancelHandler={cancelPreview} />
      )}

      <div className={classes.listWrapper}>
        <table className={classes.table}>
          <thead className={classes.header}>
            <tr className={classes.headerRow}>
              <th className={classes.title}>Title</th>
              <th className={classes.date}>Date Created</th>
              <th className={classes.share}></th>
            </tr>
          </thead>
          <tbody className={classes.tableBody}>
            {documents.length !== 0 &&
              documents[0] &&
              documents.map((item) => (
                <DocumentEntity
                  key={`table-document-${item.id}`}
                  name={item.name}
                  id={item.id}
                  date={item.createdAt}
                  showPreview={showPreview}
                  share={showDocumentShareModalHandler}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DocumentList;
