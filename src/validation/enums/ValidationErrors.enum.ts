/**
 * @enum {ValidationErrorMessagesEnum} ValidationErrorMessagesEnum - Definition of messages displayed in errors
 *
 * @arg {string} InvalidFieldError - Invalid field message error
 * @arg {string} RequiredFieldError - Required field message error
 * @arg {string} MatchFieldError - Match field message error
 */
export enum ValidationErrorMessagesEnum {
  InvalidFieldError = 'Invalid value',
  RequiredFieldError = 'Required field',
  MatchFieldError = 'Value does not match pattern',
}

/**
 * @enum {ValidationErrorNamesEnum} ValidationErrorNamesEnum - Definition of messages names used in errors
 *
 * @arg {string} RequiredFieldError - Required field name error
 * @arg {string} MatchFieldError - Match field name error
 */
export enum ValidationErrorNamesEnum {
  RequiredFieldError = 'RequiredFieldError',
  MatchFieldError = 'MatchFieldError',
}
