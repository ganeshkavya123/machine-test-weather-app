-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: demo
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `weather_history`
--

DROP TABLE IF EXISTS `weather_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `weather_history` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Location` varchar(255) NOT NULL,
  `WeatherName` varchar(255) NOT NULL,
  `Description` text,
  `Temperature` float DEFAULT NULL,
  `DateTime` datetime NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weather_history`
--

LOCK TABLES `weather_history` WRITE;
/*!40000 ALTER TABLE `weather_history` DISABLE KEYS */;
INSERT INTO `weather_history` VALUES (1,'London','Clouds','broken clouds',16.81,'2024-07-22 12:16:29'),(2,'London','Clouds','broken clouds',16.81,'2024-06-22 12:16:29'),(3,'London','Clouds','broken clouds',16.81,'2024-07-20 12:16:29'),(4,'Delhi','Haze','haze',34.05,'2024-07-22 13:54:55'),(5,'Moscow','Clouds','overcast clouds',20.25,'2024-07-22 13:57:23'),(6,'Paris','Clouds','overcast clouds',18.93,'2024-07-22 13:56:49'),(7,'New York','Clear','clear sky',22.35,'2024-07-22 13:57:44'),(8,'Sydney','Clouds','overcast clouds',13.28,'2024-07-22 13:51:42'),(9,'Riyadh','Clear','clear sky',42.08,'2024-07-22 13:54:22');
/*!40000 ALTER TABLE `weather_history` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-22 17:03:19
