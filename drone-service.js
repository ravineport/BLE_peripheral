var util = require('../node_modules/util');
var bleno = require('../node_modules/bleno');

var DroneCommandCharacteristic = require('./drone-command-characteristic');

function DroneService() {
    bleno.PrimaryService.call(this, {
        uuid: '13333333333333333333333333333337',
        characteristics: [
          new DroneCommandCharacteristic()
        ]
    });
}

util.inherits(DroneService, bleno.PrimaryService);

module.exports = DroneService;
