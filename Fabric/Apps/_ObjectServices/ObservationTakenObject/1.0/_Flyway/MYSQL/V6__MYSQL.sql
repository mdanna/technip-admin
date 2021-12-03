ALTER TABLE `ObservationTakenRules`
	ADD CONSTRAINT `27f89d361f84a3c60a0a0c2e2d5281` FOREIGN KEY(`ObservationID`) REFERENCES `ObservationTaken`(`ObservationID`);
