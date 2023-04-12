<template>
  <section class="movie-detail-visual ">
    <div class="detail-wrap">
      <div class="detail-wrap-top">
        <p>React API project</p>
        <h1>
          <span>YFLIX</span> <br />
          Used API Movie Site
        </h1>
        <div class="detail-text">
          <p>
            현재 많은 OTT서비스 중, 넷플릭스 디자인을 따와 프로젝트에 적용을
            해봤습니다. 메인화면은 최근 나온 영화로 나오게 하였으며, watch now를
            누르면 해당 작품의 디테일 내용이 나옵니다. 또한, 비슷한 장르의
            영화도 나오도록 하였습니다.
          </p>
          <div class="tools">
            <p>Tools</p>
            <fa :icon="['fab', 'html5']" />
            <fa :icon="['fab', 'css3-alt']" />
            <fa :icon="['fab', 'sass']" />
            <fa :icon="['fab', 'react']" />
          </div>
        </div>
        <router-link to="#">
          VIEW PROJECT <fa :icon="['fa', 'arrow-right']" class="arrow" />
        </router-link>
      </div>
      <img src="@/assets/img/React-APIproject-visual.png" alt="" />
      <!-- <img src="@/assets/img/Chair-Meister-main-page.png" alt="" /> -->
    </div>
  </section>

  <section class="clone">
    <div class="clone-wrap">
      <div class="clone-title">
        <h2>Website design</h2>
        <p>
          디자인 같은 경우는 검정색 바탕으로 포인트 색상으로 빨간색을
          사용하였습니다. 컨텐츠는 영화와 TV드라마를 선택하였으며, 컨텐츠들이
          한눈에 보일 수 있도록 작은사이즈로 나열하였습니다.
        </p>
      </div>
      <div class="clone-homepage">
        <img src="@/assets/img/React-APIproject-mainpage.png" alt="" />
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
        <img src="@/assets/img/React-reponsive-design-group.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectView",
  data(){
    return{
      id:2
    }
  },
};
</script>

<style lang="scss">
.bg-movie{
  background: linear-gradient(#4b0000, #000000);
  .detail-wrap{
    color:#fff;
  }
}


.movie-detail-visual {
  width: 100%;
  height: 100%;
  background: linear-gradient(#4b0000, #000000);
  h1 {
    width: 60%;
    font-size: 3rem;
    margin-top: 50px;
    color: whitesmoke;
    span {
      color: #d10000;
    }
  }
  .detail-wrap {
    width: 70%;
    height: 100%;
    margin: 0 auto;
    padding: 150px 0;
    .detail-wrap-top {
      padding: 0 100px;
      p {
        color: whitesmoke;
      }
      a {
        color: whitesmoke;
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
        color: whitesmoke;
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
  background-color: whitesmoke;
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
</style>
