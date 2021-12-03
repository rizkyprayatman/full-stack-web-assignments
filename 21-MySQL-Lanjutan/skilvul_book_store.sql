-- Show Database --
SHOW DATABASES;

-- Create Database --
CREATE DATABASE book_store;

-- Use Database --
USE book_store;

-- Create Table Penerbit --
CREATE TABLE penerbit( 
id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY, 
nama VARCHAR(50), 
kota VARCHAR(50)
);

-- Create Table Penulis --
CREATE TABLE penulis( 
id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY, 
nama VARCHAR(50), 
kota VARCHAR(50) 
);

-- Create Table buku --
CREATE TABLE buku( 
id INT NOT NULL AUTO_INCREMENT, 
ISBN VARCHAR(50), 
judul VARCHAR(50), 
harga INT, 
stock INT, 
penulis INT, 
penerbit INT, 
foreign key (penulis) references penulis(id),  
foreign key (penerbit) references penerbit(id),
constraint pk_buku primary key (id) );

-- Insert Data Penulis --
INSERT INTO `penulis` (`nama`, `kota`) VALUES 
('galaxy', 'aceh'), 
('bima', 'medan'),
('sakti', 'banten'),
('nova', 'jakarta'), 
('nusa', 'kalimantan'), 
('tara', 'papua');

-- Insert Data Penerbit --
INSERT INTO `penerbit` (`nama`, `kota`) VALUES 
('alam', 'aceh'), 
('sutra', 'gorontalo'), 
('nagara', 'surabaya'), 
('enovo', 'kediri'), 
('rajasa', 'mataram'), 
('hatako', 'banyuwangi'), 
('nayatama', 'yogja'), 
('siantar', 'bali'), 
('envypress', 'papua'), 
('inkpad', 'makassar');

-- Insert Data Buku
INSERT INTO `buku` (`ISBN`, `judul`, `harga`, `stock`, `penulis`, `penerbit`) VALUES 
('978-623-6255-28-8', 'Naratama dan Semesta bagian 1', '125000', '100', '1', '3'), 
('978-623-6255-29-8', 'Naratama dan Semesta bagian 2', '225000', '85', '1', '3'), 
('978-623-6255-30-8', 'Naratama dan Semesta bagian 3', '250000', '95', '1', '3'), 
('978-623-6972-72-4', 'Sistem Tinta dalam Print', '56000', '100', '4', '10'), 
('978-623-5854-06-9', 'Holo System Naragama', '299850', '10', '3', '2');

-- Inner Join --
SELECT * FROM `buku` INNER JOIN penerbit ON buku.id = penerbit.id;

-- Left Join --
SELECT buku.judul, penerbit.id FROM `buku` LEFT JOIN penerbit ON buku.id = penerbit.id ORDER BY buku.judul;

-- Right Join --
SELECT buku.judul, penerbit.id FROM `buku` RIGHT JOIN penerbit ON buku.id = penerbit.id ORDER BY buku.judul;

-- MAX --
SELECT MAX(harga) AS Jumlah FROM buku WHERE stock <10;

-- MIN --
SELECT MIN(harga) AS Jumlah FROM buku;

-- COUNT --
SELECT COUNT(harga) FROM buku WHERE harga < 100000;