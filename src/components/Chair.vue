<template>
  <section class="detail-visual">
    <div class="detail-wrap">
      <div class="detail-wrap-top">
        <p>Clone coding</p>
        <h1>Chair maister website</h1>
        <div class="detail-text">
          <p>
            체어마이스터 홈페이지를 클론 코딩을 해봤습니다. 이 홈페이지를 고른
            이유는 저의 성향과 맞아 떨어졌으며, 깔끔하고 모던한 느낌이
            들었습니다. 또한, 제 능력으로 구현이 가능할 수 있을 것 같아,
            선택하였습니다.
          </p>
          <div class="tools">
            <p>Tools</p>
            <fa :icon="['fab', 'html5']" />
            <fa :icon="['fab', 'css3-alt']" />
            <fa :icon="['fab', 'js']" />
          </div>
        </div>
        <router-link to="#">
          VIEW PROJECT <fa :icon="['fa', 'arrow-right']" class="arrow" />
        </router-link>
      </div>
      <img src="@/assets/img/chair.jpg" alt="" />
      <!-- <img src="@/assets/img/Chair-Meister-main-page.png" alt="" /> -->
    </div>
  </section>

  <section class="clone">
    <div class="clone-wrap">
      <div class="clone-title">
        <h2>Website design</h2>
        <p>최대한 본래의 사이트를 비슷하게 하려고 노력했습니다.</p>
      </div>
      <div class="clone-homepage">
        <img src="@/assets/img/Chair-Meister-main-page.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectView",
};
</script>

<style lang="scss">
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
    width: 70%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 150px 0;
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
</style>
