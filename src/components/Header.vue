<template>
  <header>
    <div class="header-wrap">
      <router-link to="/">
        <h1>SIYOUNG</h1>
      </router-link>

      <nav>
        <div @click="scrollToIntro">Introduction</div>
        <div @click="scrollToProject">Project</div>
        <div @click="scrollToAbout">About</div>
        <!-- <router-link to="/menulist">
          <fa :icon="['fas', 'bars']" />
        </router-link> -->
        <button
          @click="toggleMenu(), menuListMove(), back()"
          :class="{ 'menu-trigger': true, 'active-1': isActive }"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "HeaderView",

  setup() {
    const router = useRouter();
    const menuListMove = () => {
      router.push({
        path: "/menulist",
      });
    };
    const back = () => {
      router.back;
    };
    return {
      menuListMove,
      back,
    };
  },

  data() {
    return {
      isActive: false,
    };
  },

  //isActive값을 false로 초기화 이후 next() 함수를 호출하여 다음 단계로 이동
  beforeRouteLeave(to, from, next) {
    this.isActive = false;
    next();
  },

  mounted() {
    window.addEventListener("scroll", this.colorChangehandle);
  },

  methods: {
    scrollToIntro() {
      this.$router.push("/");
      setTimeout(() => {
        const visualContainer = document.querySelector(".visual-container");
        visualContainer.scrollIntoView({ behavior: "smooth" });
      }, 200);
    },

    scrollToAbout() {
      this.$router.push("/");
      setTimeout(() => {
        const aboutContainer = document.querySelector(".about-container");
        aboutContainer.scrollIntoView({ behavior: "smooth" });
      }, 200);
    },

    scrollToProject() {
      this.$router.push("/");
      setTimeout(() => {
        const projectContainer = document.querySelector(".project-container");
        projectContainer.scrollIntoView({ behavior: "smooth" });
      }, 200);
    },

    colorChangehandle() {
      let name = this.$route.name;
      const header = document.querySelector("header");
      const navAll = document.querySelectorAll("header nav div");

      const mainCon = document.querySelectorAll(".main-con");
      let pos = [];
      mainCon.forEach((v) => {
        pos.push({ t: v.offsetTop, b: v.offsetTop + v.offsetHeight });
      });

      const navRemove = () => {
        navAll.forEach((menu) => {
          menu.classList.remove("aaa");
        });
      };

      if (name != "home") {
        header.classList.add("bg");
        navRemove();
        return;
      }

      // const projectTop = document.querySelector(".project-container").offsetTop;
      // const projectHeigh = document.querySelector(".project-container").offsetHeigh;
      // console.log(projectTop,"aaa")
      // console.log(projectHeigh,"ddd")

      // const scrollBottom = document.documentElement.scrollHeight - window.innerHeight - 100
      if (window.pageYOffset > pos[0].b) {
        header.classList.add("bg");
      } else {
        header.classList.remove("bg");
      }

      if (window.pageYOffset < pos[0].b) {
        navRemove();
        navAll[0].classList.add("aaa");
      }

      if (window.pageYOffset > pos[1].t && window.pageYOffset < pos[1].b) {
        navRemove();
        navAll[1].classList.add("aaa");
      }

      if (window.pageYOffset > pos[2].t && window.pageYOffset < pos[2].b) {
        navRemove();
        navAll[2].classList.add("aaa");
      }
    },

    toggleMenu() {
      this.isActive = !this.isActive;
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
    margin: 0 auto;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      color: whitesmoke;
      font-size: 2rem;
      font-weight: 800;
    }
    nav {
      width: 30%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1rem;
      // a {
      //   font-weight: bold;
      //   color: whitesmoke;
      //   text-decoration: none;
      //   &.router-link-exact-active {
      //     background-color: antiquewhite;
      //   }
      // }
      .menu-trigger {
        background-color: transparent;
        display: inline-block;
        box-sizing: border-box;
        position: relative;
        width: 27px;
        height: 16px;
        border: none;
        cursor: pointer;
        span {
          display: inline-block;
          position: absolute;
          transition: all 0.6s ease;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: #fff;
          border-radius: 4px;
        }

        span:nth-of-type(1) {
          top: 0;
        }

        span:nth-of-type(2) {
          top: 9px;
        }

        span:nth-of-type(3) {
          bottom: -3px;
        }

        &.active-1 {
          span:nth-of-type(1) {
            transform: translateY(7px) rotate(-40deg);
          }

          span:nth-of-type(2) {
            opacity: 0;
          }

          span:nth-of-type(3) {
            transform: translateY(-11px) rotate(40deg);
          }
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

/* -------------------------------------  반응형  ------------------------------------- */
/* 테블릿 CSS */

@media screen and (min-width: 768px) and (max-width: 1023px) {
  html {
    font-size: 10px;
  }

  header {
    .header-wrap {
      width: 80%;
      padding: 2% 0;
      h1 {
        font-size: 1.5rem;
      }
      nav {
        width: 40%;
        font-size: 1.2rem;
        .menu-trigger {
        width: 20px;
        height: 10px;
        
        span {
          
        }

        

        span:nth-of-type(2) {
          top: 6px;
        }

        

        &.active-1 {
          span:nth-of-type(1) {
            transform: translateY(5px) rotate(-40deg);
          }
          
          span:nth-of-type(3) {
            transform: translateY(-7px) rotate(40deg);
          }
        }
      }
        a {
        }
        > div {
        }
      }
    }
  }
}

/* 모바일 CSS */
@media screen and (max-width: 767px) {
  html {
    font-size: 8px;
  }

  header {
    &.bg {
    }
    .header-wrap {
      width: 80%;
      padding: 2% 0;
      h1 {
        font-size: 1.8rem;
      }
      nav {
        font-size: 1.8rem;
        justify-content: flex-end;
        .menu-trigger {
        
        width: 20px;
        height: 10px;
        
        span {
          
        }

        span:nth-of-type(1) {
          top: 0;
        }

        span:nth-of-type(2) {
          top: 6px;
        }

        span:nth-of-type(3) {
          bottom: -3px;
        }

        &.active-1 {
          span:nth-of-type(1) {
            transform: translateY(5px) rotate(-40deg);
          }

          span:nth-of-type(2) {
            opacity: 0;
          }

          span:nth-of-type(3) {
            transform: translateY(-7px) rotate(40deg);
          }
        }
      }
        a {
        }
        > div {
          display: none;
        }
      }
    }
  }
}
</style>
