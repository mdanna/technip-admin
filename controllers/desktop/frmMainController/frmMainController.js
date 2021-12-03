define({ 
  objScv: null,

  onViewCreated(){
    this.view.init = () => {

      //init global data
      kony.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {});
      this.objSvc = VMXFoundry.getObjectService("ObservationTakenObject", {
        "access": "online"
      });

      var dataObject = new kony.sdk.dto.DataObject("ObservationTaken");

      this.objSvc.fetch({
        dataObject: dataObject
      }, (response) => {
        const observationList = response.records;
        observationList.sort((a, b) => {
          return a.LastUpdatedDateTime <= b.LastUpdatedDateTime ? 1 : -1;
        });
        appData.observationList = observationList;

        //init observation portlet
        const portletListData = [];
        const maxPortletList = Math.min(6, appData.observationList.length);
        for(let i = 0; i < maxPortletList; i++){
          const observationElement = appData.observationList[i];
          portletListData.push({
            id: observationElement.ObservationID,
            title: observationElement.ObservationID.substring(0, 18),
            //title: observationElement.LastUpdatedDateTime.substring(0, 16).replace('T', ' '),
            status: observationElement.status
          });
        }
        this.view.portletObservation.data = {
          data: portletListData}
        ;
        this.view.portletObservation.reload();

        //init observation list
        this.view.flxObservationList.removeAll();
        appData.observationList.forEach((element, index) => {
          const cmpObsElement = new com.technip.admindemo.ObservationListElement({
            id: `cmpObsElement${index}`,
            top: null,
            bottom: '24dp'
          }, {}, {});
          cmpObsElement.elementId = element.ObservationID;
          //cmpObsElement.title = element.LastUpdatedDateTime.substring(0, 16).replace('T', ' ');
          //cmpObsElement.name = element.userName;
          cmpObsElement.title = element.ObservationID.substring(0, 18);
          cmpObsElement.name = element.LastUpdatedDateTime.substring(0, 16).replace('T', ' ');
          cmpObsElement.status = element.status;
          cmpObsElement.onClickElement = () => this.onSelectObservationElement(element.ObservationID);
          this.view.flxObservationList.add(cmpObsElement);
        });

        kony.application.dismissLoadingScreen();
      });

      //init date and time

      const now = new Date();

      let weekday = utils.getReadableWeekday(now.getDay());
      let month = utils.getReadableMonth(now.getMonth());

      this.view.appHeader.date = `${weekday}, ${month} ${now.getDate()}, ${now.getFullYear()}`;
      this.view.appHeader.time = `${utils.formatTimeNumber(now.getHours())}:${utils.formatTimeNumber(now.getMinutes())}`;

      this.view.leftMenu.onMenuSelect = (menuItem) => {
        this.view.flxDashboard.isVisible = menuItem === 'dashboard';
        this.view.flxObservation.isVisible = menuItem === 'observation';
        this.view.flxDetails.isVisible = false;
        this.view.appHeader.showObservationPath = false;
        this.view.appHeader.showDateTime = true;
      };

      this.view.portletObservation.onSelectElement = (elementId) => {
        this.onSelectObservationElement(elementId);
      };

    };
  },

  onSelectObservationElement(elementId){
    voltmx.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {});

    this.view.leftMenu.deselect();
    this.view.flxDashboard.isVisible = false;
    this.view.flxObservation.isVisible = false;
    this.view.appHeader.showObservationPath = true;
    this.view.appHeader.showDateTime = false;

    var dataObject = new kony.sdk.dto.DataObject("ObservationTakenRules");
    dataObject.odataUrl = `$filter=ObservationID eq ${elementId}`;  

    this.objSvc.fetch({
      dataObject: dataObject
    }, (response) => {
      let rules = "";
      let separator = "";
      response.records.forEach((record) => {
        rules += separator;
        rules += record.Rule;
        separator = '\n';
      });
      const observation = appData.getObservation(elementId);
      this.view.blockId.content = observation.ObservationID.substring(0, 18);
      this.view.blockDate.content = observation.LastUpdatedDateTime.substring(0, 16).replace('T', ' ');
      this.view.blockEntity.content = observation.entity;
      this.view.blockWorkingArea.content = observation.workingArea;
      this.view.blockObservationType.content = observation.observationType;
      this.view.blockHazardDef.content = observation.hazard;
      this.view.blockHazardDetails.content = observation.hazardDetails;
      this.view.blockProblemSolved.content = observation.problemCorrected;
      this.view.blockPrevention.content = observation.actionTaken;
      this.view.blockReoccurrance.content = observation.avoidReoccurance;
      this.view.blockFurther.content = observation.furtherInvestigarion;
      this.view.blockViolation.content = observation.rulesViolation;
      this.view.blockRules.content = rules;

      this.view.lblAssignee.text = observation.userName;

      this.view.flxDetails.isVisible = true;
      voltmx.application.dismissLoadingScreen();
    });
  }

});