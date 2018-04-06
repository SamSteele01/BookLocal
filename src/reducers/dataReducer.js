import moment from 'moment';
import { WEB3, WEB3_ERROR, CURRENT_NETWORK, RR, ETH_MEM_START, ETH_MEM_STOP, RESPONSE_TXN, CHECK_IN_DATE, CHECK_OUT_DATE, SET_STORE } from 'const/constants';

const initialState = {
    web3: null,
    web3error: null,
    currentNetwork: null,
    RR: null,
    // account: null,
    tokenId : null,
    ethMemStart: moment([2018, 4, 17]),
    ethMemStop: moment([2018, 4, 21]),
    availability: '', // message, with err 
    responseTxn: null, 
    checkInDate: null,
    checkOutDate: null,
    // renterAddressArray: null, // renter address array
    // owner: '',
    // renter: '',
    // minRentTime: '',
    // roomNumber: '',
    // numBeds: ''
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEB3:
      return Object.assign({}, state, {
        web3: action.payload
      })
    case WEB3_ERROR:
      return Object.assign({}, state, {
        web3error: action.payload
      })
    case CURRENT_NETWORK:
      return Object.assign({}, state, {
        currentNetwork: action.payload
      })
    case RR:
      return Object.assign({}, state, {
        RR: action.payload
      })
    case ETH_MEM_START:
      return Object.assign({}, state, {
        ethMemStart: action.payload
      })
    case ETH_MEM_STOP:
      return Object.assign({}, state, {
        ethMemStop: action.payload
      })
    case RESPONSE_TXN:
      return Object.assign({}, state, {
        responseTxn: action.payload
      })
    case CHECK_IN_DATE:
      return Object.assign({}, state, {
        checkInDate: action.payload
      })
    case CHECK_OUT_DATE:
      return Object.assign({}, state, {
        checkOutDate: action.payload
      })
    case SET_STORE:
      return Object.assign({}, state, {
        [action.payload.key]: action.payload.value
      })
    default:
      return state;
  }
};