import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export function createRouter(ssrContext, createDefaultRouter, routerOptions) {
  const options = routerOptions || createDefaultRouter(ssrContext).options;
  const hostname = ssrContext ? ssrContext.req.headers.host : location.host;
  // console.log(options.routes);
  return new Router({
    ...options,
    // routes: fixRoutes(options.routes, hostname),
    routes: options.routes
  });
}

function fixRoutes(defaultRoutes, hostname) {
  if (hostname.includes('admin')) return adminRoutes(defaultRoutes);
  return nubisoftRoutes(defaultRoutes);
}

function nubisoftRoutes(defaultRoutes) {
  return defaultRoutes.filter(r => r.name !== 'admin');
}

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

function adminRoutes(defaultRoutes) {
  // const route = defaultRoutes.find(r => r.name === 'admin');
  // debugger;
  // if(isEmpty(route)) return defaultRoutes.splice(defaultRoutes.findIndex(r => r.name == "index" && r.path == "/"));
  //return defaultRoutes
}

function admin1Routes(defaultRoutes) {
  const route = defaultRoutes.find(r => r.name === 'admin1');
  route.path = '/';
  return [route];
}
