import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
// import { routerReducer, routerMiddleware } from 'redux-json-router';
import { routerReducer } from 'reducers/routerReducer';
import { routerMiddleware } from './middleware'
// import { otherReducers, otherMiddlewares } from './other';

// add `routerReducer` to your root reducer
const makeRootReducer = () => combineReducers({
//   ...otherReducers,
  router: routerReducer
});

function configureStore(history, initialState = {}) {
  // add `routerMiddleware` to your middlewares, passing it the history singleton from the app's entry point
  const middlewares = [
    //   ...otherMiddlewares, 
      routerMiddleware(history)];
  
  const enhancers = [applyMiddleware(...middlewares)];
  
  return createStore(makeRootReducer(), initialState, compose(...enhancers));
}
export { configureStore };