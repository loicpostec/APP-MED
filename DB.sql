-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 03, 2020 at 12:49 PM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `LP_APPMED`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ID` int(10) UNSIGNED NOT NULL,
  `EMAIL` varchar(45) NOT NULL,
  `FIRSTNAME` varchar(45) NOT NULL,
  `LASTNAME` varchar(45) NOT NULL,
  `MOBILE_PHONE` varchar(20) DEFAULT NULL,
  `ADDRESS` varchar(45) DEFAULT NULL,
  `POSTAL_CODE` varchar(10) DEFAULT NULL,
  `CITY` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID`, `EMAIL`, `FIRSTNAME`, `LASTNAME`, `MOBILE_PHONE`, `ADDRESS`, `POSTAL_CODE`, `CITY`) VALUES
(7, 'email@example.com', 'John', 'Doe', '1234567890', 'Doe Street 33', '2020', 'South Park');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`,`EMAIL`),
  ADD UNIQUE KEY `EMAIL_UNIQUE` (`EMAIL`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

