package ru.mirea.docflow.dto;

import lombok.Data;

@Data
public class UserDto {
    private Integer id;
    private String login;
    private String lastName;
    private String firstName;
}
