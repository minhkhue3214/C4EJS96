-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th2 26, 2021 lúc 10:17 AM
-- Phiên bản máy phục vụ: 10.4.14-MariaDB
-- Phiên bản PHP: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `518a`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `que`
--

CREATE TABLE `que` (
  `id` int(11) NOT NULL,
  `tenque` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `que`
--

INSERT INTO `que` (`id`, `tenque`) VALUES
(1, 'Nam định'),
(2, 'Hà Nội'),
(3, 'Ninh Bình'),
(4, 'Hà Nam'),
(5, 'Thái Bình'),
(6, 'Thanh Hoá'),
(7, 'nam định'),
(8, 'Hà Nội'),
(9, 'Ninh Bình'),
(10, 'Hà Nam'),
(11, 'Thái Bình'),
(12, 'Thanh Hoá'),
(14, 'Quảng Bình');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `t_dangky`
--

CREATE TABLE `t_dangky` (
  `id` int(50) NOT NULL,
  `tendangnhap` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `matkhau` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hoten` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gioitinh` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ngaysinh` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `noio` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hinhanh` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `t_dangky`
--

INSERT INTO `t_dangky` (`id`, `tendangnhap`, `matkhau`, `hoten`, `email`, `gioitinh`, `ngaysinh`, `noio`, `hinhanh`) VALUES
(3, 'khueBeo', '123', 'HIHIIhi', '123@gmail.com', 'nam', '19-02-2021', '3', ''),
(4, '23titquaivat', '1', 'Đỗ Minh Khuê', 'dominh3214@gmail.com', 'nam', '25-01-2020', '8', ''),
(6, '', '', '', '', '', '', '', '115805101_616599162318256_3010745464960880426_n.jpg'),
(7, '', '', '', '', '', '', '', '115805101_616599162318256_3010745464960880426_n.jpg'),
(8, '', '', '', '', '', '', '', '115805101_616599162318256_3010745464960880426_n.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `t_user`
--

CREATE TABLE `t_user` (
  `username` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `t_user`
--

INSERT INTO `t_user` (`username`, `password`) VALUES
('khue', '123'),
('khue123', '123'),
('tuan123', '123');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `que`
--
ALTER TABLE `que`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `t_dangky`
--
ALTER TABLE `t_dangky`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `que`
--
ALTER TABLE `que`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `t_dangky`
--
ALTER TABLE `t_dangky`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
