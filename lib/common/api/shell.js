'use strict'

const { markPromisified } = require('@electron/internal/common/promise-utils')

module.exports = process.atomBinding('shell')

// Mark promisifed APIs
markPromisified(module.exports.openExternal)
