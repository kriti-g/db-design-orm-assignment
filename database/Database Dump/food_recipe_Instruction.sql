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
-- Table structure for table `Instruction`
--

DROP TABLE IF EXISTS `Instruction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Instruction` (
  `id` int NOT NULL AUTO_INCREMENT,
  `step` int NOT NULL,
  `description` varchar(250) DEFAULT NULL,
  `recipe` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Instruction_to_Recipe_idx` (`recipe`),
  CONSTRAINT `Instruction_to_Recipe` FOREIGN KEY (`recipe`) REFERENCES `Recipe` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Instruction`
--

LOCK TABLES `Instruction` WRITE;
/*!40000 ALTER TABLE `Instruction` DISABLE KEYS */;
INSERT INTO `Instruction` VALUES (4,1,'Shape your cookies in a knot or make a double twist with a tube of dough',15),(5,1,'Prepare and wash the baby bok choy.\n',18),(6,1,'Start by slicing the beef into thin strips.  ',19),(7,1,'Clean & Prep the fish',20),(8,1,'Pour olive oil, water, milk, and salt into a large saucepan, and place over high heat.',21),(9,1,'In a medium bowl, mix the cumin, cayenne pepper, turmeric, and coriander.',22),(10,1,'Mix white rice, flour, eggs, parsley, Parmesan cheese, salt, and black pepper together with a wooden spoon in a bowl. ',23),(11,1,'Add chicken and cook, flipping once, until golden and no longer pink, 8 minutes per side.',24),(12,1,'In a large bowl, whisk together yogurt, lemon, turmeric, 1 teaspoon garam masala, and cumin.',25),(13,1,'In a large bowl, whisk together yogurt, lime juice, garlic, ginger, garam masala, and turmeric and season with salt and cayenne. ',26),(14,1,'The filling to put between the buttery layers phyllo consists of spinach, fresh herbs, onions, spices, and feta cheese.',16),(15,1,'A herby marinade of red wine, olive oil, dry herbs, and garlic works its magic on the meat for 2 to 3 hours.',17),(16,1,'Mix marinade ingredients together in a dish, then add steaks, turn to coat and set aside for 10 minutes.',27),(17,1,'Place the shiitake in a heatproof bowl and cover with 2 cups (500ml) hot water.',28),(18,1,'Add half the salmon and cook, turning, for 2-3 minutes until just cooked.',29),(19,2,'Brush them with egg and bake for 20 minutes or until golden brown.',15),(20,2,'Cook your bok choy with the garlic and a small amount of water and set aside',18),(21,2,'Stir-fry your broccolini first, then remove and set aside',19),(22,2,'Arrange 3-5 larger green onion and ginger pieces onto a steaming plate.  Place the fish on top of those pieces. ',20),(23,2,'When the mixture comes to a boil, remove from heat immediately, and stir in tapioca flour and garlic until smooth.',21),(24,2,'Heat oil in a large saucepan or deep-fryer over medium heat until hot. Fry balls a few at a time until browned, about 2 minutes per side.',23),(25,2,'Add heavy cream and chicken and simmer until warmed through, 5 minutes more.',24),(26,2,'Working in batches, add chicken and cook until golden all over, about 2 minutes per side.',25),(27,2,'Add chicken and toss until fully coated. Let marinate in the fridge at least 2 hours. ',26),(28,2,'Bake for 45 minutes',16),(29,2,'Grill the meat for approximately 10 minutes, turning to get an even cooking',17),(30,2,'Heat a chargrill pan or barbecue on medium heat.',27),(31,2,'Add the chicken, return to a simmer and cook for 10 minutes.',28),(32,2,'Add rice wine, broccolini, edamame, remaining 1 tbs tamari and 1/4 cup (60ml) water.',29);
/*!40000 ALTER TABLE `Instruction` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-15  2:29:34
