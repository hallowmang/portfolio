<template>
  <div class="about">
    <section class="profile">
      <div class="info">
        <h1>
          <span>HELLO!</span><br />
          최시영입니다.<br />
          반갑습니다.
        </h1>
        <p>E-mail: siyoung013@gmail.com</p>
        <div class="wrap">
          <p>TECH I ENJOY</p>
          <div class="icons">
            <fa :icon="['fab', 'html5']" />
            <fa :icon="['fab', 'css3-alt']" />
            <fa :icon="['fab', 'js']" />
            <fa :icon="['fab', 'sass']" />
            <fa :icon="['fab', 'figma']" />
            <fa :icon="['fab', 'react']" />
            <fa :icon="['fab', 'vuejs']" />
          </div>
        </div>
      </div>
      <img src="@/assets/img/profile.jpg" alt="" />
    </section>

    <section class="who">
      <div class="who-text">
        <h2>Who Am I?</h2>
        <p>
          안녕하세요. 최시영입니다. 현재, 프론트엔드를 목표로 하고 있습니다.
          <br />
        </p>
        <p>
          저는 인간관계에서 첫인상이 중요하다고 생각합니다. 첫인상으로 그 사람을
          판단 할 가능성이 높기 때문입니다. 홈페이지를 들어갔을 때 사용자의
          시선을 사로잡는 화면을 구현하는 프론트엔드를 꿈꾸게 되었습니다.
        </p>
        <p>
          대학생이었을때, 복수전공으로 일어일문을 전공하였습니다. 일본에 대해 더
          알고 싶어 워킹홀리데이와 어학연수를 갔습니다. 해외경험은 처음이었기
          때문에 크게 걱정하였습니다. 하지만, 걱정만 하고 실행하지 않으면
          발전하지 못하므로, 미래를 생각하여 일본으로 향하였습니다. 실제
          일본인이 말하는 것을 듣는 순간, 일본어가 전혀 들리지 않았습니다. 그
          때문이었는지, 제 자신에게 실망을 하였습니다.
        </p>
        <p>
          아무런 성과없이 한국으로 돌아가고 싶지 않았기 때문에 카페에 가서
          일본인이 말하는 것을 듣거나, 일본인만 있는 곳에 아르바이트를
          시작했습니다. 그 결과 점점 일본어도 늘어 일본어학교 선생님들에게
          인정받게 됐습니다.
        </p>
        <p>
          개발자는 사용자에게 더 나은 환경을 제공하기 위해 끊임없이 오류를
          해결해 나가기 위한 끈기가 있어야 한다고 생각합니다. 저의 장점인 끈기를
          바탕으로 사용자에게 만족을 줄 수 있는 서비스 구현을 위해 힘쓰고
          싶습니다.
        </p>
      </div>
    </section>

    <section class="lang">
      <h2>Tech I Enjoy</h2>
      <div class="lang-wrap">
        <div class="lang-detail">
          <span class="icon-wrap">
            <fa :icon="['fab', 'html5']" />
          </span>
          <p>
            웹접근성, 표준성을 준수하며 시멘틱 태그를 이용해 마크업 할 수
            있습니다.
          </p>
        </div>
        <div class="lang-detail">
          <span class="icon-wrap">
            <fa :icon="['fab', 'css3-alt']" />
          </span>
          <p>position, display를 사용하여 반응형 웹을 적용할 수 있습니다.</p>
        </div>
        <div class="lang-detail">
          <span class="icon-wrap">
            <fa :icon="['fab', 'js']" />
          </span>
          <p>반복문, 함수를 사용하여 다양한 상황에 적용 할 수 있습니다.</p>
        </div>
        <div class="lang-detail">
          <span class="icon-wrap">
            <fa :icon="['fab', 'sass']" />
          </span>
          <p>scss의 문법을 잘 활용하여 스타일 작업을 원활히 할 수 있습니다.</p>
        </div>
        <div class="lang-detail">
          <span class="icon-wrap">
            <fa :icon="['fab', 'figma']" />
          </span>
          <p>
            스토리보드 작성, 데스코톱, 모바일 디자인시안을 작업 할 수 있습니다.
          </p>
        </div>
        <div class="lang-detail">
          <span class="icon-wrap">
            <fa :icon="['fab', 'react']" />
          </span>
          <p>
            React 구조와 여러가지 hook들을 사용하여 범용적이고, 컴포넌트를
            재사용을 고려합니다.
          </p>
        </div>
        <div class="lang-detail">
          <span class="icon-wrap">
            <fa :icon="['fab', 'vuejs']" />
          </span>
          <p>
            기초적인 문법을 사용하며, 이해할 수 있으며 계속 배워가고 있습니다.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {

  mounted(){
    window.scrollTo(0, 0); //페이지가 바뀌었을때 스크롤이 위에서 시작
  }
};
</script>

