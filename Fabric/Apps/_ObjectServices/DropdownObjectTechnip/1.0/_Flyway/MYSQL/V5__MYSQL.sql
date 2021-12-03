CREATE TABLE `ProblemCorrected`(
	`Corrected` VARCHAR(40) NOT NULL,
	`CreatedBy` VARCHAR(32),
	`CreatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
	`LastUpdatedBy` VARCHAR(32),
	`LastUpdatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
	`SoftDeleteFlag` BOOLEAN,
	PRIMARY KEY(`Corrected`)
);
ALTER TABLE `ProblemCorrected`
	ADD CONSTRAINT `f959156089c8e19d9885e843c50687` UNIQUE KEY(`Corrected`);
