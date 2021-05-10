package ru.mirea.docflow.service;

import ru.mirea.docflow.dto.UserDto;

import java.util.List;

public interface UserService {
    void registerUser(UserDto user);

    List<UserDto> GetAllUsers(String query);

    UserDto getUserInfo(String name);
}
