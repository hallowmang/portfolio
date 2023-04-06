// HTML
<template>
  <div class="container">
    <Header/>
    <router-view />
    <footer>Copyrights @ 2023 siyoung CHOI. All rights reserved.</footer>
  </div>
</template>

//SCRIPT
<script>
import Header from "./components/Header.vue";

export default {
  name: "HeaderView",
  components: {
    Header,
  },
};
</script>

//SCSS
<style lang="scss">
@import url("@/assets/scss/reset.scss");
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Noto+Sans+KR:wght@300;400;500&display=swap');

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.container {
  width: 100%;
  background-color: #fcfbf9;
  height: 100%;
  footer{
    position: fixed;
    bottom: 15px;
    left: 50%;
    translate: -50% 0;
  }
}
</style>
