-- CREATE DATABASE webstore;

--use webstore;

-- CREATE TABLE products(
--     id INT IDENTITY(1, 1) PRIMARY KEY,
--     name VARCHAR(100) NOT NULL,
--     price DECIMAL(10,2) ,
--     quantity INT,
--     description TEXT
-- );

-- INSERT INTO products(name, price, quantity, description) VALUES ('Product 1', 10.99, 10, 'Description 1');

--CREATE DATABASE user_database;
-- GO

-- USE user_database;
-- GO

-- CREATE TABLE users (
--     id INT IDENTITY(1,1) PRIMARY KEY,
--     first_name VARCHAR(255) NOT NULL,
--     last_name VARCHAR(255) NOT NULL,
--     username VARCHAR(255) UNIQUE NOT NULL,
--     email VARCHAR(255) UNIQUE NOT NULL,
--     password VARCHAR(255) NOT NULL
-- );