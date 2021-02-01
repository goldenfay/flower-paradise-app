<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import "./assets/js/main.js";
// boot();
export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
@import "./assets/css/vendor/bootstrap.min.css";
/* @import "./assets/css/vendor/font.awesome.min.css"; */
@import "./assets/css/vendor/linearicons.min.css";
@import "./assets/css/plugins/swiper-bundle.min.css";
@import "./assets/css/plugins/animate.min.css";
@import "./assets/css/plugins/jquery-ui.min.css";
@import "./assets/css/plugins/nice-select.min.css";
@import "./assets/css/plugins/magnific-popup.css";
@import "./assets/css/style.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
