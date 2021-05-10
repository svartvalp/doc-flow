package ru.mirea.docflow.service;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import ru.mirea.docflow.dao.DocumentDao;
import ru.mirea.docflow.dao.UserDao;
import ru.mirea.docflow.dto.DocumentDto;
import ru.mirea.docflow.entity.Document;
import ru.mirea.docflow.exception.AlreadyExistsException;
import ru.mirea.docflow.exception.EntityNotFoundException;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class DocumentServiceImpl implements DocumentService {
    private final UserDao userDao;
    private final DocumentDao documentDao;
    private final ModelMapper modelMapper;
    private final UserService userService;


    @Override
    public List<DocumentDto> getUserDocuments(int userId) {
        var user = userDao.findById(userId);
        return user
                .orElseThrow(EntityNotFoundException::new)
                .getDocuments()
                .stream().map(doc -> modelMapper.map(doc, DocumentDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public void addDocument(int userId, int docId) {
        var user = userDao.findById(userId).orElseThrow(EntityNotFoundException::new);
        var document = documentDao.findById(docId).orElseThrow(EntityNotFoundException::new);
        if (user
                .getDocuments()
                .stream()
                .anyMatch(doc -> doc
                        .getId()
                        .equals(document
                                .getId()))) {
            throw new AlreadyExistsException();
        }
        user
                .getDocuments()
                .add(document);
        userDao.save(user);
    }

    @Override
    public Document saveDocument(DocumentDto document, int userId) {
        document.setCreatedAt(LocalDateTime.now());
        var user = userDao.findById(userId).orElseThrow(EntityNotFoundException::new);
        var saved = documentDao.save(modelMapper.map(document, Document.class));
        user.getDocuments().add(saved);
        userDao.save(user);
        return saved;
    }

    @Override
    public void uploadFile(int documentId, byte[] file) {
        var doc = documentDao.findById(documentId).orElseThrow(EntityNotFoundException::new);
        doc.setBody(file);
        documentDao.save(doc);
    }

    @Override
    public DocumentDto GetDocumentInfo(int docId) {
        return modelMapper.map(documentDao.findById(docId).orElseThrow(EntityNotFoundException::new), DocumentDto.class);
    }

    @Override
    public byte[] getDocumentData(int docId) {
        return documentDao.findById(docId).orElseThrow(EntityNotFoundException::new).getBody();
    }

    @Override
    public void deleteDocument(int docId, String username) {
        var id = userService.getUserInfo(username).getId();
        var user = userDao.findById(id).orElseThrow(EntityNotFoundException::new);
        user.setDocuments(user.getDocuments().stream().filter(document -> document.getId() != docId).collect(Collectors.toList()));
        userDao.save(user);
        var doc = documentDao.findById(docId).orElseThrow(EntityNotFoundException::new);
        if (doc.getUsers().size() == 0) {
            documentDao.deleteById(docId);
        }
    }
}
