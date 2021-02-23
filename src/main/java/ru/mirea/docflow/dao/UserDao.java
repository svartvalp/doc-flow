package ru.mirea.docflow.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.mirea.docflow.entity.User;

@Repository
public interface UserDao extends JpaRepository<User, Integer> {
    User findByLogin(String login);
}
