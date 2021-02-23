package ru.mirea.docflow.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.mirea.docflow.entity.Document;

@Repository
public interface DocumentDao extends JpaRepository<Document, Integer> {
}
