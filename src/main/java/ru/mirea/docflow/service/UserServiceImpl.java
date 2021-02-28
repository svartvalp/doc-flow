package ru.mirea.docflow.service;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import ru.mirea.docflow.dao.UserDao;
import ru.mirea.docflow.dto.UserDto;
import ru.mirea.docflow.entity.User;
import ru.mirea.docflow.exception.UniqueConstraintFailedException;

import javax.persistence.EntityExistsException;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserDao userDao;
    private final ModelMapper modelMapper;

    @Override
    public void registerUser(UserDto user) {
        if (userDao.findByLogin(user.getLogin()).isPresent()) {
            throw new UniqueConstraintFailedException();
        }
        userDao.save(modelMapper.map(user, User.class));
    }

    @Override
    public List<UserDto> GetAllUsers(String query) {
        if (query != null) {
            query = "%" + query + "%";
            return userDao
                    .findByFirstNameLikeOrLastNameLike(query, query)
                    .stream()
                    .map(user -> {
                         var res = modelMapper.map(user, UserDto.class);
                         res.setPassword("");
                         return res;
                    })
                    .collect(Collectors.toList());
        } else {
            return userDao.findAll()
                    .stream()
                    .map(user -> {
                        var res = modelMapper.map(user, UserDto.class);
                        res.setPassword("");
                        return res;
                    })
                    .collect(Collectors.toList());
        }
    }

    @Override
    public UserDto getUserInfo(String name) {
        var us = userDao.findByLogin(name).orElseThrow(EntityExistsException::new);
        var dto = modelMapper.map(us, UserDto.class);
        dto.setPassword("");
        return dto;
    }
}
