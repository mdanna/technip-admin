CREATE TABLE `CapturedObservation`(
	`company` VARCHAR(40),
	`CreatedBy` VARCHAR(32),
	`CreatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
	`discipline` VARCHAR(40),
	`entity` VARCHAR(40),
	`hazard` VARCHAR(40),
	`hazardDetails` VARCHAR(40),
	`ID` VARCHAR(40) NOT NULL,
	`LastUpdatedBy` VARCHAR(32),
	`LastUpdatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
	`observationType` VARCHAR(40),
	`sheObservationDate` DATETIME(3),
	`SoftDeleteFlag` BOOLEAN,
	`userEmail` VARCHAR(40),
	`userName` VARCHAR(40),
	`workingArea` VARCHAR(40),
	PRIMARY KEY(`ID`)
);
ALTER TABLE `CapturedObservation`
	ADD CONSTRAINT `cedab1182da16967f76177711a8662` UNIQUE KEY(`ID`);
