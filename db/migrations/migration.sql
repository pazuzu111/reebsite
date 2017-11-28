DROP TABLE beer;
CREATE TABLE IF not exists beer (
  id SERIAL PRIMARY KEY,
  brewId VARCHAR(255)
);
