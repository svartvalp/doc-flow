import React from "react";
import {useStyles} from "./MainPage.styles";
import Header from "../../components/Header/Header";
import DocumentList from "../../components/DocumentList/DocumentList";

const MainPage = ({
                      username,
                      showAddDocumentModal,
                      showDocumentShareModalHandler,
                      documents,
                  }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header username={username} showAddDocumentModal={showAddDocumentModal}/>
            <DocumentList
                showDocumentShareModalHandler={showDocumentShareModalHandler}
                documents={documents}
            />
        </div>
    );
};

export default MainPage;
