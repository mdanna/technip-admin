CREATE TABLE `ObservationTaken`(
	`actionTaken` VARCHAR(500),
	`attachment` VARCHAR(40),
	`avoidReoccurance` VARCHAR(500),
	`company` VARCHAR(40),
	`CreatedBy` VARCHAR(32),
	`CreatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
	`discipline` VARCHAR(40),
	`entity` VARCHAR(40),
	`furtherInvestigarion` VARCHAR(40),
	`goodObservation` VARCHAR(500),
	`hazard` VARCHAR(40),
	`hazardDetails` VARCHAR(499),
	`ID` VARCHAR(40) NOT NULL,
	`LastUpdatedBy` VARCHAR(32),
	`LastUpdatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
	`observationType` VARCHAR(40),
	`problemCorrected` VARCHAR(40),
	`rulesViolation` VARCHAR(40),
	`sheObservationDate` VARCHAR(40),
	`SoftDeleteFlag` BOOLEAN,
	`topRisk` VARCHAR(40),
	`userEmail` VARCHAR(40),
	`userName` VARCHAR(40),
	`workingArea` VARCHAR(40),
	PRIMARY KEY(`ID`)
);
ALTER TABLE `ObservationTaken`
	ADD CONSTRAINT `467250a6aae8b6216bef8c46615034` UNIQUE KEY(`ID`);
