import Vue from 'vue'
import VueRouter from 'vue-router'
//vue-class-component使得组件能够以class类的方式进行书写
import Component from 'vue-class-component'
import HelloWorld from '../pages/HelloWorld.vue'

Vue.use(VueRouter);
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate' // for vue-router 2.2+
]);
const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
});
export default router
