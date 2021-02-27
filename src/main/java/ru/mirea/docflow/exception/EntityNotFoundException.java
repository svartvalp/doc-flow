package ru.mirea.docflow.exception;

public class EntityNotFoundException extends BusinessException {
    public EntityNotFoundException() {
        super(StatusCode.NOT_FOUND);
    }
}
