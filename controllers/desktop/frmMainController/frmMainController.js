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
            title: observationElement.LastUpdatedDateTime.substring(0, 16).replace('T', ' '),
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
          cmpObsElement.title = element.LastUpdatedDateTime.substring(0, 16).replace('T', ' ');
          cmpObsElement.name = element.userName;
          cmpObsElement.status = element.status;
          cmpObsElement.onClickElement = () => this.onSelectObservationElement(element.ObservationID);
          this.view.flxObservationList.add(cmpObsElement);
        });

        kony.application.dismissLoadingScreen();
      });


      this.view.leftMenu.onMenuSelect = (menuItem) => {
        this.view.flxDashboard.isVisible = menuItem === 'dashboard';
        this.view.flxObservation.isVisible = menuItem === 'observation';
      };

      this.view.portletObservation.onSelectElement = (elementId) => {
        this.onSelectObservationElement(elementId);
      };

    };
  },

  onSelectObservationElement(elementId){
    alert(elementId);

    var dataObject = new kony.sdk.dto.DataObject("ObservationTakenRules");
    dataObject.odataUrl = `$filter=ObservationID eq ${elementId}`;  
    
    this.objSvc.fetch({
      dataObject: dataObject
    }, (response) => {
      const rules = [];
      response.records.forEach((record) => {
        rules.push(record.Rule);
      });
    });
  }

});