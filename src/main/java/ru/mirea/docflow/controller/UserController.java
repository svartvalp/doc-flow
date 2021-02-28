package ru.mirea.docflow.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ru.mirea.docflow.dto.UserDto;
import ru.mirea.docflow.entity.User;
import ru.mirea.docflow.service.UserService;

import java.security.Principal;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/user")
public class UserController {

    private final UserService userService;


    @PostMapping(value = "/register")
    public void registerUser(@RequestBody UserDto user) {
        userService.registerUser(user);
    }

    @GetMapping("")
    public List<UserDto> getAllUsers(@RequestParam(value = "query", required = false) String query) {
        return userService.GetAllUsers(query);
    }


    @GetMapping("/info")
    public UserDto getUserInfo( Principal principal) {
        return userService.getUserInfo(principal.getName());
    }

}
