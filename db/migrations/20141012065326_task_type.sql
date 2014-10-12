-- +goose Up

alter table requests add column request_type varchar(255);
alter table requests add column description text;

-- +goose Down

alter table requests drop column request_type;
alter table requests drop column description;

