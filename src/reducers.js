import { BUY_ACORN, EAT_ACORN } from './actions';
import { combineReducers } from 'redux';

function acorns(counter = 0, action) {
  switch(action.type) {
    case BUY_ACORN:
        return counter + 1;
    case EAT_ACORN:
      return counter > 0 ? counter -1 : 0;
    default:
      return counter;
  }
}

const rootReducer = combineReducers({
  acorns: acorns,
});

export default rootReducer;