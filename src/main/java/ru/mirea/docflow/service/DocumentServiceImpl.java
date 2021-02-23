package ru.mirea.docflow.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.mirea.docflow.dao.DocumentDao;
import ru.mirea.docflow.dao.UserDao;
import ru.mirea.docflow.entity.Document;
import ru.mirea.docflow.exception.EntityNotFoundException;

import java.util.List;

@RequiredArgsConstructor
@Service
public class DocumentServiceImpl implements DocumentService {
    private final UserDao userDao;
    private final DocumentDao documentDao;


    @Override
    public List<Document> getUserDocuments(int userId) {
        var user = userDao.findById(userId);
        return user.orElseThrow(EntityNotFoundException::new).getDocuments();
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
}
