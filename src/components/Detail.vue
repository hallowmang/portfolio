<template>
  <div>
    <section class="detail-visual">
      <div class="detail-wrap">
        <div class="detail-wrap-top">
          <p>
            {{
              type == "app" ? data.app[id].subtitle : data.website[id].subtitle
            }}
          </p>
          <h1>
            {{ type == "app" ? data.app[id].title : data.website[id].title }}
          </h1>
          <div class="detail-text">
            <p>
              {{ type == "app" ? data.app[id].text : data.website[id].text }}
            </p>
            <div class="tools">
              <p>Tools</p>
              <fa
                v-for="v in data.website[id].tools"
                :key="v.id"
                :icon="['fab', v]"
              />
            </div>
          </div>
          <a
            :href="
              type === 'app' ? data.app[id].homepage : data.website[id].homepage
            "
          >
            {{ type == "app" ? data.app[id].url : data.website[id].url }}
            <fa :icon="['fa', 'arrow-right']" class="arrow" />
          </a>
        </div>
        <img :src="data.website[id].img" alt="" v-if="type != 'app'" />
        <!-- <img src="@/assets/img/Chair-Meister-main-page.png" alt="" /> -->
      </div>
    </section>

    <section class="clone" v-if="type != 'app'">
      <div class="clone-wrap">
        <div class="clone-title">
          <h2>{{ data.website[id].webDesign }}</h2>
          <p>{{ data.website[id].designText }}</p>
        </div>
        <div class="clone-homepage">
          <img :src="data.website[id].designImg" alt="" />
        </div>
      </div>
    </section>

    <section class="responsive-design" v-if="type != 'app'">
      <div class="responsive-wrap">
        <div class="responsive-title">
          <h2>{{ data.website[id].responsive }}</h2>
          <p>
            {{ data.website[id].responsiveText }}
          </p>
        </div>
        <div class="responsive-homepage">
          <img :src="data.website[id].responsiveImg" alt="" />
        </div>
      </div>
    </section>

    <section class="responsive-design" v-if="type == 'app'">
      <div class="responsive-wrap">
        <div class="responsive-title">
          <h2>{{ data.app[id].design }}</h2>
          <p>
            {{ data.app[id].designText }}
          </p>
        </div>
        <div class="responsive-homepage">
          <img :src="data.app[id].designImg" alt="" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import projData from "@/assets/data/projectData.json";

export default {
  name: "ProjectView",
  data() {
    return {
      data: projData,
      id: 0,
      type: "",
    };
  },
  mounted() {
    this.id = this.$route.query.id;
    this.type = this.$route.query.type;
    const bgMovie = document.querySelector(".detail-visual");
    const reponSive = document.querySelector(".responsive-design");

    if (this.id == 2) {
      bgMovie.classList.add("bg-movie");
    } else {
      bgMovie.classList.remove("bg-movie");
    }

    if (this.id == 0) {
      reponSive.style.display = "none";
    }

    window.scrollTo(0, 0); //페이지가 바뀌었을때 스크롤이 위에서 시작
  },
};
</script>

