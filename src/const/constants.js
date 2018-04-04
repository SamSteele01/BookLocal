export const PUSH = 'ROUTER/PUSH';
export const REPLACE = 'ROUTER/REPLACE';
export const GO = 'ROUTER/GO';
export const GO_BACK = 'ROUTER/GO_BACK';
export const GO_FORWARD = 'ROUTER/GO_FORWARD';
export const LOCATION_CHANGE = 'ROUTER/LOCATION_CHANGE';

export const routes = [
//   {
//     path: '/',
//     load: () => Promise.resolve(require('./components/Home').default), // file loaded in the main code chunk
//   },
  {
    path: '/',  
    load: () => Promise.resolve(require('components/Home').default), 
  },
  {
    path: '/home',
    load: () => Promise.resolve(require('components/Home').default),
  },
  {
    path: '/about',
    load: () => Promise.resolve(require('containers/Prospectus').default),
    // page: './containers/Prospectus',
  },
  {
    path: '/register',
    load: () => Promise.resolve(require('containers/App').default),
    // page: './containers/App'
  },
//   {
//     path: '*',
//     page: './pages/Error',
//   },
]