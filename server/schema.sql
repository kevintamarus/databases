CREATE DATABASE chat;

USE chat;


DROP TABLE IF EXISTS messages;


CREATE TABLE messages (
  /* Describe your table here.*/
  ID     INTEGER AUTO_INCREMENT,
  TEXT   VARCHAR(100),
  PRIMARY KEY (id)
);

CREATE TABLE users (
  ID      INTEGER AUTO_INCREMENT,
  USER    VARCHAR(100),
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  ID      INTEGER AUTO_INCREMENT,
  ROOM    VARCHAR(100),
  PRIMARY KEY (id)
);



/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

