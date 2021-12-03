define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.view.postShow = () => {
        this.reload();
      };
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
      defineGetter(this, 'data', () => {
        return this._data;
      });
      defineSetter(this, 'data', value => {
        this._data = value;
      });
    },

    onSelectElement(){},

    reload(){
      const data = this.data.data;
      this.view.flxElements.removeAll();
      data.forEach((element, index) => {
        const cmpElement = new com.technip.admindemo.PortletListElement({
          id: `cmpElement${index}`,
          top: '24dp'
        }, {}, {});
        cmpElement.elementId = element.id;
        cmpElement.title = element.title;
        cmpElement.status = element.status;
        cmpElement.onClickElement = () => {
          this.onSelectElement(element.id);
        };
        this.view.flxElements.add(cmpElement);
      });
      this.view.flxElements.forceLayout();
    }
  };
});