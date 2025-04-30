-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 10, 2024 at 08:41 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `auth_system`
--

--
-- Dumping data for table `product_colors`
--

INSERT INTO `product_colors` (`id`, `pid`, `pcolor`) VALUES
(1, 1, 'Blue'),
(2, 1, 'Black'),
(3, 1, 'White'),
(4, 1, 'Yellow'),
(5, 1, 'Purple'),
(6, 2, 'Blue'),
(7, 2, 'Black'),
(8, 2, 'Yellow'),
(9, 2, 'Purple'),
(10, 2, 'Orange'),
(11, 3, 'Red'),
(12, 3, 'Blue'),
(13, 3, 'Black'),
(14, 3, 'Purple'),
(15, 3, 'Silver'),
(16, 4, 'Red'),
(17, 4, 'Green'),
(18, 4, 'White'),
(19, 4, 'Yellow'),
(20, 4, 'Purple'),
(21, 5, 'Blue'),
(22, 5, 'Black'),
(23, 5, 'Yellow'),
(24, 5, 'Purple'),
(25, 5, 'Gold'),
(26, 6, 'Blue'),
(27, 6, 'Black'),
(28, 6, 'Purple'),
(29, 6, 'Silver'),
(30, 6, 'Orange'),
(31, 7, 'Red'),
(32, 7, 'Black'),
(33, 7, 'Yellow'),
(34, 7, 'Purple'),
(35, 7, 'Silver'),
(36, 8, 'Red'),
(37, 8, 'Blue'),
(38, 8, 'White'),
(39, 8, 'Yellow'),
(40, 8, 'Gold'),
(41, 9, 'Red'),
(42, 9, 'Green'),
(43, 9, 'Blue'),
(44, 9, 'White'),
(45, 9, 'Silver'),
(46, 10, 'Green'),
(47, 10, 'Yellow'),
(48, 10, 'Purple'),
(49, 10, 'Gold'),
(50, 10, 'Silver'),
(51, 11, 'Green'),
(52, 11, 'Black'),
(53, 11, 'White'),
(54, 11, 'Silver'),
(55, 11, 'Orange'),
(56, 12, 'Red'),
(57, 12, 'Blue'),
(58, 12, 'Black'),
(59, 12, 'Purple'),
(60, 12, 'Gold');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
