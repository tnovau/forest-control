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
export const validateIncludesString = (string, searchString, fieldName) => {
  if (!string.includes(searchString)) {
    throw new Error(`${fieldName} should includes "${searchString}".`)
  }
}