CREATE TABLE `ObservationTakenRules`(
	`CreatedBy` VARCHAR(32),
	`CreatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
	`LastUpdatedBy` VARCHAR(32),
	`LastUpdatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
	`ObservationID` VARCHAR(40),
	`ObservationRuleID` VARCHAR(40) NOT NULL,
	`Rule` VARCHAR(40),
	`SoftDeleteFlag` BOOLEAN,
	PRIMARY KEY(`ObservationRuleID`)
);
ALTER TABLE `ObservationTakenRules`
	ADD CONSTRAINT `b8c8e75a8ac020b06ddd30a0abd689` UNIQUE KEY(`ObservationRuleID`);
