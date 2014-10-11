-- +goose Up

create table users (
	id uuid primary key,
	created_at timestamp not null
	);

-- +goose Down

drop table users;

