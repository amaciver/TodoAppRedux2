import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions.js';
import merge from 'lodash/merge';

const errorReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  let newState = [];
  switch (action.type) {
    case RECEIVE_ERRORS:
      newState = merge([], oldState, action.errors);
      return newState;
    case CLEAR_ERRORS:
      return newState;
    default:
      return oldState;
  }
};

export default errorReducer;
