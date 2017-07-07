import {
  cond, eq, every, flow, get, isNumber, map, overEvery,
  replace, set, size, split, stubTrue, startsWith, toNumber, zipObject,
} from 'lodash/fp'
import { createObj, setWith } from 'cape-lodash'
import { fields } from './schema'

export function createError(message) {
  return flow(
    set('error', true),
    set('message', message)
  )
}
export const basicError = createError('Ill formed value or parser not found for line type.')
export const dataError = createError('Invalid length of values or values not numbers.')

export const dataLineStartsWith = 'Output: '
export const isDataOutput = startsWith(dataLineStartsWith)
export const dataExpectedValueCount = fields.length
export const hasValidDataCount = eq(dataExpectedValueCount)
export const isValidDataElement = isNumber
export const isValidDataLine = overEvery(
  flow(size, hasValidDataCount),
  every(isValidDataElement)
)
export const getDataElements = flow(
  replace(dataLineStartsWith, ''),
  split(','),
  map(toNumber)
)
export const createDataObj = zipObject(fields)
export const parseDataLine = flow(
  set('type', 'data'), // Set the type of notice this is.
  setWith('data', 'line', getDataElements), // Set data field with basic processing of line.
  cond([
    [flow(get('data'), isValidDataLine), setWith('value', 'data', createDataObj)],
    [stubTrue, dataError],
  ])
)
export const prepareLine = flow(
  createObj('line'), // Save line string value to 'line' property.
  set('type', 'none'), // Start with unknown type.
)
export const parseLine = flow(
  prepareLine,
  cond([
    [isDataOutput, parseDataLine],
    [stubTrue, basicError],
  ])
)
