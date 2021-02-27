package ru.mirea.docflow.exception;

public class UniqueConstraintFailedException extends BusinessException {
    public UniqueConstraintFailedException() {
        super(StatusCode.BAD_REQUEST);
    }
}
