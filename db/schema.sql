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

INSERT INTO users (username, first_name, last_name, rating_avg, age, gender, bio, password, created_at, updated_at)
    VALUES 
    ("john123", "John", "Smith", 2.5, 23, TRUE, "Hello, I'm John!", "Pass1234", now(), now()),
    ("Mad222", "Maddie", "Jones", 5.5, 25, FALSE, "Hello world!", "Pass1234", now(), now()),
    ("ChrisPbacon", "Chris", "Bacon", 7.0, 20, TRUE, "Hello, I'm awesome!", "Pass1234", now(), now());

INSERT INTO comments (user_id, site_id, username, comment, rating, created_at, updated_at)
  VALUES 
  (1, 1, "theMads", "Radical dude", 5, now(), now()),
  (2, 1, "steve245", "it's ok", 3, now(), now()),
  (3, 1, "theMads", "Nah..", 1, now(), now());

INSERT INTO socials (user_id, site_id, username, created_at, updated_at)
  VALUES 
  (1, 1, "someDude", now(), now()),
  (2, 1, "theMads", now(), now()),
  (3, 1, "crispy", now(), now());

/* some example queries that I'll be using latter on the routes */

SELECT * FROM peek_db.users 
    WHERE users.username = "mad222";

SELECT socials.* FROM peek_db.socials 
    INNER JOIN users ON socials.user_id = users.user_id
    WHERE users.username = "mad222";

SELECT * FROM comments;

SELECT 
    comments.comment_id, 
    comments.site_id, 
    comments.username, 
    comments.comment,
    comments.rating, 
    comments.created_at, 
    comments.updated_at 
  FROM socials
    INNER JOIN comments ON socials.username = comments.username 
        AND socials.site_id = comments.site_id
    INNER JOIN users ON socials.user_id = users.user_id
    WHERE users.username = "mad222"
    ORDER BY comments.created_at DESC;
