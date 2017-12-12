# Stainless Lobster Fridge Optimizer - Serial Connection

## Current Values

Every 60 seconds the fridge optimizer controller will write to the usb/serial port (/dev/tty.wchusbserial1410) at 115200 a string of comma seperated numerical values. The string starts with "Output: " Example of full string: `"Output: 0,0,0,0,nan,78.80,nan,39.00,5.00,F,0.02"`


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
1. `tempScale`: **Temperature Scale** - Temp values are sent in `F` or `C` based on choice user selected in setup. This tells us scale is currently being used.
1. `compressorAmps`: **Compressor Amps** - Number of amps being consumed by the compressor.


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

### SignalK Output

Need some mapping of fields to SK paths.
