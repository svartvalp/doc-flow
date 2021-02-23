package ru.mirea.docflow.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "users")
@Getter
@Setter
public class User {
    @Id
    @Column(name = "id")
    private int id;
    private String login;
    private String password;
    @Column(name = "last_name")
    private String firstName;
    @Column(name = "first_name")
    private String lastName;
    @ManyToMany
    @JoinTable(name = "user_documents",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "document_id")
    )
    private List<Document> documents;
}
