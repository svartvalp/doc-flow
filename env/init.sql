create table documents (
    id serial,
    body bytea,
    name text,
    created_at timestamptz
);

create table users (
    id serial,
    login text,
    password text,
    last_name text,
    first_name text
);

create table user_documents (
    user_id int,
    document_id int
);