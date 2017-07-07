# Stainless Lobster Fridge Optimizer - Serial Connection

## Proposal

Every 60 seconds the fridge optimizer controller will write to the usb/serial port a string of comma seperated numerical values. Example: `"1,700,1,-6.61,40,26.67,70,12.4,5.6"`



Float value representing relative humidity in percent


Float value with two effective decimals
Example: 12.38


### Values

1. `compressorStatus`: **Compressor status** - Is the compressor running.
    * `0` = Not running
    * `1` = Running at min RPM
    * `2` = Running at max RPM
1. `defrostStatus`: **Defrost mode status** - Is the system defrosting.
    * `0` = not in defrost mode
    * `1` = Defrosting
1. `boxFan`: **Fridge Fan status** - Is the fan running inside the box.
    * `0` = Not running
    * `1` = Running
1. `compressorFan`: **Room Room Fan status** - Is the fan running in the compressor room.
    * `0` = Not running
    * `1` = Running
1. `boxTemp`: **Box temp** - Measured on fan enclosure. Localized (F/C). Float value with two digits or "nan" if no sensor is present.  Example: `39.05`
1. `controllerTemp`: **Ambient temp** - Temperature of the head unit. Localized (F/C). Float value with two digits or "nan" if no sensor is present.  Measured in the head unit enclosure. Example: `75.72`.
1. `boxHumidity`: **Box relative humidity** - Relative humidity percentage. Measured on fan enclosure. Float value representing relative humidity in percent. Example: `55.72`.
1. `controllerHumidity`: **Ambient relative humidity** - Relative humidity percentage. Measured in the head unit enclosure. Float value representing relative humidity in percent. Example: `73.21`.
1. `compressorVolts`: **System Voltage** - Voltage measured at head unit.

### Future Values
1. `compressorAmps`: **Compressor Amps** - Number of amps being consumed by the compressor.


Output: 2,0,1,0,18.32,77.00,66.4Initialization complete!
Firmware version: 4.3.0.0
Output: 2,0,1,0,19.22,77.00,68.40,17.00,13.10
Output: 2,0,1,1,19.22,84.20,68.50,31.00,12.80
Output: 2,0,1,1,19.22,84.20,68.50,32.00,13.20
Output: 2,0,1,0,19.22,77.00,68.50,17.00,13.10
Output: 2,0,1,1,19.22,84.20,68.60,31.00,12.90
Output: 2,0,1,0,19.40,78.80,68.70,16.00,13.30
Output: 2,0,1,0,19.40,78.80,68.80,16.00,12.90
Output: 2,0,1,0,19.58,78.80,68.90,16.00,12.90
Output: 2,0,1,0,19.40,78.80,68.90,16.00,13.30
Output: 2,0,1,0,19.58,78.80,68.90,16.00,13.40
Output: 2,0,1,0,19.58,78.80,69.00,16.00,13.20

### Possible Json Format

````javascript
{
  box: {
    fan: true,
    temp: -6.61,
    humidity: 40,
  },
  compressor: {
    running: true,
    resistor: 700,
    volts: 12.4,
    amps: 5.6
  },
  controller: {
    temp: 26.67,
    humidity: 70,
  }
}
````
