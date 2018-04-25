import UniversalRouter from 'universal-router'
import routes from './routes'
import generateUrls from 'universal-router/generateUrls'

const router = new UniversalRouter(routes, {
  resolveRoute(context, params) {
    if (typeof context.route.load === 'function') {
      return context.route.load().then(action => action.default(context, params))
    }
    if (typeof context.route.action === 'function') {
      return context.route.action(context, params)
    }
    return undefined
  },
})

export const generateUrl = generateUrls(router, {
  encode: x => x,
  stringifyQueryParams(params) {
    return Object.keys(params).map(key => `${key}=${params[key]}`).join('&')
  },
})

export default router
