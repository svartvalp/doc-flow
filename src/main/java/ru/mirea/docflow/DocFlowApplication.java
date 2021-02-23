package ru.mirea.docflow;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackages = "ru.mirea.docflow.dao")
@SpringBootApplication
public class DocFlowApplication {

    public static void main(String[] args) {
        SpringApplication.run(DocFlowApplication.class, args);
    }

}
