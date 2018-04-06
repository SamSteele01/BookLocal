export const routes = [
  {
    path: '/EthMemphis',
    load: () => Promise.resolve(require('components/RegisterMessage').default), // file loaded in the main code chunk
  },
  {
    path: '/',  
    load: () => Promise.resolve(require('components/RegisterMessage').default), 
  },
  {
    path: '/home',
    load: () => Promise.resolve(require('components/RegisterMessage').default),
  },
  {
    path: '/register',
    load: () => Promise.resolve(require('containers/ReserveContainer').default),
  },
  {
    path: '/checkIn',
    load: () => Promise.resolve(require('components/Access').default),
  },
  {
    path: '/checkOut',
    load: () => Promise.resolve(require('components/Settle').default),
  },
  {
    path: '/status',
    load: () => Promise.resolve(require('components/Status').default),
  },
  {
    path: '/about',
    load: () => Promise.resolve(require('containers/Prospectus').default),
  },
  {
    path: '/contact',
    load: () => Promise.resolve(require('components/Contact').default),
  },
//   {
//     path: '*',
//     page: './pages/Error',
//   },
]