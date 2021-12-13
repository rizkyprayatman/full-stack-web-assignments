-- Create Database --
CREATE DATABASE skilvul_music_streaming;

-- Use Database --
USE skilvul_music_streaming;

-- Create Table User --
CREATE TABLE User
(
user_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL
);

-- Create Table Singer --
CREATE TABLE singer
(
singer_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(255) NOT NULL
);

-- Create Table Album --
CREATE TABLE album
(
album_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
singer_id INT NOT NULL,
CONSTRAINT fk_id_singer
FOREIGN KEY (singer_id)
REFERENCES singer(singer_id)
);

-- Create Table Track --
CREATE TABLE track
(
track_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(255) NOT NULL,
album_id INT NOT NULL,
singer_id INT NOT NULL,
CONSTRAINT fk_album_track
FOREIGN KEY (album_id)
REFERENCES album(album_id),
CONSTRAINT fk_singer_track
FOREIGN KEY (singer_id)
REFERENCES singer(singer_id)
);

-- Create Table Playlist --
CREATE TABLE playlist
(
playlist_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
tracks INT NOT NULL,
user_id INT NOT NULL,
CONSTRAINT fk_user_playlist
FOREIGN KEY (user_id)
REFERENCES user(user_id)
);

-- Create Table Playlist_track --
CREATE TABLE playlist_track
(
track_id INT NOT NULL,
playlist_id INT NOT NULL,
CONSTRAINT fk_track_playlisttrack
FOREIGN KEY (track_id)
REFERENCES track(track_id),
CONSTRAINT fk_playlist_playlisttrack
FOREIGN KEY (playlist_id)
REFERENCES playlist(playlist_id)
);

--Show table--
SHOW tables;