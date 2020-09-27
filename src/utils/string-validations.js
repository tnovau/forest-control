/**
 * @param {string} candidateString
 * @param {string} fieldName
 */
export const validateStringType = (candidateString, fieldName) => {
  if (typeof candidateString !== 'string') {
    throw new Error(`${fieldName} should be an string.`)
  }
}

/**
 * @param {string} string
 * @param {number} minLength
 * @param {string} fieldName
 */
export const validateMinLength = (string, minLength, fieldName) => {
  if (string.length < minLength) {
    throw new Error(`${fieldName} should be at least ${minLength} characters length.`)
  }
}

/**
 * @param {string} string
 * @param {string} searchString
 * @param {string} fieldName
 */
export const validateIncludesString = (string, searchString, fieldName, times = 1) => {
  const matches = (string.match(new RegExp(searchString, 'g')) || []);
  if (matches.length < times) {
    throw new Error(`${fieldName} should includes "${searchString}"${times > 1 ? ` ${times} times`: ''}.`)
  }
}

/**
 * @param {string} string
 * @param {{ [key: string]: boolean; }} lookupTable
 * @param {string} fieldName
 */
export const validateStringIsOneOf = (string, lookupTable, fieldName) => {
  if (!lookupTable[string]) {
    throw new Error(`${fieldName} should be one of these: ${Object.keys(lookupTable).reduce((p, c) => p ? p + ', ' + c : c, '')}.`)
  }
}