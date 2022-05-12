-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: deemba
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `chat`
--

DROP TABLE IF EXISTS `chat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chat` (
  `id` int NOT NULL,
  `text` varchar(300) NOT NULL,
  `time` varchar(10) NOT NULL,
  `isReceived` tinyint(1) NOT NULL,
  KEY `FK_CHAT_ID` (`id`),
  CONSTRAINT `FK_CHAT_ID` FOREIGN KEY (`id`) REFERENCES `mybabysitterusers` (`id`)
)
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chat`
--

LOCK TABLES `chat` WRITE;
/*!40000 ALTER TABLE `chat` DISABLE KEYS */;
/*!40000 ALTER TABLE `chat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `commentandrating`
--

DROP TABLE IF EXISTS `commentandrating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `commentandrating` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comment` varchar(50) NOT NULL,
  `rating` int NOT NULL,
  `userName` varchar(50) NOT NULL,
  `postId` int NOT NULL,
  PRIMARY KEY (`id`)
)
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `commentandrating`
--

LOCK TABLES `commentandrating` WRITE;
/*!40000 ALTER TABLE `commentandrating` DISABLE KEYS */;
/*!40000 ALTER TABLE `commentandrating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jopposts`
--

DROP TABLE IF EXISTS `jopposts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jopposts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `parentName` varchar(50) NOT NULL,
  `parentImage` varchar(1000) NOT NULL,
  `JobOfer` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jopposts`
--

LOCK TABLES `jopposts` WRITE;
/*!40000 ALTER TABLE `jopposts` DISABLE KEYS */;
INSERT INTO `jopposts` VALUES (1,'deema barakat','','We are looking for a FT nanny to work:\n- Monday to Friday.\n- From 8AM to 5PM.\nCHILD TO PROVIDE CARE FOR:\n-Our son Leo, 18 months old.\nWHO WE ARE...\nWe are a family of 4 living on Euclid Avenue across the street from Collingwood Park, just a 3 min walk from Joyce Skytrain Station.\nJOB RESPONSIBILITIES\n-Provide safe, caring, nurturing and stimulating environment;\n-Brush teeth.\n-Early Child Education activities: Phonics, Counting, Reading.\n-Entertaining activities: walks to the nearby Parks in Stroller;\n-Keep the child\'s areas neat and tidy: kitchen and family room;\n-Meal prep for Leo;\n-Housekeeping: Leo & his sister Bella\'s laundry, Vacuum and mop kitchen, entrance;\nLooking forward to hearing from you!\nHave a great day!'),(2,'adi khen','','Oversee and take care of our super active and fun 14 month old son . Ideal person would help with meal preparation and feeding , changing diapers , light house keeping , playing with him , engaging him in different activities for development , stroller walks or to the park when the weather is nice and sunny etc . Basically someone active , reliable , safe , hygenic and fun !!\r\nWe require availability during weekdays from 8am - 2pm. Fully vaccinated and CPR trained as well as ECE qualified .'),(3,'kirsten H','','We are looking for a fun loving, active, caring and experienced nanny to look after our 3 children. We live in Gonzales neighbourhood and walk to preschool, school, parks and beaches. This position will primarily be with one child, our 4 year old. It will include 2 half days per week and a full day on Friday or every other Friday. I am primarily working from home but need you to prepare snacks and manage the kids. Hours can be adjusted as needed.\r\n\r\nWe have 2 dogs and 6 chickens so there is always a lot of fun to be had!!'),(4,'Annie D','','Hello my name is Annie.\r\nAbout my family: We are a family with one baby boy almost 2 years and a newborn baby.\r\nWhat we are looking for: Ideally, we are looking to find a Day sitter.\r\nJob Location: we are located in the Central part of Surrey, not far from a bus access point.\r\nService Requirements: We\'re hoping our nanny will help with household tasks and caring for our babies.\r\nJob start: As soon as possible.'),(5,'Kamela galy','','Hi! I\'m a mom of 2 boys, and we are looking for part-time/occasional help with child care, for a very unique situation.\r\n\r\nMy boys are 6 (almost 7) and 5 years old. Our 5 year old has a lot of medical challenges, mobility challenges and is non-verbal. He loves to read books and watch cartoons. Our six year old takes a while to warm up to new people, but once connected, loves to do art projects and tell you in great detail about his remote control cars and mine craft.');
/*!40000 ALTER TABLE `jopposts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mybabysitterusers`
--

DROP TABLE IF EXISTS `mybabysitterusers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mybabysitterusers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `birthday` date NOT NULL,
  `gender` varchar(50) NOT NULL,
  `userType` varchar(50) NOT NULL,
  `mobilePhone` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `index_name` (`userType`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mybabysitterusers`
--

LOCK TABLES `mybabysitterusers` WRITE;
/*!40000 ALTER TABLE `mybabysitterusers` DISABLE KEYS */;
INSERT INTO `mybabysitterusers` VALUES (1,'deema','barakat','deemaab','123456d','1991-04-13','female','babySitter','1231541478'),(2,'sahar','aboresh','saharabo','456789','1996-02-23','female','babySitter','123-123-1234'),(3,'dana','khalil','dana1','1234567','1998-03-19','female','Parent','054-158-19865'),(4,'samer','halaby','samer1','56987','1996-06-11','male','Parent','178-789-1456'),(5,'ramy','ferro','ramy4','1587962','1989-06-09','male','Parent','023-987-4569'),(8,'maha','aboresh','maha1','123456','1998-05-14','female','Parent','123-123-1457'),(9,'usama','','123456','123456','2022-01-04','male','babySitter','333-333-3333');
/*!40000 ALTER TABLE `mybabysitterusers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profilepost`
--

DROP TABLE IF EXISTS `profilepost`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profilepost` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `Bio` varchar(1000) NOT NULL,
  `languages` varchar(50) NOT NULL,
  `locationsForWork` varchar(50) NOT NULL,
  `TypeOfWork` varchar(50) NOT NULL,
  `yearsExperience` varchar(50) NOT NULL,
  `ChildrenPrefer` varchar(50) NOT NULL,
  `FirstAid` varchar(50) NOT NULL,
  `smoke` varchar(50) NOT NULL,
  `occasionalWeekends` varchar(50) NOT NULL,
  `travelWithTheFamily` varchar(50) NOT NULL,
  `drivingLicence` varchar(50) NOT NULL,
  `swim` varchar(50) NOT NULL,
  `workWithPets` varchar(50) NOT NULL,
  `allergies` varchar(50) NOT NULL,
  `relevantInformation` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profilepost`
--

LOCK TABLES `profilepost` WRITE;
/*!40000 ALTER TABLE `profilepost` DISABLE KEYS */;
INSERT INTO `profilepost` VALUES (1,'deema','barakat','25 Year Old Female Ecea Certified Preschool Assistant Iso Nanny Position Experience With Age 2.5 to 12 Years','English','Rama','Part-time','2 years (minimum)','Up to two children','Yes','No','Yes','Yes','Yes','Yes','No','none','I love art and making crafts and would love to do '),(2,'Anna','Doe','experienced, qualified, and trusthworrhy person\nOver 20 years experience working with children','French','kiryatshmona','Full-time','over 5 years','Up to two children','Yes','Yes','No','Choose one','Yes','Yes','No','none',' I am a positive and fun Teacher, who enjoys outdo'),(3,'John','smith','Hard Working, caring, passionate and creative nanny- looking to assist a loving family.','Hebrew','Haifa','Temporary','2 years (minimum)','One child only','Yes','No','No','Yes','Yes','No','No','none','I love planning crafts and playing games');
/*!40000 ALTER TABLE `profilepost` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usertype`
--

DROP TABLE IF EXISTS `usertype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usertype` (
  `id` int NOT NULL AUTO_INCREMENT,
  `typeName` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usertype`
--

LOCK TABLES `usertype` WRITE;
/*!40000 ALTER TABLE `usertype` DISABLE KEYS */;
INSERT INTO `usertype` VALUES (1,' babySitter'),(2,' Parent'),(3,'admine');
/*!40000 ALTER TABLE `usertype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'deemba'
--

--
-- Dumping routines for database 'deemba'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-10 15:11:11
