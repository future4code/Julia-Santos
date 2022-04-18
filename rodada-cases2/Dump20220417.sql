-- MySQL dump 10.13  Distrib 8.0.28, for macos11 (x86_64)
--
-- Host: localhost    Database: db_wirecard
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `tb_boleto`
--

DROP TABLE IF EXISTS `tb_boleto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_boleto` (
  `cd_id` int NOT NULL AUTO_INCREMENT,
  `cd_boleto` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`cd_id`),
  UNIQUE KEY `cd_id_UNIQUE` (`cd_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_boleto`
--

LOCK TABLES `tb_boleto` WRITE;
/*!40000 ALTER TABLE `tb_boleto` DISABLE KEYS */;
INSERT INTO `tb_boleto` VALUES (1,'602771996729094357526664164'),(2,'900246387495099306684361019'),(3,'330970401518661014363966920'),(4,'680175275799407631157707502'),(5,'876344617890402475178453391'),(6,'596703455686053559764225481'),(7,'873683172335316829856135870'),(8,'308882209058618846975639765'),(9,'206937014517481004468571507'),(10,'851371505549362755075852113'),(11,'432937318453319027732538416');
/*!40000 ALTER TABLE `tb_boleto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_cartao`
--

DROP TABLE IF EXISTS `tb_cartao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_cartao` (
  `cd_id` int NOT NULL AUTO_INCREMENT,
  `vl_numero` varchar(45) DEFAULT NULL,
  `dt_expira` varchar(10) DEFAULT NULL,
  `cd_cvv` varchar(45) DEFAULT NULL,
  `nm_bandeira` varchar(45) DEFAULT NULL,
  `fk_titular_cd_id` int NOT NULL,
  PRIMARY KEY (`cd_id`),
  UNIQUE KEY `cd_id_UNIQUE` (`cd_id`),
  KEY `fk_tb_cartao_tb_titular_idx` (`fk_titular_cd_id`),
  CONSTRAINT `fk_tb_cartao_tb_titular` FOREIGN KEY (`fk_titular_cd_id`) REFERENCES `tb_titular` (`cd_id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_cartao`
--

LOCK TABLES `tb_cartao` WRITE;
/*!40000 ALTER TABLE `tb_cartao` DISABLE KEYS */;
INSERT INTO `tb_cartao` VALUES (26,'1234432156788765','01/06/2029','123','Visa',18),(27,'1234432156788766','01/06/2029','123','Visa',19),(28,'1234432156788767','01/06/2029','123','Visa',19);
/*!40000 ALTER TABLE `tb_cartao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_cliente`
--

DROP TABLE IF EXISTS `tb_cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_cliente` (
  `cd_id` int NOT NULL AUTO_INCREMENT,
  `nm_cliente` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`cd_id`),
  UNIQUE KEY `cd_id_UNIQUE` (`cd_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_cliente`
--

LOCK TABLES `tb_cliente` WRITE;
/*!40000 ALTER TABLE `tb_cliente` DISABLE KEYS */;
INSERT INTO `tb_cliente` VALUES (1,'Amazon'),(2,'Amazon'),(3,'Amazon'),(4,'Amazon'),(5,'Amazon'),(6,'Amazon'),(7,'Amazon'),(8,'Amazon'),(9,'Amazon'),(10,'Amazon'),(11,'Amazon'),(12,'Amazon'),(13,'Amazon'),(14,'Amazon');
/*!40000 ALTER TABLE `tb_cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_comprador`
--

DROP TABLE IF EXISTS `tb_comprador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_comprador` (
  `cd_id` int NOT NULL AUTO_INCREMENT,
  `nm_comprador` varchar(100) DEFAULT NULL,
  `nm_email` varchar(100) DEFAULT NULL,
  `cd_cpf` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`cd_id`),
  UNIQUE KEY `cd_id_UNIQUE` (`cd_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_comprador`
--

LOCK TABLES `tb_comprador` WRITE;
/*!40000 ALTER TABLE `tb_comprador` DISABLE KEYS */;
INSERT INTO `tb_comprador` VALUES (1,'Julia Oliveira','Julia Oliveira','Julia Oliveira'),(2,'Julia Oliveira','jucs.santos.oliveira@gmail.com','123874323423'),(3,'Julia Oliveira','jucs.santos.oliveira@gmail.com','123874323423'),(4,'Julia Oliveira','jucs.santos.oliveira@gmail.com','123874323423'),(5,'Julia Oliveira','jucs.santos.oliveira@gmail.com','123874323423'),(6,'Julia Oliveira','jucs.santos.oliveira@gmail.com','123874323423'),(7,'Julia Oliveira','jucs.santos.oliveira@gmail.com','123874323423'),(8,'Julia Oliveira','jucs.santos.oliveira@gmail.com','123874323423'),(9,'Julia Oliveira','jucs.santos.oliveira@gmail.com','123874323423'),(10,'Julia Oliveira','jucs.santos.oliveira@gmail.com','123874323423'),(11,'Julia Oliveira','jucs.santos.oliveira@gmail.com','123874323423'),(12,'Julia Oliveira','jucs.santos.oliveira@gmail.com','123874323423'),(13,'Julia Oliveira','jucs.santos.oliveira@gmail.com','123874323423');
/*!40000 ALTER TABLE `tb_comprador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_forma_pagamento`
--

DROP TABLE IF EXISTS `tb_forma_pagamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_forma_pagamento` (
  `cd_id` int NOT NULL AUTO_INCREMENT,
  `fk_boleto_cd_id` int DEFAULT NULL,
  `fk_cartao_cd_id` int DEFAULT NULL,
  `nm_forma_pagamento` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`cd_id`),
  UNIQUE KEY `idtb_forma_pagamento_UNIQUE` (`cd_id`),
  KEY `fk_tb_forma_pagamento_tb_boleto1_idx` (`fk_boleto_cd_id`),
  KEY `fk_tb_forma_pagamento_tb_cartao1_idx` (`fk_cartao_cd_id`),
  CONSTRAINT `fk_tb_forma_pagamento_tb_boleto1` FOREIGN KEY (`fk_boleto_cd_id`) REFERENCES `tb_boleto` (`cd_id`),
  CONSTRAINT `fk_tb_forma_pagamento_tb_cartao1` FOREIGN KEY (`fk_cartao_cd_id`) REFERENCES `tb_cartao` (`cd_id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_forma_pagamento`
--

LOCK TABLES `tb_forma_pagamento` WRITE;
/*!40000 ALTER TABLE `tb_forma_pagamento` DISABLE KEYS */;
INSERT INTO `tb_forma_pagamento` VALUES (25,NULL,26,'Cartao de Credito'),(26,NULL,27,'Cartao de Credito'),(27,NULL,28,'Cartao de Credito'),(28,NULL,28,'Cartao de Credito'),(29,1,NULL,'Boleto'),(30,NULL,28,'Cartao de Credito'),(31,NULL,28,'Cartao de Credito'),(32,2,NULL,'Boleto'),(33,3,NULL,'Boleto'),(34,NULL,28,'Cartao de Credito'),(35,4,NULL,'Boleto'),(36,5,NULL,'Boleto'),(37,NULL,28,'Cartao de Credito'),(38,6,NULL,'Boleto'),(39,NULL,28,'Cartao de Credito'),(40,7,NULL,'Boleto'),(41,NULL,28,'Cartao de Credito'),(42,8,NULL,'Boleto'),(43,NULL,28,'Cartao de Credito'),(44,9,NULL,'Boleto'),(45,NULL,28,'Cartao de Credito'),(46,10,NULL,'Boleto'),(47,NULL,28,'Cartao de Credito'),(48,11,NULL,'Boleto');
/*!40000 ALTER TABLE `tb_forma_pagamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_pagamento`
--

DROP TABLE IF EXISTS `tb_pagamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_pagamento` (
  `cd_id` int NOT NULL AUTO_INCREMENT,
  `vl_total` double(20,2) DEFAULT NULL,
  `fk_forma_pagamento_cd_id` int NOT NULL,
  `fk_comprador_cd_id` int NOT NULL,
  `fk_cliente_cd_id` int NOT NULL,
  `nm_status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`cd_id`),
  UNIQUE KEY `cd_id_UNIQUE` (`cd_id`),
  KEY `fk_tb_pagamento_tb_forma_pagamento1_idx` (`fk_forma_pagamento_cd_id`),
  KEY `fk_tb_pagamento_tb_comprador1_idx` (`fk_comprador_cd_id`),
  KEY `fk_tb_pagamento_tb_cliente1_idx` (`fk_cliente_cd_id`),
  CONSTRAINT `fk_tb_pagamento_tb_cliente` FOREIGN KEY (`fk_cliente_cd_id`) REFERENCES `tb_cliente` (`cd_id`),
  CONSTRAINT `fk_tb_pagamento_tb_comprador` FOREIGN KEY (`fk_comprador_cd_id`) REFERENCES `tb_comprador` (`cd_id`),
  CONSTRAINT `fk_tb_pagamento_tb_forma_pagamento` FOREIGN KEY (`fk_forma_pagamento_cd_id`) REFERENCES `tb_forma_pagamento` (`cd_id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_pagamento`
--

LOCK TABLES `tb_pagamento` WRITE;
/*!40000 ALTER TABLE `tb_pagamento` DISABLE KEYS */;
INSERT INTO `tb_pagamento` VALUES (21,300000.00,25,1,1,'pendente'),(22,300000.00,26,1,1,'pendente'),(23,300000.00,27,1,1,'pendente'),(24,300000.00,28,1,1,'pendente'),(25,300000.00,29,1,1,'pendente'),(26,300000.00,30,1,1,'pendente'),(27,300000.00,31,1,1,'pendente'),(28,300000.00,32,1,1,'pendente'),(29,300000.00,33,1,1,'pendente'),(30,300000.00,34,1,1,'pendente'),(31,300000.00,35,1,1,'pendente'),(32,300000.00,36,1,1,'pendente'),(33,300000.00,37,1,1,'pendente'),(34,300000.00,38,1,1,'pendente'),(35,300000.00,39,1,1,'pendente'),(36,300000.00,40,1,1,'pendente'),(37,300000.00,41,1,1,'pendente'),(38,300000.00,42,1,1,'pendente'),(39,300000.00,43,1,1,'pendente'),(40,300000.00,44,1,1,'pendente'),(41,300000.00,45,1,1,'pendente'),(42,300000.00,46,1,1,'pendente'),(43,300000.00,47,1,1,'pendente'),(44,300000.00,48,1,1,'pendente');
/*!40000 ALTER TABLE `tb_pagamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_titular`
--

DROP TABLE IF EXISTS `tb_titular`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_titular` (
  `cd_id` int NOT NULL AUTO_INCREMENT,
  `nm_titular` varchar(45) DEFAULT NULL,
  `dt_aniversario` varchar(10) DEFAULT NULL,
  `cd_documento` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`cd_id`),
  UNIQUE KEY `cd_id_UNIQUE` (`cd_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_titular`
--

LOCK TABLES `tb_titular` WRITE;
/*!40000 ALTER TABLE `tb_titular` DISABLE KEYS */;
INSERT INTO `tb_titular` VALUES (18,'Julia Oliveira','01/07/1998','1238743234230'),(19,'Julia Oliveira','01/07/1998','1238743234231');
/*!40000 ALTER TABLE `tb_titular` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-17  1:46:52
