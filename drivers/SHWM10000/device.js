'use strict';

const { ZwaveDevice } = require('homey-meshdriver');

class WaterSensorDevice extends ZwaveDevice {
	
	onMeshInit() {
		// print the node's info to the console
		this.printNode();

		// enable debugging
		this.enableDebug();
		
		this.registerCapability('alarm_water', 'NOTIFICATION');
		this.registerCapability('alarm_tamper', 'NOTIFICATION');
		this.registerCapability('measure_battery', 'BATTERY');
		this.registerCapability('alarm_battery', 'BATTERY');
		
		
	}
	
}

module.exports = WaterSensorDevice;