CREATE DATABASE todo;

CREATE TABLE list(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);