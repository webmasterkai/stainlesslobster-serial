/* globals describe test expect */
import { getDataElements, isDataOutput, parseDataLine, parseLine } from './parse'

const lines = [
  'Output: 2,0,1,0,18.32,77.00,66.4Initialization complete!',
  'Firmware version: 4.3.0.0',
  'Output: 2,0,1,0,19.22,77.00,68.40,17.00,13.10',
  'Output: 2,0,1,1,19.22,84.20,68.50,31.00,12.80',
  'Output: 2,0,1,1,19.22,84.20,68.50,32.00,13.20',
  'Output: 2,0,1,0,19.22,77.00,68.50,17.00,13.10',
  'Output: 2,0,1,1,19.22,84.20,68.60,31.00,12.90',
  'Output: 2,0,1,0,19.40,78.80,68.70,16.00,13.30',
  'Output: 2,0,1,0,19.40,78.80,68.80,16.00,12.90',
  'Output: 2,0,1,0,19.58,78.80,68.90,16.00,12.90',
  'Output: 2,0,1,0,19.40,78.80,68.90,16.00,13.30',
  'Output: 2,0,1,0,19.58,78.80,68.90,16.00,13.40',
  'Output: 2,0,1,0,19.58,78.80,69.00,16.00,13.20',
]

describe('isDataOutput', () => {
  test('true when starts with output.', () => {
    expect(isDataOutput(lines[0])).toBe(true)
    expect(isDataOutput(lines[2])).toBe(true)
    expect(isDataOutput(lines[3])).toBe(true)
  })
  test('false when starts with something else', () => {
    expect(isDataOutput(lines[1])).toBe(false)
  })
})
describe('getDataElements', () => {
  test('split string into array of numbers', () => {
    expect(getDataElements(lines[2])).toEqual([2, 0, 1, 0, 19.22, 77, 68.4, 17, 13.1])
    expect(getDataElements(lines[3])).toEqual([2, 0, 1, 1, 19.22, 84.2, 68.5, 31, 12.8])
  })
})
describe('parseDataLine', () => {
  test('returns error when invalid', () => {
    expect(parseDataLine(lines[0])).toEqual({
      error: true,
      message: 'Invalid length of values or values not numbers.',
      type: 'data',
      value: [
        [2, 0, 1, 0, 18.32, 77, NaN],
        'Output: 2,0,1,0,18.32,77.00,66.4Initialization complete!',
      ],
    })
  })
  test('returns data object when valid', () => {
    expect(parseDataLine(lines[4])).toEqual({
      boxFan: 1,
      boxHumidity: 68.5,
      boxTemp: 19.22,
      compressorFan: 1,
      compressorStatus: 2,
      compressorVolts: 13.2,
      controllerHumidity: 32,
      controllerTemp: 84.2,
      defrostStatus: 0,
    })
  })
})
describe('parseLine', () => {
  test('invalid line', () => {
    parseLine(lines[1]).toEqual({
      error: true,
      message: 'Invalid length of values or values not numbers.',
      type: 'data',
      value: lines[1],
    })
  })
})
