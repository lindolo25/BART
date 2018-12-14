DROP DATABASE IF EXISTS peek_db;
CREATE database peek_db;

USE peek_db;

CREATE TABLE users (
  user_id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(100) NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NULL,
  rating_avg DECIMAL(10,4) NOT NULL DEFAULT 0,
  age INT(3) NOT NULL,
  gender BOOLEAN NOT NULL,
  bio VARCHAR(120) NULL,
  PRIMARY KEY (user_id)
);

CREATE TABLE comments (
  comment_id INT NOT NULL,
  user_id INT(11) NOT NULL,
  comment VARCHAR(100) NULL,
  rating INT(1) NOT NULL,
  PRIMARY KEY (comment_id),
  FOREIGN KEY fk_users_comments(user_id)
    REFERENCES users(user_id)
);

CREATE TABLE socials (
  sosial_id INT NOT NULL AUTO_INCREMENT,
  site_id INT(11) NOT NULL,
  user_id INT(11) NOT NULL,
  username VARCHAR(100) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY fk_users_socials(user_id)
    REFERENCES users(user_id)
);


SELECT * FROM users;
select * from comments;
