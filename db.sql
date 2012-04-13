CREATE DATABASE startups
  WITH OWNER = postgres
       ENCODING = 'UTF8'
       TABLESPACE = pg_default
       LC_COLLATE = 'C'
       LC_CTYPE = 'C'
       CONNECTION LIMIT = -1;

CREATE TABLE startups
(
	  id serial NOT NULL,
	  name text,
	  description text,
	  url text,
	  hiring boolean,
	  "hiringUrl" text,
	  "dateAdded" timestamp without time zone NOT NULL DEFAULT now(),
	  CONSTRAINT pkid PRIMARY KEY (id )
)
WITH (
	  OIDS=FALSE
);
