radio.onReceivedNumber(function (receivedNumber) {
    carnum = receivedNumber
})
WiFiIoT.on_wifi_connect(function (IP_Address, Device_ID) {
    basic.showIcon(IconNames.Yes)
})
WiFiIoT.on_wifi_disconnect(function (Error_code) {
    basic.showIcon(IconNames.No)
})
let temp = 0
let carnum = 0
WiFiIoT.initializeWifi(SerialPin.P16, SerialPin.P8)
WiFiIoT.setWifi("iots", "12345678")
radio.setGroup(173)
basic.forever(function () {
    temp = SmartCity.readData(SmartCity.DHT11dataType.temperature, DigitalPin.P0)
    WiFiIoT.sendThingspeak(
    "74ZCT5KZJ36EUBZQ",
    temp,
    carnum
    )
    basic.showNumber(temp)
})
basic.forever(function () {
    if (temp == 0) {
        temp = 27
    } else {
        temp += -2
    }
})
