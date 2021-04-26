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
-- Table structure for table `Recipe`
--

DROP TABLE IF EXISTS `Recipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Recipe` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cuisine` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(45) DEFAULT NULL,
  `prep_time` int DEFAULT NULL,
  `cook_time` int DEFAULT NULL,
  `user_id` int NULL,
  PRIMARY KEY (`id`),
  KEY `Recipe_to_User_idx` (`user_id`),
  CONSTRAINT `Recipe_to_User` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Recipe`
--

LOCK TABLES `Recipe` WRITE;
/*!40000 ALTER TABLE `Recipe` DISABLE KEYS */;
INSERT INTO `Recipe` VALUES (15,'GREEK','Koulourakia','Greek Butter Cookies',25,20,1),(16,'GREEK','Spanakopita','Spinach Pie',15,45,2),(17,'GREEK','Souvlaki','Pork Skewers',50,10,3),(18,'TAIWANESE','Beef Rice Noodle Stir-Fry','Beef Rice Noodle Stir-Fry',10,15,4),(19,'TAIWANESE','Beef & Broccoli','Beef & Broccoli Stir Fry',20,10,5),(20,'TAIWANESE','Chinese Style Whole Steamed Fish','Chinese Style Whole Steamed Fish',5,18,6),(21,'BRAZILIAN','Pao de Queijo','Brazilian Cheese Bread',10,20,7),(22,'BRAZILIAN','Brazilian Chicken with Coconut Milk','Brazilian Chicken with Coconut Milk',15,30,8),(23,'BRAZILIAN','Fried Rice Cakes','Fried Rice Cakes',15,4,9),(24,'INDIAN','Chicken Tikka Masala','Curry with chicken',10,35,10),(25,'INDIAN','Indian Butter Chicken','Indian Butter Chicken',30,15,11),(26,'INDIAN','Tandoori Chicken','Chicken in yogurt',35,140,12),(27,'JAPANESE','Teriyaki beef and beans','Teriyaki beef and beans',20,15,1),(28,'JAPANESE','Sake-poached chicken with soba noodles','Sake-poached chicken with soba noodles',10,40,1),(29,'JAPANESE','Salmon, ginger and soba noodle stir-fry','Salmon, ginger and soba noodle stir-fry',15,20,1);
/*!40000 ALTER TABLE `Recipe` ENABLE KEYS */;
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
