var util = require('util');
var bleno = require('../node_modules/bleno');

// var sumo = require('../node_modules/node-sumo');
// var drone = sumo.createClient();
// drone.connect(function() {
//   console.log("connect...");
// });

function DroneCommandCharacteristic() {
  bleno.Characteristic.call(this, {
    uuid: '13333333333333333333333333330001',
    properties: ['write'],
    descriptors: [
      new bleno.Descriptor({
        uuid: '2901',
        value: 'sets drone command.'
      })
    ]
  });
}

util.inherits(DroneCommandCharacteristic, bleno.Characteristic);

DroneCommandCharacteristic.prototype.onWriteRequest = function(data, offset, withoutResponse, callback) {
  if (offset) {
    callback(this.RESULT_ATTR_NOT_LONG);
  }
  // else if (data.length !== 1) {
  //   callback(this.RESULT_INVALID_ATTRIBUTE_LENGTH);
  // }
  else {
    var command = data.readUInt8(0);
    command.log("command: " + command);
    // ここにドローンに関するコマンドを追加
    // if (crust == 1) {
    //   drone.forward(50);

    //   setTimeout(function() {
    //     drone.stop();
    //   }, 1000);
    // }
    callback(this.RESULT_SUCCESS);

  }
};

module.exports = DroneCommandCharacteristic;
