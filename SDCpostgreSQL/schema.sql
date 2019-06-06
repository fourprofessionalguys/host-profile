DROP DATABASE IF EXISTS hostprofiles;

CREATE DATABASE hostprofiles;

\c hostprofiles;

CREATE TABLE hosts (
  id SERIAL NOT NULL,
  name VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  interaction VARCHAR NOT NULL,
  cohosts VARCHAR NOT NULL,
  datajoined VARCHAR NOT NULL,
  responserate VARCHAR NOT NULL,
  responsetime VARCHAR NOT NULL,
  hosturl VARCHAR NOT NULL,
  language1 SMALLINT NOT NULL,
  language2 SMALLINT NOT NULL
);

CREATE TABLE languages (
  id SERIAL NOT NULL,
  language VARCHAR
);