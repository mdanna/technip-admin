ALTER TABLE `Rules`
	DROP INDEX `3cb2ab1c8719509fd306fd14740126`,
	MODIFY `Rules` VARCHAR(120) NOT NULL,
	ADD CONSTRAINT `3cb2ab1c8719509fd306fd14740126` UNIQUE KEY(`Rules`),
	DROP PRIMARY KEY,
	ADD PRIMARY KEY(`Rules`);