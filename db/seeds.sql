USE peek_db;

INSERT INTO users (username, first_name, last_name, rating_avg, age, gender, bio, password, img_link, created_at, updated_at)
VALUES 
    ("bechir", "bechir", "lastname", 5.5, 25, FALSE, "Hello world!", "Pass1234", "Bechir.jpg", now(), now()),
    ("charlie", "Charlie", "lastname", 5.5, 49, FALSE, "Hello world!", "Pass1234", "Charlie.jpg", now(), now()),
    ("jose", "Jose", "lastname", 5.5, 27, FALSE, "Hello world!", "Pass1234", "Jose.jpg", now(), now()),
    ("charles", "Charles", "lastname", 5.5, 43, FALSE, "Hello world!", "Pass1234", "Charles.jpg", now(), now()),
    ("robert", "Robert", "lastname", 5.5, 21, FALSE, "Hello world!", "Pass1234", "Robert.jpg", now(), now());

INSERT INTO socials (user_id, site_id, username, created_at, updated_at)
VALUES 
    (1, 1, "bechir",now(),now()),
    (2, 1, "badTeacher",now(),now()),
    (3, 1, "jose",now(),now()),
    (4, 1, "Charles",now(),now()),
    (4, 1, "MiamiPapi",now(),now()),
    (5, 1, "will",now(),now());


INSERT INTO comments (user_id, site_id, username, comment, rating, created_at, updated_at)
VALUES 

(1, 1, "theMads","Radical dude",5, now(), now()),
(1, 1, "steve245","it's ok",3, now(), now()),
(1, 1, "ChrisPdude","Nah..",1, now(), now()),
(4, 1, "bechir","easy-going",1, now(), now()),
(4, 1, "bechir","smelly car",1, now(), now()),
(4, 1, "bechir","funny",1, now(), now()),
(5, 1, "badTeacher","maternal",1, now(), now()),
(5, 1, "badTeacher","nurturing",1, now(), now()),
(5, 1, "badTeacher","soft hands",1, now(), now()),
(3, 1, "jose","patient",1, now(), now()),
(3, 1, "jose","generous",1, now(), now()),
(1, 1, "MiamiPapi","big tipper",1, now(), now()),
(4, 1, "MiamiPapi","a mission",1, now(), now()),
(3, 1, "MiamiPapi","independent",1, now(), now()),
(2, 1, "Will","charismatic",1, now(), now()),
(3, 1, "Will","conceited",1, now(), now()),
(3, 1, "Will","lazy eye",1, now(), now());

