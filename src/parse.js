import {
  cond, eq, every, flow, head, identity, isNumber, map, over, overEvery,
  replace, size, split, stubTrue, startsWith, toNumber, zipObject,
} from 'lodash/fp'
import { createObj } from 'cape-lodash'
import { fields } from './schema'

export function createError(type, message) {
  return value => ({ error: true, message, type, value })
}
export const basicError = createError('none', 'Ill formed value or parser not found for line type.')
export const dataError = createError('data', 'Invalid length of values or values not numbers.')

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
export const createDataObj = flow(
  zipObject(fields),
  createObj('value'),
)
export const parseDataLine = flow(
  over([getDataElements, identity]),
  cond([
    [flow(head, isValidDataLine), flow(head, createDataObj)],
    [stubTrue, dataError],
  ])
)

export const parseLine = cond([
  [isDataOutput, parseDataLine],
  [stubTrue, basicError],
])
