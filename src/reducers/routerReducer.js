// import { push, replace, go, goBack, goForward, locationChange } from 'actions';
import { PUSH, REPLACE, GO, GO_BACK, GO_FORWARD, LOCATION_CHANGE } from 'const/constants';

const initialState = {
  pathname: '/home',
  search: '',
  queries: {},
  hash: '',
};

export const routerReducer = (state = initialState, action) => {
  switch (action.type) {
    // case PUSH:
    //   return Object.assign({}, state, {
    //     pathname: action.payload
    //   })
    // case REPLACE:
    //   return {
    //     ...state,
    //     ...action.payload,
    //   }
    // case GO:
    //   return Object.assign({}, state, {
    //       visibilityFilter: action.filter
    //     })
    // case GO_BACK:
    //   return {
    //     ...state,
    //     ...action.payload,
    //   }
    // case GO_FORWARD:
    //   return {
    //     ...state,
    //     ...action.payload,
    //   } // not needed here, in middleware
    case LOCATION_CHANGE:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
};