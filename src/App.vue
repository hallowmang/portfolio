// HTML
<template>
  <div class="container">
    <Header />
    <router-view />
    <footer class="footer">
      Copyrights @ 2023 siyoung CHOI. All rights reserved.
    </footer>
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
  mounted() {
    window.addEventListener("scroll", this.handleScroll);

  },
  methods: {
    handleScroll() {

      
      //footer 최하단시 풋터 보이기
      // console.log(document.documentElement.scrollHeight - window.innerHeight - 100);
      const footer = document.querySelector(".footer");
      const scrollBottom = document.documentElement.scrollHeight - window.innerHeight - 100
      if (window.pageYOffset > scrollBottom ) {
        footer.classList.add("show");
      } else {
        footer.classList.remove("show");
      }
    },
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

//SCSS
<style lang="scss">
@import url("@/assets/scss/reset.scss");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Noto+Sans+KR:wght@300;400;500&display=swap");

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
  footer {
    width: 100%;
    display: none;
    position: fixed;
    text-align: center;
    bottom: 15px;
    transition: opacity 2s ease-in-out;
    opacity: 0;
    &.show {
      display: block;
      opacity: 1;
    }
  }
}

/* 모바일 CSS */
@media screen and (max-width: 767px) {

  .container {
  footer {
    display: none;
    position: fixed;
    bottom: 15px;
    transition: opacity 2s ease-in-out;
    opacity: 0;
    &.show {
      display: block;
      opacity: 1;
    }
  }
}
}

</style>
