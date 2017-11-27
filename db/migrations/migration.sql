CREATE TABLE IF not exists beer (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  brewery VARCHAR(255),
  country VARCHAR(255),
  abv VARCHAR(255),
  url VARCHAR(255)
);
