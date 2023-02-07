DROP TABLE IF EXISTS customers;

-- Create table
CREATE TABLE customers (
     id SERIAL NOT NULL PRIMARY KEY,
     first_name VARCHAR(50) NOT NULL,
     last_name VARCHAR(50) NOT NULL,
     email VARCHAR(50) NOT NULL
);
