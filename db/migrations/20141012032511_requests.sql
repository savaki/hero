-- +goose Up

create table requests (
	id uuid primary key,
	user_id varchar(255) not null,
	provider_id varchar(255),
	status varchar(255) not null,
	created_at timestamp not null
);

alter table users add column sfdc_id varchar(255);
alter table users add column name varchar(255);

create table ratings (
  id uuid primary key,
  user_id varchar(255) not null,
  role int not null,
  rating int not null,
  created_by timestamp not null,
  created_at timestamp not null
);

-- +goose Down

alter table users drop column sfdc_id;
alter table users drop column name;

drop table ratings;
drop table requests;

