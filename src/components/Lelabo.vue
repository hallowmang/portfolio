<template>
  <section class="detail-visual">
    <div class="detail-wrap">
      <div class="detail-wrap-top">
        <p>Renewal</p>
        <h1>LE LABO Renewal disign</h1>
        <div class="detail-text">
          <p>
            르라보의 공식 홈페이지의 트렌드가 지난 느낌이었습니다. 연구실 컨셉의
            향수 브랜드이기 때문에 모던하면서, 깔끔하고, 정제된 느낌을 주고
            싶었습니다. 컬러를 흰색계열과, 검정색계열을 사용하여, 연구실 느낌을
            주고 싶었습니다.
          </p>
          <div class="tools">
            <p>Tools</p>
            <fa :icon="['fab', 'html5']" />
            <fa :icon="['fab', 'css3-alt']" />
            <fa :icon="['fab', 'sass']" />
            <fa :icon="['fab', 'js']" />
          </div>
        </div>
        <router-link to="#">
          VIEW PROJECT <fa :icon="['fa', 'arrow-right']" class="arrow" />
        </router-link>
      </div>
      <img src="@/assets/img/Lelabo-visual.jpg" alt="" />
      <!-- <img src="@/assets/img/Chair-Meister-main-page.png" alt="" /> -->
    </div>
  </section>

  <section class="clone">
    <div class="clone-wrap">
      <div class="clone-title">
        <h2>Website design</h2>
        <p>
          본래 페이지 같은 경우, 너무 단조롭고 옛날같은 디자인 이었습니다.
          그래서 사용자 인터페이스 디자인의 사용자 경험을 개선하기로
          결정했습니다.
        </p>
      </div>
      <div class="clone-homepage">
        <img src="@/assets/img/Le-labo.png" alt="" />
      </div>
    </div>
  </section>

  <section class="responsive-design">
    <div class="responsive-wrap">
      <div class="responsive-title">
        <h2>Responsive design</h2>
        <p>
          많은 사용자가 스마트폰을 통한 브라우징을 선호한다는 점을 고려하여
          모바일 버전도 설계했습니다.
        </p>
      </div>
      <div class="responsive-homepage">
        <img src="@/assets/img/LElabo-reponsive.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectView",
  data(){
    return{
      id:1
    }
  },
};
</script>

<style lang="scss">
.detail-visual {
  width: 100%;
  height: 100%;
  background-color: #f2f5fa;
  h1 {
    width: 45%;
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

.responsive-design {
  width: 100%;
  height: 100%;
  background-color: #eaf0f4;
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
</style>
