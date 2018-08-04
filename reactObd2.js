class react_obd2 {
    constructor() {
    }

    ready() {
        jetbridge_obd2.ready();
    }

    getBluetoothDeviceNameList() {
        return jetbridge_obd2.getBluetoothDeviceName();
    }

    setMockUpMode(aEnabled) {
        jetbridge_obd2.setMockUpMode(aEnabled);
    }

    startLiveData(aDeviceAddress) {
        jetbridge_obd2.setRemoteDeviceAddress(aDeviceAddress);
        jetbridge_obd2.startLiveData();
    }

    stopLiveData() {
        return jetbridge_obd2.stopLiveData();
    }
}

module.exports = new react_obd2();