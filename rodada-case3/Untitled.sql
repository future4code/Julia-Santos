-- MySQL dump 10.13  Distrib 8.0.28, for macos11 (x86_64)
--
-- Host: localhost    Database: db_amaro
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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `tags` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (7516,'VESTIDO WRAP FLEUR','neutro,liso,basics,viagem'),(7518,'VESTIDO CAMISETA FANCY','casual,liso'),(7533,'VESTIDO COTTON DOUBLE','balada,liso,moderno,descolado'),(7613,'VESTIDO LONGO BABADO','casual,liso,passeio,colorido,boho'),(8080,'VESTIDO CURTO RENDA VISCOSE','neutro,workwear,moderno,descolado,liso,elastano'),(8083,'VESTIDO LONGO ESTAMPADO','couro,estampado,passeio,viagem'),(8091,'VESTIDO MIDI VELUDO DECOTADO','couro,veludo,passeio,viagem'),(8104,'VESTIDO BABADO TURTLENECK','casual,metal,delicado,neutro,basics,inverno,viagem'),(8109,'VESTIDO BABADOS HORIZONTAIS','moderno,boho,festa,descolado,colorido'),(8110,'VESTIDO CUT OUT TRICOT','casual,colorido,delicado,descolado,viagem,inverno'),(8119,'VESTIDO BABADOS KNIT','moderno,metal,descolado,elastano,festa,colorido'),(8264,'VESTIDO CURTO VELUDO CRISTAL','casual,viagem,boho,neutro,festa'),(8291,'VESTIDO MANGA COMPRIDA COSTAS','inverno,estampas,delicado,descolado,casual,passeio,basics'),(8293,'VESTIDO CURTO VELUDO RECORTE GOLA','colorido,viagem,delicado,descolado,inverno'),(8300,'VESTIDO MALHA COM FENDA','balada,metal,estampas,moderno'),(8301,'VESTIDO LONGO CREPE MANGA COMPRIDA','casual,metal,delicado,descolado'),(8309,'VESTIDO MOLETOM COM CAPUZ','inverno,liso,casual,descolado'),(8310,'VESTIDO CURTO PONTO ROMA MANGA','casual,metal,delicado,descolado,elastano,estampas'),(8311,'VESTIDO SLIPDRESS CETIM','balada,metal,boho,descolado,passeio'),(8314,'VESTIDO PLISSADO ACINTURADO','casual,viagem,delicado'),(8358,'VESTIDO REGATA FEMININO COM GOLA','moderno,inverno,liso,basics'),(8360,'VESTIDO FEMININO CANELADO','workwear,viagem,descolado'),(8363,'VESTIDO CURTO MANGA LONGA LUREX','colorido,metal,delicado,estampas,passeio'),(8367,'VESTIDO MOLETOM COM CAPUZ MESCLA','casual,metal,metal'),(8371,'VESTIDO TRICOT CHEVRON','balada,neutro,delicado,festa');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-17 17:36:20
