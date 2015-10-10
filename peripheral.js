var util = require('../node_modules/util');
var bleno = require('../node_modules/bleno');
var DroneService = require('./drone-service');

var name = "DroneSquat";
var droneService = new DroneService();

bleno.on('stateChange', function(state) {
  if (state === 'poweredOn') {
    bleno.startAdvertising(name, [droneService.uuid], function(err) {
      if (err) {
        console.log(err);
      }
    });
  }
  else {
    bleno.stopAdvertising();
  }
});

bleno.on('advertisingStart', function(err) {
  if (!err) {
    console.log('advertising...');
    bleno.setServices([
      droneService
    ]);
  }
});
