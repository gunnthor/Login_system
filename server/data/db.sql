
/* CREATE TABLES */
CREATE TABLE USERS(id uuid DEFAULT uuid_generate_v4 (), email varchar(40), pwd varchar(40));

/* INSERT STATEMENT */

INSERT INTO users(email,pwd) VALUES('testemail', 'testpwd');


