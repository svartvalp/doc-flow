package ru.mirea.docflow.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import ru.mirea.docflow.exception.BusinessException;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(BusinessException.class)
    public ResponseEntity<?> handleBusinessException(BusinessException exc) {
        return ResponseEntity.status(HttpStatus.valueOf(exc.getStatusCode().getValue())).build();
    }

}
