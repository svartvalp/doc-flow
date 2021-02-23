package ru.mirea.docflow.service;

import ru.mirea.docflow.entity.Document;

import java.util.List;

public interface DocumentService {
    List<Document> getUserDocuments(int userId);
    void addDocument(int userId, int docId);
}
