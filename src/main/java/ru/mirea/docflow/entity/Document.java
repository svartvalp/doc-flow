package ru.mirea.docflow.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDateTime;

@Entity
@Table(name = "documents")
@Getter
@Setter
public class Document {
    @Id
    @Column(name = "id")
    private int id;
    private String name;
    private byte[] body;
    @Column(name = "created_at")
    private LocalDateTime createdAt;
}
