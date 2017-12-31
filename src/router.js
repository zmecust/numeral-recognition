import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'
import MainPage from './MainPage.vue';

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: MainPage
    }
  ]
})

export default router;
