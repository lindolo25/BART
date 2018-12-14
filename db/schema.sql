DROP DATABASE IF EXISTS peek_db;
CREATE database peek_db;

USE peek_db;

CREATE TABLE users (
  user_id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(100) NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NULL,
  rating_avg DECIMAL(10,4),
  age INT(3) NOT NULL,
  gender BOOLEAN NOT NULL,
  bio VARCHAR(120) NULL,
  PRIMARY KEY (user_id)
);

CREATE TABLE comments (
  comment_id INT AUTO_INCREMENT NOT NULL,
  user_id INT(11) NOT NULL,
  comment VARCHAR(100) NULL,
  rating INT(1) NOT NULL,
  PRIMARY KEY (comment_id),
  FOREIGN KEY fk_users_comments(user_id)
    REFERENCES users(user_id)
);

CREATE TABLE socials (
  social_id INT NOT NULL AUTO_INCREMENT,
  site_id INT(11) NOT NULL,
  user_id INT(11) NOT NULL,
  username VARCHAR(100) NOT NULL,
  PRIMARY KEY (social_id),
  FOREIGN KEY fk_users_socials(user_id)
    REFERENCES users(user_id)
);


SELECT * FROM users;
select * from comments;

INSERT INTO users (username, first_name, last_name, rating_avg, age, gender, bio)
VALUES ("john123", "John", "Smith", 2.5, 23, TRUE, "Hello, I'm John!"),
("Mad222", "Maddie", "Jones", 5.5, 25, FALSE, "Hello world!"),
("ChrisPbacon", "Chris", "Bacon", 7.0, 20, TRUE, "Hello, I'm awesome!");

INSERT INTO comments (user_id, comment, rating)
VALUES (1, "Radical dude", 5),
(2, "it's ok", 3),
(3, "Nah..", 1);

INSERT INTO socials (user_id, site_id, username)
VALUES (1, 1, "someDude"),
(2, 1, "theMads"),
(3, 1, "crispy");