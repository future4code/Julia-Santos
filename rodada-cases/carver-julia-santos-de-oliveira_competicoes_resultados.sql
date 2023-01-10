-- MySQL dump 10.13  Distrib 8.0.30, for macos12 (x86_64)
--
-- Host: 35.226.146.116    Database: carver-julia-santos-de-oliveira
-- ------------------------------------------------------
-- Server version	8.0.18-google

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
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '6e9dd005-5453-11eb-8672-42010a800191:1-11114230,
8c61ca2e-3e95-11ed-bebd-42010a8000cf:1-1914315';

--
-- Table structure for table `competicoes_resultados`
--

DROP TABLE IF EXISTS `competicoes_resultados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `competicoes_resultados` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fk_id_competicao` int(11) NOT NULL,
  `fk_id_resultado` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`,`fk_id_competicao`),
  KEY `fk_id_competicao_idx` (`fk_id_competicao`),
  KEY `fk_id_resultado_idx` (`fk_id_resultado`),
  CONSTRAINT `fk_id_competicao` FOREIGN KEY (`fk_id_competicao`) REFERENCES `competicoes` (`id`),
  CONSTRAINT `fk_id_resultado` FOREIGN KEY (`fk_id_resultado`) REFERENCES `resultados` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `competicoes_resultados`
--

LOCK TABLES `competicoes_resultados` WRITE;
/*!40000 ALTER TABLE `competicoes_resultados` DISABLE KEYS */;
INSERT INTO `competicoes_resultados` VALUES (1,1,1),(2,1,2),(3,5,3),(4,10,16);
/*!40000 ALTER TABLE `competicoes_resultados` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-09 22:27:38
