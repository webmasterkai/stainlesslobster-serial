export const offOnVals = ['off', 'on']

export const dataValues = {
  compressorStatus: {
    name: 'Compressor Status',
    description: 'Is the compressor running.',
    values: ['off', 'min', 'max'],
  },
  defrostStatus: {
    name: 'Defrost Status',
    description: 'Is the system defrosting.',
    values: offOnVals,
  },
  boxFan: {
    name: 'Fridge Fan Status',
    description: 'Is the fan running inside the box.',
    values: offOnVals,
  },
  compressorFan: {
    name: 'Room Room Fan status',
    description: 'Is the fan running in the compressor room.',
    values: offOnVals,
  },
  boxTemp: {
    name: 'Box temp',
    description: 'Measured on fan enclosure. Localized (F/C). Float value with two digits or "nan" if no sensor is present. Example: 39.05',
  },
  controllerTemp: {
    name: 'Ambient temp',
    description: 'Temperature of the head unit. Localized (F/C). Float value with two digits or "nan" if no sensor is present. Measured in the head unit enclosure. Example: 75.72.',
  },
  boxHumidity: {
    name: 'Box relative humidity',
    description: 'Relative humidity percentage. Measured on fan enclosure. Float value representing relative humidity in percent. Example: 55.72.',
  },
  controllerHumidity: {
    name: 'Ambient relative humidity',
    description: 'Relative humidity percentage. Measured in the head unit enclosure. Float value representing relative humidity in percent. Example: 73.21.',
  },
  compressorVolts: {
    name: 'System Voltage',
    description: 'Voltage measured at head unit.',
  },
}

// Field machine names in the order we get them from the serial output.
export const fields = [
  'compressorStatus', 'defrostStatus', 'boxFan', 'compressorFan', 'boxTemp',
  'controllerTemp', 'boxHumidity', 'controllerHumidity', 'compressorVolts',
]
