import { LEFT, MOVE, RIGHT } from "./drone-actions-constants.js";
import { validateStringIsOneOf } from "../utils/string-validations.js";

const CHARACTER_TO_SPLIT_ACTIONS_INPUT = '';
const ACTION_FIELD_NAME = 'action';

const VALID_ACTIONS_LOOKUP = {
  [LEFT]: true,
  [MOVE]: true,
  [RIGHT]: true
}

/**
 * @param {string} actionsInput
 */
const validateAndParseActionsInput = actionsInput => {
  const actions = actionsInput.split(CHARACTER_TO_SPLIT_ACTIONS_INPUT)
  actions.forEach(
    action => validateStringIsOneOf(action, VALID_ACTIONS_LOOKUP, ACTION_FIELD_NAME)
  );
  return actions;
}

export class DroneActions {
  /**
   * @param {string} actionsInput
   */
  constructor(actionsInput) {
    this.actions = validateAndParseActionsInput(actionsInput);
  }
}