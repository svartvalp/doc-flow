package ru.mirea.docflow.service;

import ru.mirea.docflow.dto.DocumentDto;
import ru.mirea.docflow.entity.Document;

import java.util.List;

public interface DocumentService {
    List<DocumentDto> getUserDocuments(int userId);

    void addDocument(int userId, int docId);

    Document saveDocument(DocumentDto document, int userId);

    void uploadFile(int documentId, byte[] file);

    DocumentDto GetDocumentInfo(int docId);

    byte[] getDocumentData(int docId);

    void deleteDocument(int docId, String username);
}
