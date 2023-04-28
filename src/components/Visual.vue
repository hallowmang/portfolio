<template>
  <div>
    <section class="visual-container main-con">
      <div class="visual">
        <h1>
          <span>HELLO, I'M </span>
          <span>SIYOUNG </span>
          <span>CHOI</span>
        </h1>

        <div class="text">
          <p>SIYOUNG CHOI</p>
          <p>PORTFOLIO</p>
          <p>EMAIL</p>
        </div>
        <div class="Images">
          <img src="@/assets/img/poster2.jpg" alt="poster" srcset="" />
        </div>
      </div>
    </section>

    <section class="project-container main-con">
      <h2>Project</h2>
      <div class="images">
        <swiper
          v-bind="swiperOptions"
          :pagination="true"
          :modules="modules"
          :slides-per-view="3"
          :space-between="50"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide>
            <router-link to="./Detail?id=0" class="image">
              <img src="@/assets/img/chair.jpg" alt="" />
              <h3>Clone coding</h3>
              <p>체어마이스터</p>
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to="./Detail?id=1" class="image">
              <img src="@/assets/img/lelabo.jpg" alt="" />
              <h3>Renewal design</h3>
              <p>LELABO</p>
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to="./Detail?id=2" class="image">
              <img src="@/assets/img/poster2.jpg" alt="" />
              <h3>React API project</h3>
              <p>YFLIX</p>
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to="./Detail?id=0&&type=app" class="image">
              <img src="@/assets/img/moitnyang-start.png" alt="" />
              <h3>Next.js project</h3>
              <p>Moitnyang</p>
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to="./Detail?id=3" class="image">
              <img src="@/assets/img/portfolio-mainpage.png" alt="" />
              <h3>Vue project</h3>
              <p>Portfolio</p>
            </router-link>
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <section class="about-container main-con">
      <div class="about-wrap">
        <h2>About me</h2>
        <img src="@/assets/img/about-me.jpg" alt="" />
        <h3>최시영</h3>
        <p>안녕하세요. 프론트엔드 개발자를 목표로 하고 있는 최시영입니다.</p>

        <button class="learn-more" @click="aboutMe">
          <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
          </span>
          <span class="button-text">Learn More</span>
        </button>
      </div>
    </section>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import "@/assets/scss/swiperStyle.scss";

// import required modules
import { Pagination } from "swiper";

