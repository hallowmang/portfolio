<template>
  <section class="nyang-detail-visual">
    <div class="detail-wrap">
      <div class="detail-wrap-left">
        <p>NEXT.js project</p>
        <h1>
          Moitnyang <br />
          <span> Apps for Buying and Selling Used Stuff</span>
        </h1>
        <div class="detail-text">
          <p>
            CRUD를 활용한 프로젝트를 만들고 싶어, 팀원들과 상의한 결과, 중고
            거래 어플리케이션을 만들자는 의견이 나왔습니다. 까칠한 고양이를
            컨셉으로 디자인 하였습니다. 중고거래이기 때문에 화려한 디자인 보다는
            사용자 편의를 위해 명확하며, 한 화면에 기능을 넣으려 노력했습니다.
          </p>
          <div class="tools">
            <p>Tools</p>
            <div class="tools-icons">
              <fa :icon="['fab', 'react']" />
              <img src="@/assets/img/logos/NEXT.JS-logo.png" alt="" />
              <img
                src="@/assets/img/logos/Tailwind-CSS-logo2.png"
                alt=""
                class="tailwind"
              />
              <fa :icon="['fab', 'sass']" />
            </div>
          </div>
        </div>
        <router-link to="#">
          VIEW PROJECT <fa :icon="['fa', 'arrow-right']" class="arrow" />
        </router-link>
      </div>
      <img src="@/assets/img/Moitnyang-main-visual.png" alt="" />
      <!-- <img src="@/assets/img/Chair-Meister-main-page.png" alt="" /> -->
    </div>
  </section>

  <section class="responsive-design">
    <div class="responsive-wrap">
      <div class="responsive-title">
        <h2>design</h2>
        <p>
          많은 사용자가 스마트폰을 통한 브라우징을 선호한다는 점을 고려하여
          모바일 버전도 설계했습니다.
        </p>
      </div>
      <div class="responsive-homepage">
        <img src="@/assets/img/Moitnyang-design.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectView",

  data() {
    return {
      id: 0,
    };
  },
};
</script>

<style lang="scss">
.nyang-detail-visual {
  width: 100%;
  height: 100%;
  background-color: #f2f5fa;
  h1 {
    width: 27rem;
    font-size: 3rem;
    margin-top: 50px;
    span {
      font-size: 2.5rem;
    }
  }
  .detail-wrap {
    width: 70%;
    height: 100%;
    margin: 0 auto;
    padding: 150px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .detail-wrap-left {
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
        flex-direction: column;
        justify-content: space-between;
        > p {
          width: 38rem;
          margin-top: 30px;
          font-family: "Noto Sans KR", sans-serif;
        }
        .tools {
          margin: 30px 0;
          > p {
            font-size: 1.5rem;
            margin-bottom: 5px;
          }
          .tools-icons {
            display: flex;
            align-items: center;
            > img {
              width: 5rem;
              margin-top: 0;
              margin-right: 20px;
            }
            .tailwind {
              width: 4rem;
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
    }
    img {
      width: 25%;
      margin-top: 90px;
    }
  }
}

// .responsive-design {
//   width: 100%;
//   height: 100%;
//   background-color: #eaf0f4;
//   .responsive-wrap {
//     width: 70%;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin: 0 auto;
//     padding: 150px 0;
//     .responsive-title {
//       width: 45%;
//       margin: 0 auto;
//       h2 {
//         font-size: 2.5rem;
//         text-align: center;
//       }
//       p {
//         font-family: "Noto Sans KR", sans-serif;
//         width: 70%;
//         margin: 0 auto;
//       }
//     }
//     .responsive-homepage {
//       width: 90%;
//       margin-top: 100px;
//       img {
//         width: 100%;
//       }
//     }
//   }
// }
</style>
