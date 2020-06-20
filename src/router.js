import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "Home" */"./views/Home.vue");
const Add = () => import(/* webpackChunkName: "Add" */"./views/Add.vue");
const Edit = () => import(/* webpackChunkName: "Edit" */"./views/Edit.vue");

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/add',
      component: Add
    },
    {
      path: '/edit/:id',
      component: Edit
    }
  ]
});