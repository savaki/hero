-- +goose Up

alter table users add column image varchar(255);

-- +goose Down

alter table users drop column image;
