DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
id INT(10) NOT NULL AUTO_INCREMENT,
product_name VARCHAR(50) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price DECIMAl(10, 2) NOT NULL,
stock_quantity int(10),
PRIMARY KEY (id)

);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("ihone 6", "SmartPhones", 99.99, 4),("Google Pixel 2", "SmartPhones", 239.95, 7),
("MacBook Air", "LapTops", 899.00, 3), ("ASUS ZenBook", "LapTops", 799.00, 6),
("Canon", "Cameras", 449.99, 234),  ("Nikon", "Cameras", 399.00, 28),
("Powerbeats3 ", "Earphones", 99.99, 2), ("SONY", "Earphones", 10.99, 3),
("Epson", "Projector", 299.00, 4), ("LG", "Projector", 698.00, 9)
