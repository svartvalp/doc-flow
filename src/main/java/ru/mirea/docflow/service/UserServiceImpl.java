package ru.mirea.docflow.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.mirea.docflow.dao.UserDao;
import ru.mirea.docflow.entity.User;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserDao userDao;

    @Override
    public void registerUser(User user) {
        userDao.save(user);
    }
}
