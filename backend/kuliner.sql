-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 01, 2025 at 08:31 AM
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
-- Database: `kuliner`
--

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `id_menu` int(11) NOT NULL,
  `id_toko` int(11) NOT NULL,
  `nama_menu` varchar(100) NOT NULL,
  `foto_menu` varchar(255) NOT NULL,
  `harga` int(11) NOT NULL,
  `rating` decimal(10,1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`id_menu`, `id_toko`, `nama_menu`, `foto_menu`, `harga`, `rating`) VALUES
-- Toko di Jebol
(1, 1, 'Nasi Goreng Spesial', 'nasgor.jpg', 18000, 4.5),
(2, 1, 'Nasi Goreng Seafood', 'nasgor-seafood.jpg', 25000, 4.7),
(3, 1, 'Mie Goreng Spesial', 'mie-goreng.jpg', 15000, 4.3),

(4, 2, 'Ayam Geprek Original', 'geprek.jpg', 15000, 4.6),
(5, 2, 'Ayam Geprek Keju', 'geprek-keju.jpg', 20000, 4.8),
(6, 2, 'Ayam Geprek Mozarella', 'geprek-mozarella.jpg', 25000, 4.9),

(7, 3, 'Martabak Telur Spesial', 'martabak-telur.jpg', 25000, 4.7),
(8, 3, 'Martabak Mesir', 'martabak-mesir.jpg', 30000, 4.5),
(9, 3, 'Martabak Mini', 'martabak-mini.jpg', 15000, 4.4),

(10, 4, 'Sate Ayam', 'sate-ayam.jpg', 20000, 4.6),
(11, 4, 'Sate Kambing', 'sate-kambing.jpg', 35000, 4.8),
(12, 4, 'Sop Kambing', 'sop-kambing.jpg', 25000, 4.7),

(13, 5, 'Bakso Spesial', 'bakso.jpg', 18000, 4.5),
(14, 5, 'Bakso Beranak', 'bakso-beranak.jpg', 25000, 4.7),
(15, 5, 'Mie Ayam Bakso', 'mie-ayam-bakso.jpg', 20000, 4.6),

-- Toko di Pajus
(16, 11, 'Mie Goreng Aceh', 'mie-aceh.jpg', 25000, 4.8),
(17, 11, 'Nasi Goreng Aceh', 'nasgor-aceh.jpg', 23000, 4.7),
(18, 11, 'Martabak Aceh', 'martabak-aceh.jpg', 20000, 4.6),

(19, 12, 'Soto Ayam', 'soto-ayam.jpg', 15000, 4.5),
(20, 12, 'Soto Daging', 'soto-daging.jpg', 20000, 4.6),
(21, 12, 'Nasi Uduk', 'nasi-uduk.jpg', 12000, 4.4),

(22, 13, 'Bebek Goreng', 'bebek-goreng.jpg', 25000, 4.7),
(23, 13, 'Bebek Bakar', 'bebek-bakar.jpg', 27000, 4.8),
(24, 13, 'Nasi Bebek Cabe Ijo', 'bebek-cabe-ijo.jpg', 30000, 4.9),

(25, 14, 'Dimsum Ayam', 'dimsum-ayam.jpg', 15000, 4.5),
(26, 14, 'Dimsum Udang', 'dimsum-udang.jpg', 18000, 4.6),
(27, 14, 'Dimsum Mix', 'dimsum-mix.jpg', 25000, 4.7),

(28, 15, 'Seblak Original', 'seblak.jpg', 15000, 4.4),
(29, 15, 'Seblak Tulang', 'seblak-tulang.jpg', 20000, 4.6),
(30, 15, 'Seblak Seafood', 'seblak-seafood.jpg', 25000, 4.7),

-- Toko di Dr. Mansyur
(31, 21, 'Burger Classic', 'burger.jpg', 20000, 4.5),
(32, 21, 'Burger Cheese', 'burger-cheese.jpg', 25000, 4.6),
(33, 21, 'Burger Special', 'burger-special.jpg', 30000, 4.8),

