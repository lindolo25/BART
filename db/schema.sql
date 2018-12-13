--Drops the database if it exists--
DROP DATABASE IF EXISTS "Users";
--Creates the database if it exists--
CREATE DATABASE "Users";

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	PRIMARY KEY (id)
);
