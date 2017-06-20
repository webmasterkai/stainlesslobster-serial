# Stainless Lobster Fridge Optimizer - Serial Connection

## Proposal

Every 60 seconds the fridge optimizer controller will write to the usb/serial port a string of comma seperated numerical values. Example: `"1,700,1,-6.61,40,26.67,70,12.4,5.6"`

### Values

1. `compressorRunning`: (bool) Is the compressor running.
1. `compressorResistor`: (int) Aproximate resistor value of the compressor. Useful for understanding how hard compressor is working.
1. `fanRunning`: (bool) Is the fan running inside the box.
1. `boxTemp`: (int) Temperature in celcius of the box. Measured on fan enclosure.
1. `boxHumidity`: (int) Relative humidity percentage. Measured on fan enclosure.
1. `controllerTemp`: (int) Temperature in celcius of the box. Measured in the controller enclosure.
1. `controllerHumidity`: (int) Relative humidity percentage. Measured in the controller enclosure.
1. `compressorAmps`: (int) Number of amps being consumed by the compressor. Measured at the compressor wire harness.
1. `compressorVolts`: (int) Number of volts available to the compressor. Measured at the controller or in the wire harness?

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