(34, 22, 'Pizza Mini', 'pizza-mini.jpg', 25000, 4.6),
(35, 22, 'Pizza Regular', 'pizza-regular.jpg', 50000, 4.7),
(36, 22, 'Pizza Large', 'pizza-large.jpg', 75000, 4.8),

(37, 23, 'Nasi Ayam Penyet', 'ayam-penyet.jpg', 18000, 4.5),
(38, 23, 'Nasi Bebek Penyet', 'bebek-penyet.jpg', 25000, 4.6),
(39, 23, 'Nasi Lele Penyet', 'lele-penyet.jpg', 15000, 4.4),

(40, 24, 'Mie Kocok', 'mie-kocok.jpg', 20000, 4.5),
(41, 24, 'Mie Kocok Spesial', 'mie-kocok-spesial.jpg', 25000, 4.7),
(42, 24, 'Mie Kocok Super', 'mie-kocok-super.jpg', 30000, 4.8),

(43, 25, 'Nasi Campur', 'nasi-campur.jpg', 15000, 4.4),
(44, 25, 'Nasi Ayam', 'nasi-ayam.jpg', 18000, 4.5),
(45, 25, 'Nasi Rendang', 'nasi-rendang.jpg', 25000, 4.7);

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `id_review` int(11) NOT NULL,
  `nama_pengguna` varchar(100) NOT NULL,
  `id_toko` int(11) NOT NULL,
  `komentar` text NOT NULL,
  `waktu_review` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tempat`
--

CREATE TABLE `tempat` (
  `id_tempat` int(11) NOT NULL,
  `nama_tempat` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tempat`
--

INSERT INTO `tempat` (`id_tempat`, `nama_tempat`) VALUES
(1, 'Jebol'),
(2, 'Pajus'),
(3, 'Dr. Mansyur');

-- --------------------------------------------------------

--
-- Table structure for table `toko`
--

