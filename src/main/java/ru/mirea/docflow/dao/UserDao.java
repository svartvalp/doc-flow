package ru.mirea.docflow.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.mirea.docflow.entity.User;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserDao extends JpaRepository<User, Integer> {
    Optional<User> findByLogin(String login);
    List<User> findByFirstNameLikeOrLastNameLike(String firstName, String lastName);
}
