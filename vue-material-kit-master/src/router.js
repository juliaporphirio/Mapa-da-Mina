import Vue from "vue";
import Router from "vue-router";
import MapaMina from "./views/MainMapaMina.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import AutSpotify from "./layout/AutenticacaoSpotify.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "mapamina",
      components: { default: MapaMina, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/autenticaospotify",
      name: "autspotify",
      components: { default: AutSpotify, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
