<template>
  <header>
    <div class="header-wrap">
      <router-link to="/">
        <h1>SIYOUNG</h1>
      </router-link>

      <nav>
        <div @click="scrollToIntro">Introduction</div>
        <div class="projText" @click="scrollToProject">Project</div>
        <div @click="scrollToAbout">About</div>
        <router-link to="/menulist">
          <fa :icon="['fas', 'bars']" />
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderView",

  mounted(){
    window.addEventListener("scroll",this.colorChangehandle);

    
  },
  methods: {
    scrollToIntro() {
      this.$router.push('/');
      setTimeout(()=>{
        const visualContainer = document.querySelector(".visual-container");
        visualContainer.scrollIntoView({ behavior: "smooth" });
      },200)
    },
    scrollToAbout() {
      this.$router.push('/');
      setTimeout(()=>{
        const aboutContainer = document.querySelector(".about-container");
        aboutContainer.scrollIntoView({ behavior: "smooth" });
      },200)
    },

    scrollToProject() {
      this.$router.push('/');
      setTimeout(()=>{
        const projectContainer = document.querySelector(".project-container");
        projectContainer.scrollIntoView({ behavior: "smooth" });
      },200)
    },

    colorChangehandle() {
      let name = this.$route.name
      const header = document.querySelector("header")
      const navAll = document.querySelectorAll("header nav div");
      
      const mainCon = document.querySelectorAll(".main-con");
      let pos = [];
      mainCon.forEach(v=>{
        pos.push({t:v.offsetTop, b:v.offsetTop + v.offsetHeight})
      })
     
      const navRemove = ()=>{
        navAll.forEach((menu)=>{
          menu.classList.remove('aaa');
        })
      }

      if(name != 'home'){
        header.classList.add("bg")
        navRemove();
        return;
      } 
      
      // const projectTop = document.querySelector(".project-container").offsetTop;
      // const projectHeigh = document.querySelector(".project-container").offsetHeigh;
      // console.log(projectTop,"aaa")
      // console.log(projectHeigh,"ddd")
      
      // const scrollBottom = document.documentElement.scrollHeight - window.innerHeight - 100
      if(window.pageYOffset > pos[0].b){
        header.classList.add("bg")
      }else{
        header.classList.remove("bg")
      }

      
      if (window.pageYOffset < pos[0].b) {
        navRemove();
        navAll[0].classList.add("aaa");
      }

      if (window.pageYOffset > pos[1].t  && window.pageYOffset < pos[1].b ) {
        navRemove();
        navAll[1].classList.add("aaa");
      }

      if (window.pageYOffset > pos[2].t  && window.pageYOffset < pos[2].b ) {
        navRemove();
        navAll[2].classList.add("aaa");
      }
    },
  },
};
</script>

<style lang="scss">
header {
  width: 100%;
  position: fixed;
  z-index: 9999;
  &.bg {
    background-color: rgba(0, 0, 0, 0.2);
  }
  .header-wrap {
    width: 70%;
    // left: 50%;
    // transform: translate(-50%, 0);
    margin: 0 auto;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      color: whitesmoke;
      font-size: 1.5rem;
      font-weight: 800;
    }
    nav {
      width: 30%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        font-weight: bold;
        color: whitesmoke;
        text-decoration: none;
        &.router-link-exact-active {
          background-color: antiquewhite;
        }
      }
      > div {
        text-align: center;
        cursor: pointer;
        color: whitesmoke;
        &.aaa {
          color: red;
        }
      }
    }
  }
}
</style>
