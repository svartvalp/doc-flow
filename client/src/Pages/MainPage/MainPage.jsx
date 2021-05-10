import React from "react";
import {useStyles} from "./MainPage.styles";
import Header from "../../components/Header/Header";
import DocumentList from "../../components/DocumentList/DocumentList";

const MainPage = ({
                      username,
                      showAddDocumentModal,
                      showDocumentShareModalHandler,
                      documents,
                      deleteDocument
                  }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header username={username} showAddDocumentModal={showAddDocumentModal}/>
            <DocumentList
                showDocumentShareModalHandler={showDocumentShareModalHandler}
                documents={documents}
                deleteDocument={deleteDocument}
            />
        </div>
    );
};

export default MainPage;
