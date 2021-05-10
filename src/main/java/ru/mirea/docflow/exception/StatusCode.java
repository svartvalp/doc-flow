package ru.mirea.docflow.exception;

public enum StatusCode {
    NOT_FOUND(404), BAD_REQUEST(400), INTERNAL(500);


    private final int value;


    StatusCode(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
}
