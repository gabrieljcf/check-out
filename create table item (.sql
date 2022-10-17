create table item (
	id_item INTEGER PRIMARY KEY,
	width numeric,
	height numeric,
	length numeric,
	weight numeric,
	description text,
	price numeric
);


insert into item (id_item, width, height, length, weight, description, price) values (1, 100, 30, 10, 3, 'Guitarra', 1000);
insert into item (id_item, width, height, length, weight, description, price) values (2, 50, 50, 50, 20, 'Amplificador', 5000);
insert into item (id_item, width, height, length, weight, description, price) values (3, 10, 10, 10, 1, 'Cabo', 30);