export default {
  name: "IntroductionView",

  data() {
    return {
      swiperOptions: {
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      },
    };
  },

  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination],
    };
  },

  methods: {
    //about페이지로 이동
    aboutMe() {
      this.$router.push({ path: "about" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.visual {
  width: 100%;
  height: 100vh;
  background-color: black;
  h1 {
    position: relative;
    padding: 100px 0;
    font-size: 11rem;
    font-weight: 500;
    color: whitesmoke;
    width: 100%;
    top: 10%;
    line-height: 0.9;
    z-index: 9998;
    :nth-child(1) {
      padding-left: 18%;
    }
    :nth-child(2) {
      padding-left: 30%;
    }
    :nth-child(3) {
      padding-left: 50%;
    }
  }

  .text {
    position: absolute;
    bottom: 10px;
    color: whitesmoke;
    width: 95%;
    display: flex;
    justify-content: space-between;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .Images {
    width: 17%;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 100%;
    }
  }
}

.project-container {
  width: 70%;
  height: 100vh;
  margin: 0 auto;
  h2 {
    padding-top: 100px;
    margin-bottom: 50px;
    font-size: 3rem;
    text-align: center;
  }
}

.about-container {
  width: 100%;
  height: 100%;
  margin-top: 100px;
  background-color: #f4f0e8;
  .about-wrap {
    width: 100%;
    margin: 0 auto;
    padding: 150px 0;
    text-align: center;
    > h2 {
      margin-bottom: 50px;
      font-size: 3rem;
      text-align: center;
    }
    img {
      width: 20%;
      border-radius: 50%;
    }
    h3 {
      margin: 20px 0 10px 0;
      font-size: 2.5rem;
      font-family: "Noto Sans KR", sans-serif;
    }
    p {
      width: 20%;
      margin: 0 auto;
      font-size: 1.2rem;
      font-weight: 300;
      font-family: "Noto Sans KR", sans-serif;
    }
    button {
      position: relative;
      display: inline-block;
      cursor: pointer;
      outline: none;
      border: 0;
      vertical-align: middle;
      text-decoration: none;
      background: transparent;
      padding: 0;
      font-size: inherit;
      font-family: inherit;
      margin-top: 30px;

      &.learn-more {
        width: 15%;
        height: auto;
        font-size: 1.1rem;
      }
      .circle {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        position: relative;
        display: block;
        margin: 0;
        width: 3rem;
        height: 3rem;
        background: #2c3e50;
        border-radius: 1.625rem;

        .icon {
          transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto;
          background: #fff;

          &.arrow {
            transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            top: 0.2rem;
            left: 0.625rem;
            width: 1.125rem;
            height: 0.125rem;
            background: none;

            &::before {
              position: absolute;
              content: "";
              top: -0.31rem;
              right: 0.0625rem;
              width: 0.625rem;
              height: 0.625rem;
              border-top: 0.125rem solid #fff;
              border-right: 0.125rem solid #fff;
              transform: rotate(45deg);
            }
          }
        }
      }

      .button-text {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 0.75rem 0;
        margin: 0 0 0 1.85rem;
        color: #282936;
        font-weight: 700;
        line-height: 1.6;
        text-align: center;
        text-transform: uppercase;
      }

      &:hover {
        .circle {
          width: 100%;

          .icon.arrow {
            background: #fff;
            transform: translate(1rem, 0);
          }
        }

        .button-text {
          color: #fff;
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

  .visual {
    height: 100vh;
    h1 {
      font-size: 12rem;
      top: 34%;
      :nth-child(1) {
        padding-left: 7%;
      }
      :nth-child(2) {
        padding-left: 22%;
      }
      :nth-child(3) {
        padding-left: 50%;
      }
    }

    .text {
      bottom: 3%;
      font-size: 1.5rem;
    }
    .Images {
      width: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      img {
        width: 100%;
      }
    }
  }

  .project-container {
    width: 90%;
    height: 100vh;
    margin: 0 auto;
    h2 {
      padding-top: 100px;
      margin-bottom: 50px;
      font-size: 4rem;
      text-align: center;
    }
    // .images {
    //   width: 100%;
    //   height: auto;
    //   display: flex;
    //   justify-content: space-between;
    //   align-items: center;
    //   .image {
    //     width: 32%;
    //     height: 100%;
    //     img {
    //       width: 100%;
    //       height: 50vh;
    //       border-radius: 5px;
    //       object-fit: cover;
    //     }
    //     h3 {
    //       margin-top: 10px;
    //       font-size: 2rem;
    //     }
    //     p {
    //       font-size: 1.8rem;
    //     }
    //   }
    // }
  }

  .about-container {
    margin-top: 0;
    .about-wrap {
      width: 100%;
      margin: 0 auto;
      padding: 10% 0;
      text-align: center;
      > h2 {
        font-size: 4rem;
      }
      img {
        width: 28%;
      }
      h3 {
        font-size: 3rem;
      }
      p {
        width: 30%;
        font-size: 2rem;
      }
      button {
        &.learn-more {
          width: 18%;
        }
        .circle {
          transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
          position: relative;
          display: block;
          margin: 0;
          width: 3rem;
          height: 3rem;
          background: #2c3e50;
          border-radius: 1.625rem;

          .icon {
            transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto;
            background: #fff;

            &.arrow {
              transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
              left: 0.625rem;
              width: 1.125rem;
              height: 0.125rem;
              background: none;

              &::before {
                position: absolute;
                content: "";
                top: -0.31rem;
                right: 0.0625rem;
                width: 0.625rem;
                height: 0.625rem;
                border-top: 0.125rem solid #fff;
                border-right: 0.125rem solid #fff;
                transform: rotate(45deg);
              }
            }
          }
        }

        .button-text {
          transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 0.75rem 0;
          margin: 0 0 0 1.85rem;
          color: #282936;
          font-weight: 700;
          line-height: 1.6;
          text-align: center;
          text-transform: uppercase;
        }
      }
    }
  }
}

/* 모바일 CSS */
@media screen and (max-width: 767px) {
  .visual {
    height: 100vh;
    h1 {
      font-size: 7.5rem;
      top: 40%;
      :nth-child(1) {
        padding-left: 4%;
      }
      :nth-child(2) {
        padding-left: 18%;
      }
      :nth-child(3) {
        padding-left: 50%;
      }
    }

    .text {
      bottom: 2%;
      font-size: 1.2rem;
      :first-child {
        display: none;
      }
    }
    .Images {
      width: 60%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      img {
        width: 100%;
      }
    }
  }

  .project-container {
    width: 80%;
    height: 100vh;
    margin: 0 auto;
    h2 {
      padding-top: 25%;
      margin-bottom: 50px;
      font-size: 4rem;
      text-align: center;
    }
    // .images {
    //   overflow: hidden;
    //   .image {
    //     width: 100%;
    //     flex-shrink: 0;
    //     img {
    //       width: 100%;
    //       height: 70vh;
    //     }
    //     h3 {
    //       margin-top: 10px;
    //       font-size: 2.3rem;
    //     }
    //     p {
    //       font-size: 2rem;
    //     }
    //   }
    // }
  }

  .about-container {
    width: 100%;
    height: 100vh;
    margin-top: 20%;
    .about-wrap {
      width: 100%;
      margin: 0 auto;
      padding: 35% 0;
      > h2 {
        margin-bottom: 50px;
        font-size: 4rem;
        text-align: center;
      }
      img {
        width: 40%;
      }
      h3 {
        margin: 20px 0 10px 0;
      }
      p {
        width: 54%;
        font-size: 1.8rem;
      }
      button {
        position: relative;
        display: inline-block;
        cursor: pointer;
        outline: none;
        border: 0;
        vertical-align: middle;
        text-decoration: none;
        background: transparent;
        padding: 0;
        font-size: inherit;
        font-family: inherit;
        margin-top: 30px;

        &.learn-more {
          width: 35%;
          height: auto;
          font-size: 1.2rem;
        }
        .circle {
          transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
          position: relative;
          display: block;
          margin: 0;
          width: 3rem;
          height: 3rem;
          background: #2c3e50;
          border-radius: 1.625rem;

          .icon {
            transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto;
            background: #fff;

            &.arrow {
              transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
              left: 0.625rem;
              width: 1.125rem;
              height: 0.125rem;
              background: none;

              &::before {
                position: absolute;
                content: "";
                top: -0.31rem;
                right: 0.0625rem;
                width: 0.625rem;
                height: 0.625rem;
                border-top: 0.125rem solid #fff;
                border-right: 0.125rem solid #fff;
                transform: rotate(45deg);
              }
            }
          }
        }

        .button-text {
          transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 0.75rem 0;
          margin: 0 0 0 1.85rem;
          color: #282936;
          font-weight: 700;
          line-height: 1.6;
          text-align: center;
          text-transform: uppercase;
        }

        &:hover {
          .circle {
            width: 100%;

            .icon.arrow {
              background: #fff;
              transform: translate(1rem, 0);
            }
          }

          .button-text {
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
