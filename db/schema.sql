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
