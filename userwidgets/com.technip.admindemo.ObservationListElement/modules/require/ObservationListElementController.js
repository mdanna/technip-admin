define(function() {
  const STATUS_OPENED = 'Opened';
  const STATUS_ASSIGNED = 'Assigned';
  const STATUS_CLOSED = 'Closed';
  const STATUS_MISSED = 'Missed';
  const STATUS_UNKNOWN = 'Unknown';

  const SKIN_OPENED = 'sknFlxRoundedLightGreen';
  const SKIN_ASSIGNED = 'sknFlxRoundedLightBlue';
  const SKIN_CLOSED = 'sknFlxRoundedGrey';
  const SKIN_MISSED = 'sknFlxRoundedLightPink';
  const SKIN_UNKNOWN = 'sknFlxRoundedWhiteBorderGrey';

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.view.preShow = () => {
        this.view.onClick = () => {
          this.onClickElement();
        };
        
        switch(this.status){
          case STATUS_OPENED:
            this.view.flxContent.skin = SKIN_OPENED;
            this.view.lblStatus.text = STATUS_OPENED;
            break;
          case STATUS_ASSIGNED:
            this.view.flxContent.skin = SKIN_ASSIGNED;
            this.view.lblStatus.text = STATUS_ASSIGNED;
            break;
          case STATUS_CLOSED:
            this.view.flxContent.skin = SKIN_CLOSED;
            this.view.lblStatus.text = STATUS_CLOSED;
            break;
          case STATUS_MISSED:
            this.view.flxContent.skin = SKIN_MISSED;
            this.view.lblStatus.text = STATUS_MISSED;
            break;
          default:
            this.view.flxContent.skin = SKIN_UNKNOWN;
            this.view.lblStatus.text = STATUS_UNKNOWN;
            break;
        }
      };
    },
    //Logic for getters/setters of custom properties
    initGettersSetters() {
      defineGetter(this, 'status', () => {
        return this._status;
      });
      defineSetter(this, 'status', value => {
        if (value !== STATUS_OPENED && value !== STATUS_ASSIGNED && value !== STATUS_CLOSED && value !== STATUS_MISSED) {
          value = STATUS_UNKNOWN;
        }
        this._status = value;
      });
      defineGetter(this, 'elementId', () => {
        return this._elementId;
      });
      defineSetter(this, 'elementId', value => {
        this._elementId = value;
      });
    },
    
    onClickElement() {}
  };
});