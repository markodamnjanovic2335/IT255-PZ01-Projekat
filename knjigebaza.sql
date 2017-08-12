-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 12, 2017 at 08:16 PM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `knjigebaza`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(128) COLLATE utf8_bin DEFAULT NULL,
  `token2` varchar(128) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`, `token2`) VALUES
(1, 'admin', '21232f297a57a5a743894a0e4a801fc3', 'c925c36c6715547eb68dc3a921a3b2e45d02cabc');

-- --------------------------------------------------------

--
-- Table structure for table `knjige`
--

CREATE TABLE `knjige` (
  `knjige_ID` int(11) NOT NULL,
  `naziv_knjige` varchar(120) DEFAULT NULL,
  `autor` varchar(120) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `cena` int(10) DEFAULT NULL,
  `opis` varchar(200) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `ZANR_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `knjige`
--

INSERT INTO `knjige` (`knjige_ID`, `naziv_knjige`, `autor`, `cena`, `opis`, `ZANR_ID`) VALUES
(131, 'Kao da smo jedno ', 'Džasinda vajder', 1000, 'Radnja se dešava u Americi...', 1),
(132, 'Fišer-Kralj šaha', 'Vladan Dinic', 800, 'Prica o legendi saha', 1);

-- --------------------------------------------------------

--
-- Table structure for table `korisnici`
--

CREATE TABLE `korisnici` (
  `korisnici_ID` int(11) NOT NULL,
  `firstname` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `lastname` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `username` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(128) COLLATE utf8_bin DEFAULT NULL,
  `adresa` varchar(100) COLLATE utf8_bin NOT NULL,
  `ulica` varchar(100) COLLATE utf8_bin NOT NULL,
  `telefon` varchar(100) COLLATE utf8_bin NOT NULL,
  `token` varchar(128) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `korisnici`
--

INSERT INTO `korisnici` (`korisnici_ID`, `firstname`, `lastname`, `username`, `password`, `adresa`, `ulica`, `telefon`, `token`) VALUES
(8, 'Marko', 'Damnjanovic', 'marecare', 'eb040b3a341a1b334c2abe924e00d4dc', 'marko@marko.com', 'Topolska 18', '0612345678', 'fe743a9de2053d4cf9dc5e95b5452f9868fc674f');

-- --------------------------------------------------------

--
-- Table structure for table `korpa`
--

CREATE TABLE `korpa` (
  `id` int(11) NOT NULL,
  `username` varchar(200) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `naziv_zanr` varchar(200) DEFAULT NULL,
  `naziv_knjige` varchar(200) DEFAULT NULL,
  `opis` varchar(200) DEFAULT NULL,
  `cena` int(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `korpa`
--

INSERT INTO `korpa` (`id`, `username`, `naziv_zanr`, `naziv_knjige`, `opis`, `cena`) VALUES
(26, 'marecare', 'Drama', 'Kao da smo jedno ', 'Radnja se dešava u Americi...', 1000);

-- --------------------------------------------------------

--
-- Table structure for table `pricaonica`
--

CREATE TABLE `pricaonica` (
  `id` int(11) NOT NULL,
  `komentar` varchar(200) COLLATE utf8_bin DEFAULT NULL,
  `user` varchar(50) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `pricaonica`
--

INSERT INTO `pricaonica` (`id`, `komentar`, `user`) VALUES
(81, 'proba123', 'admin'),
(82, 'Literatura je jako dobra.', 'marecare');

-- --------------------------------------------------------

--
-- Table structure for table `zanr`
--

CREATE TABLE `zanr` (
  `ID` int(11) NOT NULL,
  `naziv_zanr` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `zanr`
--

INSERT INTO `zanr` (`ID`, `naziv_zanr`) VALUES
(1, 'Drama'),
(2, 'Komedija'),
(3, 'Krimi'),
(4, 'Enciklopedija'),
(5, 'Triler'),
(6, 'Basna'),
(7, 'Pripovetka'),
(8, 'Autobiografska');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `knjige`
--
ALTER TABLE `knjige`
  ADD PRIMARY KEY (`knjige_ID`),
  ADD KEY `model` (`naziv_knjige`),
  ADD KEY `model_2` (`naziv_knjige`),
  ADD KEY `DEO_ID` (`ZANR_ID`);

--
-- Indexes for table `korisnici`
--
ALTER TABLE `korisnici`
  ADD PRIMARY KEY (`korisnici_ID`);

--
-- Indexes for table `korpa`
--
ALTER TABLE `korpa`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pricaonica`
--
ALTER TABLE `pricaonica`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `zanr`
--
ALTER TABLE `zanr`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `knjige`
--
ALTER TABLE `knjige`
  MODIFY `knjige_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=133;
--
-- AUTO_INCREMENT for table `korisnici`
--
ALTER TABLE `korisnici`
  MODIFY `korisnici_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `korpa`
--
ALTER TABLE `korpa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
--
-- AUTO_INCREMENT for table `pricaonica`
--
ALTER TABLE `pricaonica`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;
--
-- AUTO_INCREMENT for table `zanr`
--
ALTER TABLE `zanr`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `knjige`
--
ALTER TABLE `knjige`
  ADD CONSTRAINT `FK_RELATIONSHIP_3` FOREIGN KEY (`ZANR_ID`) REFERENCES `zanr` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
