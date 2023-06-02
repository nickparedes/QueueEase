/* 
    user: sistemas2 
    passowrd: _d3sc0nc01d0 
    host: den1.mysql5.gear.host
*/

DROP DATABASE IF EXISTS sistemas2;
CREATE DATABASE sistemas2;
use sistemas2;
CREATE TABLE users(
    id INTEGER PRIMARY KEY  AUTO_INCREMENT NOT NULL, 
    name_customer VARCHAR(255),
    lastname_customer VARCHAR(255), 
    email VARCHAR(255), 
    password VARCHAR(255));

CREATE TABLE orders(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    creation_date DATETIME,
    delivery_date DATETIME,
    id_user INTEGER NOT NULL,
    FOREIGN KEY(id_user) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE
    
);
CREATE TABLE categories(
    id INTEGER PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL
);

CREATE TABLE order_details(
    order_number INTEGER,
    cantidad INTEGER,
    id_menu INTEGER,
    FOREIGN KEY(order_number) REFERENCES orders(id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY(id_menu) REFERENCES menus(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE menus(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price DECIMAL(15, 2) NOT NULL,
    category_id INTEGER NOT NULL,
    FOREIGN KEY(category_id) REFERENCES categories(id)
);