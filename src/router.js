import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Home from '../src/pages/Home';

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
      props: {
        propsRoute: 0
      }
    }, {
      name: 'mega-sena',
      path: '/mega-sena',
      component: Home,
      props: {
        propsRoute: 0
      }
    }, {
      name: 'quina',
      path: '/quina',
      component: Home,
      props: {
        propsRoute: 1
      }
    }, { 
      name: 'lotofacil',
      path: '/lotofacil',
      component: Home,
      props: {
        propsRoute: 2
      }
    }, { 
      name: 'lotomania',
      path: '/lotomania',
      component: Home,
      props: {
        propsRoute: 3
      }
    }, { 
      name: 'timemania',
      path: '/timemania',
      component: Home,
      props: {
        propsRoute: 4
      }
    }, { 
      name: 'dia-de-sorte',
      path: '/dia-de-sorte',
      component: Home,
      props: {
        propsRoute: 5
      }
    },
  ]
});

export default router;