<style lang="scss">
.about {
  width: 100%;
  height: 100%;
  .profile {
    width: 70%;
    height: 100%;
    padding: 150px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    .info {
      margin-right: 200px;
      h1 {
        font-size: 3.5rem;
        span {
          color: #fd5454;
        }
      }
      > p {
        margin: 20px 0;
      }
      .wrap {
        .icons {
          margin-top: 2%;
          svg {
            margin-right: 20px;
            font-size: 3rem;
          }
        }
      }
    }
    img {
      width: 35%;
      border-radius: 5px;
    }
  }

  .who {
    width: 100%;
    background-color: #f7edff;
    .who-text {
      width: 50%;
      // height: 100%;
      padding: 150px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      // align-items: center;
      margin: 0 auto;
      h2 {
        font-size: 3rem;
        margin-bottom: 50px;
      }
      p {
        font-family: "Noto Sans KR", sans-serif;
        font-size: 1.1rem;
        &:nth-child(3) {
          margin-top: 50px;
        }
        &:nth-child(4) {
          margin-top: 50px;
        }
        &:nth-child(5) {
          margin-top: 50px;
        }
      }
    }
  }

  .lang {
    width: 100%;
    padding: 150px 0;
    h2 {
      text-align: center;
      font-size: 3rem;
      margin-bottom: 50px;
    }
    .lang-wrap {
      width: 50%;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      .lang-detail {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 50px;
        &:last-child {
          margin-bottom: 0;
        }
        .icon-wrap {
          width: 50px;
          height: auto;
          margin-right: 70px;
          svg {
            font-size: 65px;
          }
        }
        p {
          font-family: "Noto Sans KR", sans-serif;
          font-size: 1.3rem;
        }
      }
    }
  }
}

/* 테블릿 CSS */
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .about {
    width: 100%;
    .profile {
      width: 80%;
      .info {
        width: 100%;
        margin-right: 20%;
        h1 {
          font-size: 3.5rem;
          span {
            color: #fd5454;
          }
        }
        > p {
          font-size: 1.3rem;
          margin: 20px 0;
        }
        .wrap {
          p {
            font-size: 1.3rem;
            margin-bottom: 5px;
          }

          .icons {
            svg {
              margin-right: 5%;
              font-size: 2.5rem;
            }
          }
        }
      }
      img {
        width: 40%;
      }
    }

    .who {
      width: 100%;
      .who-text {
        width: 68%;
        padding: 15% 0;
        h2 {
          font-size: 4rem;
        }
        p {
          font-size: 1.5rem;
        }
      }
    }

    .lang {
      width: 100%;
      padding: 15% 0;
      h2 {
        font-size: 4rem;
      }
      .lang-wrap {
        width: 67%;
        .lang-detail {
          &:last-child {
            margin-bottom: 0;
          }
          .icon-wrap {
            width: 50px;
            height: auto;
            margin-right: 70px;
            svg {
              font-size: 6rem;
            }
          }
          p {
            font-size: 1.3rem;
          }
        }
      }
    }
  }
}

/* 모바일 CSS */
@media screen and (max-width: 767px) {
  html {
    font-size: 9px;
  }
  .about {
    width: 100%;
    .profile {
      width: 80%;
      flex-direction: column;
      padding: 20% 0;
      .info {
        width: 100%;
        margin: 0 auto;
        order: 2;
        h1 {
          font-size: 3.5rem;
          span {
            color: #fd5454;
          }
        }
        > p {
          font-size: 1.3rem;
          margin: 20px 0;
        }
        .wrap {
          p {
            font-size: 1.3rem;
            margin-bottom: 5px;
          }

          .icons {
            svg {
              margin-right: 5%;
              font-size: 2.5rem;
            }
          }
        }
      }
      img {
        width: 100%;
        order: 1;
        margin-bottom: 20px;
      }
    }

    .who {
      width: 100%;
      .who-text {
        width: 68%;
        padding: 15% 0;
        h2 {
          font-size: 4rem;
        }
        p {
          font-size: 1.5rem;
        }
      }
    }

    .lang {
      width: 100%;
      padding: 15% 0;
      h2 {
        font-size: 4rem;
      }
      .lang-wrap {
        width: 80%;
        .lang-detail {
          &:last-child {
            margin-bottom: 0;
          }
          .icon-wrap {
            width: 12%;
            height: auto;
            margin-right: 10%;
            svg {
              font-size: 5.5rem;
            }
          }
          p {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
}
</style>
