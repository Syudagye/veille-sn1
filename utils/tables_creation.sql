USE veille_sn1;

CREATE TABLE Info(
   id_info INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
   title VARCHAR(255) NOT NULL,
   author VARCHAR(255) NOT NULL,
   summary TEXT,
   post_link VARCHAR(255) NOT NULL,
   image_link VARCHAR(255),
   date_published DATE NOT NULL
);
