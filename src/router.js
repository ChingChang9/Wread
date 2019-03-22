import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Store from "./views/Store.vue";
import Contact from "./views/Contact.vue";
import FAQ from "./views/FAQ.vue";
import Goal from "./views/Goal.vue";
import Error from "./views/Error.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        title: "Home - Wread | A JA Company"
      }
    },
    {
      path: "/about",
      name: "About",
      component: About,
      meta: {
        title: "About Us - Wread | A JA Company"
      }
    },
    {
      path: "/store",
      name: "Store",
      component: Store,
      meta: {
        title: "Store - Wread | A JA Company"
      }
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
      meta: {
        title: "Contact Us - Wread | A JA Company"
      }
    },
    {
      path: "/faq",
      name: "FAQ",
      component: FAQ,
      meta: {
        title: "FAQ - Wread | A JA Company"
      }
    },
    {
      path: "/goal",
      name: "Goal",
      component: Goal,
      meta: {
        title: "Goal - Wread | A JA Company"
      }
    },
    {
      path: "*",
      component: Error,
      meta: {
        title: "Page Not Found"
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Wread | A JA Company";
  next();
});
export default router;