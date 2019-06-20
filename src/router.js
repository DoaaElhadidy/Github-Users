import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Users from "./views/Users.vue";
import Content from "./components/Content.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/users",
      name: "users",
      component: Users,
      children: [
        {path: "",name: "content",component: Content},
        {path: ":id",name: "content",component: Content}
      ]
    },
    {
      path: "/users/:id",
      component: Content
    },
    {
      path: "**",
      redirect: "/"
    }
  ]
});