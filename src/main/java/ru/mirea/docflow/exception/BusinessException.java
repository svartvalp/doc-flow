package ru.mirea.docflow.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;

@RequiredArgsConstructor
@Getter
public class BusinessException extends RuntimeException {
    private final StatusCode statusCode;
}


