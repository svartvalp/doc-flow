package ru.mirea.docflow.service;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import ru.mirea.docflow.dao.DocumentDao;
import ru.mirea.docflow.dao.UserDao;
import ru.mirea.docflow.dto.DocumentDto;
import ru.mirea.docflow.entity.Document;
import ru.mirea.docflow.exception.EntityNotFoundException;
import ru.mirea.docflow.exception.UniqueConstraintFailedException;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class DocumentServiceImpl implements DocumentService {
    private final UserDao userDao;
    private final DocumentDao documentDao;
    private final ModelMapper modelMapper;


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
        var user = userDao.findById(userId);
        var document = documentDao.findById(docId);
        user
                .orElseThrow(EntityNotFoundException::new)
                .getDocuments()
                .add(document.orElseThrow(EntityNotFoundException::new));
        userDao.save(user.orElseThrow(EntityNotFoundException::new));
    }

    @Override
    public Document saveDocument(DocumentDto document) {
        documentDao.findByName(document.getName()).ifPresent((a) ->{ throw  new UniqueConstraintFailedException();});
        document.setCreatedAt(LocalDateTime.now());
        return documentDao.save(modelMapper.map(document, Document.class));
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
}
