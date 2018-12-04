'use strict'

const v8Util = process.atomBinding('v8_util')

export function isPromisified (func: Function) {
  return v8Util.getHiddenValue<boolean>(func, 'promisified') === true
}

export function markPromisified (func: Function) {
  v8Util.setHiddenValue(func, 'promisified', true)
}
