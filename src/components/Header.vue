<template>
  <header>
    <div class="header-wrap">
      <router-link to="/">
        <h1>SIYOUNG</h1>
      </router-link>
      <nav>
        <div class="bullets">
          <div @click="() => scrollToIntro('.visual-container')"></div>
          <div @click="() => scrollToIntro('.project-container')"></div>
          <div @click="() => scrollToIntro('.about-container')"></div>
        </div>
        <button
          @click="
            toggleMenu();
            back();
          "
          :class="{ 'menu-trigger': true, 'active-1': $store.state.isActive }"
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
import { mapMutations } from "vuex";

export default {
  name: "HeaderView",
  setup() {
    const router = useRouter();
    const menuListMove = () => {
      router.push({
        path: "/menulist",
      });
    };

    return {
      menuListMove,
    };
  },
  data() {
    return {
      isActive: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.colorChangehandle);
  },
  methods: {
    ...mapMutations(["toggleMenu"]),
    scrollToIntro(ele) {
      console.log(ele);
      this.$router.push("/");
      setTimeout(() => {
        const visualContainer = document.querySelector(ele);
        visualContainer.scrollIntoView({ behavior: "smooth" });
        this.isActive = false;
      }, 200);
    },
    colorChangehandle() {
      let name = this.$route.name;
      const header = document.querySelector("header");
      const navAll = document.querySelectorAll("header nav .bullets div");
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

      if (window.pageYOffset > pos[0].b) {
        header.classList.add("bg");
      } else {
        header.classList.remove("bg");
      }

      if (
        window.pageYOffset > pos[0].t * 0.8 &&
        window.pageYOffset < pos[0].b
      ) {
        navRemove();
        navAll[0].classList.add("aaa");
      }
      if (
        window.pageYOffset > pos[1].t * 0.8 &&
        window.pageYOffset < pos[1].b
      ) {
        navRemove();
        navAll[1].classList.add("aaa");
      }
      if (
        window.pageYOffset > pos[2].t * 0.8 &&
        window.pageYOffset < pos[2].b
      ) {
        navRemove();
        navAll[2].classList.add("aaa");
      }
    },
    back() {
      if (this.$store.state.isActive) {
        this.$router.push("/menulist");
      } else {
        this.$router.push("/");
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
      font-size: 1rem;
      .menu-trigger {
        background-color: transparent;
        display: block;
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
      .bullets {
        position: fixed;
        top: 50%;
        right: 65px;
        width: 13px;
        height: 74px;
        > :nth-child(n) {
          width: 8px;
          height: 8px;
          border-radius: 100%;
          cursor: pointer;
          background-color: rgba(128, 128, 128, 0.658);
          &.aaa {
            background-color: red;
          }
        }
        > :nth-child(2) {
          margin-top: 20px;
          cursor: pointer;

          &.aaa {
            background-color: red;
          }
        }
        > :nth-child(3) {
          margin-top: 20px;
          cursor: pointer;

          &.aaa {
            background-color: red;
          }
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
        font-size: 1.2rem;
        .menu-trigger {
          width: 20px;
          height: 10px;

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
        .bullets {
          display: none;
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
        > div {
          display: none;
        }
      }
    }
  }
}
</style>
