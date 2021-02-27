package ru.mirea.docflow.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class DocumentDto {
    private Integer id;
    private String name;
    private LocalDateTime createdAt;
}
