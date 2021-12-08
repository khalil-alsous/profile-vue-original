<template>
  <div id="app">
    <mainNavbar />
    <router-view />
  </div>
</template>

<script>
import mainNavbar from "@/components/mainNavbar.vue";

export default {
  components: {
    mainNavbar,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #fff;
  width: 78vw;
  margin: 10px 0 10px 20vw;
  border-radius: 5px;
}
@media (max-width: 767px) {
  #app {
    width: 100%;
    margin: 0;
  }
}
</style>
