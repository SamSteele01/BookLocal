import { WEB3, WEB3_ERROR, CURRENT_NETWORK, RR, ETH_MEM_START, ETH_MEM_STOP, RESPONSE_TXN, CHECK_IN_DATE, CHECK_OUT_DATE, SET_STORE } from 'const/constants';

export const web3 = (instance) => ({
  type: WEB3,
  payload: instance,
});
export const web3error = (error) => ({
  type: WEB3_ERROR,
  payload: error,
});
export const currentNetwork = (index) => ({
  type: CURRENT_NETWORK,
  payload: index,
});
export const rr = (contract) => ({
  type: RR,
  payload: contract,
});
export const ethMemStart = (date) => ({
  type: ETH_MEM_START,
  payload: date,
});
export const ethMemStop = (date) => ({
  type: ETH_MEM_STOP,
  payload: date,
});
export const responseTxn = (txn) => ({
  type: RESPONSE_TXN,
  payload: txn,
});
export const checkInDate = (date) => ({
  type: CHECK_IN_DATE,
  payload: date,
});
export const checkOutDate = (date) => ({
  type: CHECK_OUT_DATE,
  payload: date,
});
export const setStore = (key, value) => ({
  type: SET_STORE,
  payload: {key: key, value: value}
});
// export const locationChange = ({ pathname, search, hash }) => ({
//   type: LOCATION_CHANGE,
//   payload: {
//     pathname,
//     search,
//     // queries: parse(search),
//     hash,
//   },
// });