CREATE TABLE `toko` (
  `id_toko` int(11) NOT NULL,
  `id_tempat` int(11) NOT NULL,
  `nama_toko` varchar(100) NOT NULL,
  `alamat_toko` text NOT NULL,
  `foto_toko` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `toko`
--

INSERT INTO `toko` (`id_toko`, `id_tempat`, `nama_toko`, `alamat_toko`, `foto_toko`) VALUES
-- Toko di Jebol (id_tempat = 1)
(1, 1, 'Nasi Goreng Bang Jali', 'Jl. Jebol No. 1', 'nasgor-bangjali.jpg'),
(2, 1, 'Geprek Mantap', 'Jl. Jebol No. 2', 'geprek-mantap.jpg'),
(3, 1, 'Martabak Sultan', 'Jl. Jebol No. 3', 'martabak-sultan.jpg'),
(4, 1, 'Sate Kambing Pak Haji', 'Jl. Jebol No. 4', 'sate-pakhaji.jpg'),
(5, 1, 'Bakso Beranak Mas Bro', 'Jl. Jebol No. 5', 'bakso-masbro.jpg'),
(6, 1, 'Warung Padang Sederhana', 'Jl. Jebol No. 6', 'padang-sederhana.jpg'),
(7, 1, 'Kedai Kopi Santai', 'Jl. Jebol No. 7', 'kopi-santai.jpg'),
(8, 1, 'Mie Ayam Pak Gendut', 'Jl. Jebol No. 8', 'mieayam-pakgendut.jpg'),
(9, 1, 'Bubur Ayam Jakarta', 'Jl. Jebol No. 9', 'bubur-jakarta.jpg'),
(10, 1, 'Soto Betawi Bang Jek', 'Jl. Jebol No. 10', 'soto-bangjek.jpg'),

-- Toko di Pajus (id_tempat = 2)
(11, 2, 'Mie Aceh Bang Dul', 'Jl. Pajus No. 1', 'mieaceh-bangdul.jpg'),
(12, 2, 'Soto Medan Pak Jenggot', 'Jl. Pajus No. 2', 'soto-pakjenggot.jpg'),
(13, 2, 'Bebek Goreng Pak Ndut', 'Jl. Pajus No. 3', 'bebek-pakndut.jpg'),
(14, 2, 'Dimsum Corner', 'Jl. Pajus No. 4', 'dimsum-corner.jpg'),
(15, 2, 'Seblak Jeletot', 'Jl. Pajus No. 5', 'seblak-jeletot.jpg'),
(16, 2, 'Ayam Geprek Sambel Ijo', 'Jl. Pajus No. 6', 'geprek-sambelijo.jpg'),
(17, 2, 'Warung Tegal Enak', 'Jl. Pajus No. 7', 'warteg-enak.jpg'),
(18, 2, 'Seafood Bang Jago', 'Jl. Pajus No. 8', 'seafood-bangjago.jpg'),
(19, 2, 'Sate Taichan Senayan', 'Jl. Pajus No. 9', 'taichan-senayan.jpg'),
(20, 2, 'Nasi Uduk Betawi', 'Jl. Pajus No. 10', 'uduk-betawi.jpg'),

-- Toko di Dr. Mansyur (id_tempat = 3)
(21, 3, 'Burger Bros', 'Jl. Dr. Mansyur No. 1', 'burger-bros.jpg'),
(22, 3, 'Pizza Corner', 'Jl. Dr. Mansyur No. 2', 'pizza-corner.jpg'),
(23, 3, 'Ayam Penyet Pak Boss', 'Jl. Dr. Mansyur No. 3', 'penyet-pakboss.jpg'),
(24, 3, 'Mie Kocok Bandung', 'Jl. Dr. Mansyur No. 4', 'miekocok-bandung.jpg'),
(25, 3, 'Nasi Campur Kenangan', 'Jl. Dr. Mansyur No. 5', 'nasicampur-kenangan.jpg'),
(26, 3, 'Kedai Thai Tea', 'Jl. Dr. Mansyur No. 6', 'thaitea-kedai.jpg'),
(27, 3, 'Juice & Smoothies', 'Jl. Dr. Mansyur No. 7', 'juice-smoothies.jpg'),
(28, 3, 'Roti Bakar 88', 'Jl. Dr. Mansyur No. 8', 'rotibakar-88.jpg'),
(29, 3, 'Martabak Manis Special', 'Jl. Dr. Mansyur No. 9', 'martabak-special.jpg'),
(30, 3, 'Kopi Kekinian', 'Jl. Dr. Mansyur No. 10', 'kopi-kekinian.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id_menu`),
  ADD KEY `id_toko_fk` (`id_toko`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`id_review`),
  ADD KEY `id_toko` (`id_toko`);

--
-- Indexes for table `tempat`
--
ALTER TABLE `tempat`
  ADD PRIMARY KEY (`id_tempat`);

--
-- Indexes for table `toko`
--
ALTER TABLE `toko`
  ADD PRIMARY KEY (`id_toko`),
  ADD KEY `id_tempat_fk` (`id_tempat`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `id_menu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `review`
--
ALTER TABLE `review`
  MODIFY `id_review` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tempat`
--
ALTER TABLE `tempat`
  MODIFY `id_tempat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `toko`
--
ALTER TABLE `toko`
  MODIFY `id_toko` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `menu`
--
ALTER TABLE `menu`
  ADD CONSTRAINT `id_toko_fk` FOREIGN KEY (`id_toko`) REFERENCES `toko` (`id_toko`);

--
-- Constraints for table `review`
--
ALTER TABLE `review`
  ADD CONSTRAINT `review_ibfk_1` FOREIGN KEY (`id_toko`) REFERENCES `toko` (`id_toko`);

--
-- Constraints for table `toko`
--
ALTER TABLE `toko`
  ADD CONSTRAINT `id_tempat_fk` FOREIGN KEY (`id_tempat`) REFERENCES `tempat` (`id_tempat`);

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
