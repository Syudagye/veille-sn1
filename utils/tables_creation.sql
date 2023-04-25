USE veille_sn1;

CREATE TABLE SourceType(
   source_id INTEGER NOT NULL AUTO_INCREMENT,
   name VARCHAR(255) NOT NULL,
   PRIMARY KEY(source_id)
);

CREATE TABLE Info(
   id_info INTEGER NOT NULL AUTO_INCREMENT,
   title VARCHAR(255) NOT NULL,
   author VARCHAR(255) NOT NULL,
   summary TEXT,
   link VARCHAR(255) NOT NULL,
   image_link VARCHAR(255),
   source_id INTEGER NOT NULL,
   PRIMARY KEY(id_info),
   FOREIGN KEY(source_id) REFERENCES SourceType(source_id)
);
