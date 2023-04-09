<template>
  <div>
    <section class="visual-container">
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

    <section class="project-container">
      <h2>Project</h2>
      <div class="images">
        <router-link to="#" class="image">
          <img src="@/assets/img/chair.jpg" alt="" />
          <h3>Clone coding</h3>
          <p>체어마이스터</p>
        </router-link>
        <router-link to="#" class="image">
          <img src="@/assets/img/lelabo.jpg" alt="" />
          <h3>Renewal design</h3>
          <p>LELABO</p>
        </router-link>
        <router-link to="#" class="image">
          <img src="@/assets/img/poster2.jpg" alt="" />
          <h3>React API project</h3>
          <p>YFLIX</p>
        </router-link>
      </div>
    </section>

    <section class="about-container">
      <div class="about-wrap">
        <h2>About me</h2>
        <img src="@/assets/img/about-me.jpg" alt="" />
        <h3>최시영</h3>
        <p>안녕하세요. 프론트엔드 개발자를 목표로 하고 있는 최시영입니다.</p>

        <button class="learn-more">
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
export default {
  name: "IntroductionView",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.visual {
  background-color: black;
  h1 {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 100px 0;
    font-size: 12.5rem;
    font-weight: 500;
    color: whitesmoke;
    width: 100%;
    height: 100vh;
    top: 20px;
    line-height: 0.9;
    z-index: 9998;
    :nth-child(1) {
      margin-left: 20%;
    }
    :nth-child(2) {
      margin-left: 40%;
    }
    :nth-child(3) {
      margin-left: 60%;
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
    width: 100%;
    position: absolute;
    text-align: center;
    bottom: 43%;
    img {
      width: 14%;
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
  .images {
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .image {
      width: 32%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        object-fit: cover;
      }
      h3 {
        margin-top: 10px;
        font-size: 20px;
      }
      p {
        font-family: "Noto Sans KR", sans-serif;
        font-size: 18px;
        font-weight: 300;
      }
    }
  }
}

.about-container {
  width: 100%;
  height: 80vh;
  margin-top: 100px;
  background-color: #f4f0e8;
  .about-wrap {
    width: 70%;
    height: 70%;
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
        width: 200px;
        height: auto;
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
</style>
