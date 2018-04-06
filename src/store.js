import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as web3Redux } from 'web3-redux';
// import { routerReducer, routerMiddleware } from 'redux-json-router';
import { routerReducer } from 'reducers/routerReducer';
import { dataReducer } from 'reducers/dataReducer';
import { routerMiddleware } from './middleware'
// import { otherReducers, otherMiddlewares } from './other';

// add `routerReducer` to your root reducer
const makeRootReducer = () => combineReducers({
  web3: web3Redux,
  data:  dataReducer,
  router: routerReducer
});

function configureStore(history) {
  // add `routerMiddleware` to your middlewares, passing it the history singleton from the app's entry point
  const middlewares = [
    //   ...otherMiddlewares, 
      routerMiddleware(history)];
  
  const enhancers = [applyMiddleware(...middlewares)];
  
  return createStore(makeRootReducer(), composeWithDevTools(...enhancers));
}
export { configureStore };