<style lang="scss">
.bg-movie {
  background: linear-gradient(#4b0000, #000000);
  .detail-wrap {
    color: whitesmoke;
  }
}

.detail-visual {
  width: 100%;
  height: 100%;
  background-color: #fffafa;
  h1 {
    width: 40%;
    font-size: 3rem;
    margin-top: 50px;
  }
  .detail-wrap {
    width: 70%;
    height: 100%;
    margin: 0 auto;
    padding: 150px 0;
    .detail-wrap-top {
      padding: 0 100px;
      a {
        &:hover .arrow {
          transform: translateX(5px);
        }
        .arrow {
          transition: transform 0.5s ease;
        }
      }
      .detail-text {
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          width: 50%;
          font-family: "Noto Sans KR", sans-serif;
        }
        .tools {
          margin: 30px 0;
          > p {
            font-size: 1.5rem;
            margin-bottom: 5px;
          }
          svg {
            font-size: 2.5rem;
            margin-right: 20px;
            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
    }
    img {
      width: 100%;
      margin-top: 90px;
    }
  }
}

.clone {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  .clone-wrap {
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 10% 0;
    .clone-title {
      width: 45%;
      margin: 100px 0;
      h2 {
        font-size: 2.5rem;
        text-align: center;
      }
      p {
        font-family: "Noto Sans KR", sans-serif;
        font-size: 1.25rem;
        text-align: center;
        width: 70%;
        margin: 0 auto;
        margin-top: 3%;
      }
    }
    .clone-homepage {
      width: 50%;
      img {
        width: 100%;
      }
    }
  }
}

.responsive-design {
  width: 100%;
  height: 100%;
  background-color: #f5eded;
  .responsive-wrap {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 150px 0;
    .responsive-title {
      width: 45%;
      margin: 0 auto;
      h2 {
        font-size: 2.5rem;
        text-align: center;
      }
      p {
        font-family: "Noto Sans KR", sans-serif;
        width: 70%;
        margin: 0 auto;
      }
    }
    .responsive-homepage {
      width: 90%;
      margin-top: 100px;
      img {
        width: 100%;
      }
    }
  }
}

/* -------------------------------------  반응형  ------------------------------------- */
/* 테블릿 CSS */
@media (min-width: 768px) and (max-width: 1023px) {
  .detail-visual {
    h1 {
      width: 50%;
      font-size: 3rem;
      margin-top: 15px;
    }
    .detail-wrap {
      width: 70%;
      height: 100%;
      margin: 0 auto;
      padding: 11% 0;
      .detail-wrap-top {
        padding: 0;
        a {
          &:hover .arrow {
            transform: translateX(5px);
          }
          .arrow {
            transition: transform 0.5s ease;
          }
        }
        .detail-text {
          display: flex;
          justify-content: space-between;
          align-items: center;
          p {
            width: 50%;
            font-size: 1.2rem;
          }
          .tools {
            margin: 30px 0;
            > p {
              font-size: 1.5rem;
              margin-bottom: 5px;
            }
            svg {
              font-size: 2.5rem;
              margin-right: 20px;
              &:last-child {
                margin-right: 0;
              }
            }
          }
        }
        > a {
          font-size: 1.1rem;
        }
      }
      img {
        width: 100%;
        margin-top: 10%;
      }
    }
  }

  .clone {
    .clone-wrap {
      width: 90%;
      padding: 20% 0;
      .clone-title {
        width: 45%;
        margin: 100px 0;
        h2 {
          font-size: 3rem;
        }
        p {
          font-family: "Noto Sans KR", sans-serif;
          font-size: 1.25rem;
          text-align: center;
          width: 90%;
          margin: 0 auto;
        }
      }
      .clone-homepage {
        width: 50%;
        img {
          width: 100%;
        }
      }
    }
  }

  .responsive-design {
    width: 100%;
    height: 100%;
    background-color: #f5eded;
    .responsive-wrap {
      width: 70%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      padding: 20% 0;
      .responsive-title {
        width: 60%;

        h2 {
          font-size: 3rem;
        }
        p {
          width: 88%;
          font-size: 1.25rem;
        }
      }
      .responsive-homepage {
        width: 100%;
        margin-top: 10%;
        img {
          width: 100%;
        }
      }
    }
  }
}

/* 모바일 CSS */
@media screen and (max-width: 767px) {
  .detail-visual {
    h1 {
      width: 100%;
      font-size: 2.7rem;
      margin-top: 15px;
    }
    .detail-wrap {
      width: 80%;
      height: 100%;
      padding: 11% 0;
      .detail-wrap-top {
        padding: 0;
        position: relative;
        p {
          font-size: 1rem;
        }
        h1 {
          font-size: 3rem;
        }
        a {
          &:hover .arrow {
            transform: translateX(5px);
          }
          .arrow {
            transition: transform 0.5s ease;
          }
        }
        .detail-text {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          margin-top: 5%;
          p {
            width: 100%;
            font-size: 1.5rem;
          }
          .tools {
            margin: 10% 0;
            > p {
              font-size: 2rem;
              margin-bottom: 5px;
            }
            svg {
              font-size: 3rem;
              margin-right: 20px;
              &:last-child {
                margin-right: 0;
              }
            }
          }
        }
        > a {
          font-size: 1.5rem;
          position: absolute;
          right: 0;
          bottom: 15%;
        }
      }
      img {
        width: 100%;
        margin-top: 10%;
      }
    }
  }

  .clone {
    .clone-wrap {
      flex-direction: column;
      align-items: center;
      padding: 10% 0;
      .clone-title {
        width: 90%;
        margin: 7% 0;
        h2 {
          font-size: 3rem;
        }
        p {
          width: 100%;
          font-size: 1.4rem;
          text-align: center;
          margin-top: 5%;
        }
      }
      .clone-homepage {
        width: 90%;
        img {
          width: 100%;
        }
      }
    }
  }

  .responsive-design {
    width: 100%;
    height: 100%;
    background-color: #f5eded;
    .responsive-wrap {
      width: 90%;
      padding: 20% 0;
      .responsive-title {
        width: 90%;
        h2 {
          font-size: 3rem;
        }
        p {
          width: 90%;
          font-size: 1.5rem;
        }
      }
      .responsive-homepage {
        width: 100%;
        margin-top: 10%;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
