import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import AddToCart from "./views/AddToCart.vue";
import Contact from "./views/Contact.vue";
import FAQ from "./views/FAQ.vue";
import Error from "./views/Error.vue";

Vue.use(Router);

export default new Router({
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
      path: "/cart",
      name: "AddToCart",
      component: AddToCart,
      meta: {
        title: "Cart - Wread | A JA Company"
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
      path: "*",
      component: Error,
      meta: {
        title: "Page Not Found"
      }
    }
  ]
});