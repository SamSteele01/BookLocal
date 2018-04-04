import { LOCATION_CHANGE } from 'const/constants';

const initialState = {
  pathname: '/',
  search: '',
  queries: {},
  hash: '',
};
export const routerReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};