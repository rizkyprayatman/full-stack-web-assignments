-- Show Database --
SHOW DATABASES;

-- Create Database --
CREATE DATABASE book_store;

-- Use Database --
USE book_store;

-- Show Table --
SHOW tables;

-- Create Table --
CREATE TABLE books
(id INT AUTO_INCREMENT PRIMARY KEY,
author1 VARCHAR(100) NOT NULL,
author2 VARCHAR(100),
author3 VARCHAR(100),
title VARCHAR(100),
description VARCHAR(100),
place_sell VARCHAR(3),
stock INT DEFAULT 0,
creation_date DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Show Table --
SHOW tables;

-- Detail Table --
desc books;

-- Alter Table --
ALTER TABLE `books` 
ADD price INT DEFAULT 0,
ADD status ENUM('available', 'out of stock', 'limited'),
DROP `place_sell`;

-- Insert Data --
INSERT INTO `books` (`author1`, `author2`, `author3`, `title`, `description`, `stock`, `price`, `status`) 
VALUES ('Yudistira', 'Sulaiman', NULL, 'IPA SMP Kelas 1', 'Buku IPA SMP untuk Kelas 1', '100', '35000', 'available'), 
('Amat', 'Bodo', NULL, 'Bodo Amat', 'Buku ngajarin tentang bodo sama amat', '0', '15000', 'out of stock'),
('Cinta', NULL, NULL, 'Pergi mencari', 'Mencari Cinta yang telah pergi', '100', '45000', 'available');

-- Show books mengunakan SELECT --
SELECT * FROM books;

-- Sql Aliases --
SELECT id AS ID , author1 AS A1 , author2 AS A2, author3 AS A3 FROM `books`;

-- Find id mengunakan WHERE --
SELECT * FROM `books` WHERE id = 2;

-- Find price mengunakan AND --
SELECT * FROM books WHERE price >= 15000 AND price <=35000;

-- Find price mengunakan OR --
SELECT * FROM books WHERE price >= 45000 OR price <=15000;

-- Find price mengunakan NOT --
 SELECT * FROM books WHERE NOT price <=35000;

-- Order by ASC --
SELECT * FROM books ORDER BY id ASC;

-- LIMIT column --
SELECT * FROM books LIMIT 2;

-- Update --
UPDATE  books  SET  author2 ='Dana',
price ='50000'
WHERE id='3';

-- Show by id=3 --
SELECT * FROM books WHERE id='3';

-- Delete --
DELETE FROM books WHERE id=2;

-- Show books mengunakan SELECT --
SELECT * FROM books;