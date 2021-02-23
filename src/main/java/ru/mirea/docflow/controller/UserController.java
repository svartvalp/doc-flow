package ru.mirea.docflow.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.mirea.docflow.entity.User;
import ru.mirea.docflow.service.UserService;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/user")
public class UserController {

    private final UserService userService;


    @PostMapping(value = "/register")
    public void registerUser(@RequestBody User user) {
        userService.registerUser(user);
    }



}
