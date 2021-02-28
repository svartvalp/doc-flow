package ru.mirea.docflow.exception;

public class AlreadyExistsException extends BusinessException {

    public AlreadyExistsException() {
        super(StatusCode.BAD_REQUEST);
    }
}
