CREATE TABLE `Observation`(
	`CreatedBy` VARCHAR(32),
	`CreatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
	`LastUpdatedBy` VARCHAR(32),
	`LastUpdatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
	`Observation` VARCHAR(40) NOT NULL,
	`SoftDeleteFlag` BOOLEAN,
	PRIMARY KEY(`Observation`)
);
ALTER TABLE `Observation`
	ADD CONSTRAINT `b61bbbb99c975be3cca83ce0b5fc9a` UNIQUE KEY(`Observation`);