const appData = {
  observationList: [],
  observationRules : [],
  
  getObservation(id){
    return appData.observationList.find((element) => {
      return element.ObservationID === id;
    });
  }
};