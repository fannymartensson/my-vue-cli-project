<template>
  <div id="app">
    <Navigation
      :nav-links="navLinks"
      :image-path="require('./assets/logo1.svg')"
    />
    <router-view />

    <Footer :image-path="require('./assets/logo2.svg')" />
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default {
  components: {
    Navigation,
    Footer,
  },
  data: () => ({
    navLinks: [
      {
        text: "Home",
        path: "/",
      },
      {
        text: "Catalogue",
        path: "/catalogue",
      },
      {
        text: "JOIN US",
        path: "/join-us",
      },
    ],
  }),
};
</script>

<style lang="scss">
figure {
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
}
#app {
  font-family: Montserrat, sans-serif;
}
</style>