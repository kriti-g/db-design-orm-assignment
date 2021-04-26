-- MySQL dump 10.13  Distrib 8.0.22, for macos10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: food_recipe
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `Ingredient`
--

DROP TABLE IF EXISTS `Ingredient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Ingredient` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `measurement` varchar(45) DEFAULT NULL,
  `recipe_id` int NULL,
  PRIMARY KEY (`id`),
  KEY `Ingredient_to_Recipe_idx` (`recipe_id`),
  CONSTRAINT `Ingredient_to_Recipe` FOREIGN KEY (`recipe_id`) REFERENCES `Recipe` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Ingredient`
--

LOCK TABLES `Ingredient` WRITE;
/*!40000 ALTER TABLE `Ingredient` DISABLE KEYS */;
INSERT INTO `Ingredient` VALUES (1,'vanilla','1 tbsp',15),(2,'spinach','100 grams',16),(3,'pork','100 grams',17),(4,'beef','50 grams',18),(5,'brocolo','150 grams',19),(6,'fish','70 grams',20),(7,'cheese','3 cups',21),(8,'coconut milk','14 ounces',22),(9,'rice','2 cups',23),(10,'masala','2 tsp',24),(11,'greek yogurt','1 cup',25),(12,'chicken legs','2 lbs',26),(13,'beans','400 grams',27),(14,'sake','125 ml',28),(15,'salmon','600 grams',29),(16,'butter','12 grams',15),(17,'phyllo','150 grams',16),(18,'olive oil','3 tbsp',17),(19,'rice noodles','90 grams',18),(20,'steak','2 lbs',19),(21,'canola oil','3 tbsp',20),(22,'tapioca flour','2 cups',21),(23,'chicken breast','300 lbs',22),(24,'flour','4 cups',23),(25,'chicken breast','1 lbs',24),(26,'garam masala','1 cup',25),(27,'ginger','1 tbsp',26),(28,'soy sauce','125 ml',27),(29,'soba noodles','270 grams',28),(30,'rice wine','70 ml',29);
/*!40000 ALTER TABLE `Ingredient` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-15  2:29:35
