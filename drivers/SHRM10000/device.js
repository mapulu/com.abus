'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class SmokeDetectorDevice extends ZwaveDevice {

    async onMeshInit() {

        // print the node's info to the console
        this.printNode();

        this.registerCapability('measure_battery', 'BATTERY');
        this.registerCapability('alarm_smoke', 'NOTIFICATION');
    }
}

module.exports = SmokeDetectorDevice;
