-- +goose Up

alter table users add column phone varchar(255);

-- +goose Down

alter table users drop column phone;
