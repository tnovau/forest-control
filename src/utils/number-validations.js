/**
 * @param {number} number
 * @param {string} fieldName
 */
export const validateIsPositive = (number, fieldName) => {
  if (isNaN(number) || number <= 0) {
    throw new Error(`${fieldName} should be a positive value. Received: ${number}.`)
  }
}

/**
 * @param {number} number
 * @param {string} fieldName
 */
export const validateIsZeroOrPositive = (number, fieldName) => {
  if (isNaN(number) || number < 0) {
    throw new Error(`${fieldName} should be a positive value. Received: ${number}.`)
  }
}