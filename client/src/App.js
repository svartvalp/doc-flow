import React from "react";
import "./App.css";
import AuthorizationPage from "./Pages/AuthorizationPage/AuthorizationPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import MainPage from "./Pages/MainPage/MainPage";
import {AUTHORIZE_ERROR, UserService,} from "./ClientService/UserService/UserService";
import AddDocumentModal from "./components/AddDocumentModal/AddDocumentModal";
import DocumentShareModal from "./components/DocumentShareModal/DocumentShareModal";
import {DocumentService} from "./ClientService/DocumentService/DocumentService";

export const User = React.createContext({
    username: null,
    id: null,
});

function App() {
    const client = new UserService();
    const docClient = new DocumentService();
    const [login, setLogin] = React.useState("");
    const [id, setId] = React.useState(null);
    const [documents, setDocuments] = React.useState([]);
    const [firstName, setFirstName] = React.useState("");
    const [isAuthorization, setIsAuthorization] = React.useState(true);
    const [showAddDocumentModal, setShowAddDocumentModal] = React.useState(false);
    const [showDocumentShareModal, setShowDocumentShareModal] = React.useState(
        false
    );

    async function getDocuments() {
        const data = await docClient.getAllDocuments(window.userID);
        setDocuments(data);
    }

    const showAddDocumentModalHandler = () => {
        setShowAddDocumentModal(true);
    };

    const hideAddDocumentModalHandler = () => {
        setShowAddDocumentModal(false);
    };

    const showDocumentShareModalHandler = (documentID) => {
        window.documentID = documentID;
        setShowDocumentShareModal(true);
    };

    const hideDocumentShareModalHandler = () => {
        window.documentID = null;
        setShowDocumentShareModal(false);
    };

    const switchToRegister = () => {
        setIsAuthorization(false);
    };

    const switchToAuthorize = () => {
        setIsAuthorization(true);
    };

    React.useEffect(() => {
        getDocuments();
    }, [login, id]);

    React.useEffect(() => {
        async function getInfo() {
            const ans = await client.getUserInfo();
            if (ans !== AUTHORIZE_ERROR) {
                window.userID = ans.id;
                setLogin(ans.login);
                setId(ans.id);
                setFirstName(ans.firstName);
                getDocuments();
            }
        }

        getInfo();
    }, []);
    return (
        <>
            {showAddDocumentModal && (
                <AddDocumentModal
                    cancelHandler={hideAddDocumentModalHandler}
                    updateData={getDocuments}
                    hideAddDocumentModalHandler={hideAddDocumentModalHandler}
                />
            )}
            {showDocumentShareModal && (
                <DocumentShareModal cancelHandler={hideDocumentShareModalHandler}/>
            )}
            {login && id ? (
                <MainPage
                    username={login}
                    showAddDocumentModal={showAddDocumentModalHandler}
                    showDocumentShareModalHandler={showDocumentShareModalHandler}
                    documents={documents}
                />
            ) : isAuthorization ? (
                <AuthorizationPage
                    switchToRegister={switchToRegister}
                    setLogin={setLogin}
                    setId={setId}
                    setFirstName={setFirstName}
                />
            ) : (
                <RegisterPage switchToAuthorize={switchToAuthorize}/>
            )}
        </>
    );
}

export default App;
