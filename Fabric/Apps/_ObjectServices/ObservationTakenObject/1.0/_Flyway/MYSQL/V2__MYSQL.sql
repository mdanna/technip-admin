ALTER TABLE `ObservationTaken`
	DROP INDEX `467250a6aae8b6216bef8c46615034`,
	CHANGE `ID` `ObservationID` VARCHAR(40) NOT NULL,
	ADD CONSTRAINT `f4cf42e2d71609d71aecedead9dc89` UNIQUE KEY(`ObservationID`),
	DROP PRIMARY KEY,
	ADD PRIMARY KEY(`ObservationID`);
