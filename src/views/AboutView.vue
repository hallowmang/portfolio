<template>
  <div class="about">
    <section class="profile">
      <div class="info">
        <h1>
          <span>HEOLL!</span><br />
          최시영입니다.<br />
          반갑습니다.
        </h1>
        <p>E-mail: siyoung013@gmail.com</p>
        <div class="wrap">
          <p>TECH I ENJOY</p>
          <div class="icons">
            <fa :icon="['fab', 'html5']" />
            <fa :icon="['fab', 'css3-alt']" />
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
          I’m currently pursuing a Master's degree in Human-Computer Interaction
          at Carnegie Mellon University.<br />
        </p>
        <p>
          I’m a designer who cares deeply about creating valuable experiences
          that bridge humanized technology and social wellness centered around
          meeting people’s needs. Having lived in China, the UK, and the US in
          the past 20 years, I’ve developed a unique strength in empathizing and
          forming emotional connections with others. I believe that every
          product, service, and business needs an understanding space to thrive,
          and I’m good at using empathetic thinking to identify the root cause
          of problems and develop impactful solutions.
        </p>
        <p>
          Previously, I received my Bachelor’s degree in Communications Design
          at Pratt Institute and a minor in sustainability. I was also a
          designer at Agenda NYC and have worked on enterprise-scale digital
          experiences for clients across a wide range of sectors. Combining
          visual storytelling with a user-centered approach in tackling complex
          problem-spaces is my special sauce.
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde in
            consequatur vel ea nisi sunt sint. Amet blanditiis explicabo ducimus
            iste deserunt, placeat expedita pariatur necessitatibus est vitae!
            Neque, recusandae!
          </p>
        </div>
        <div class="lang-detail">
          <span class="icon-wrap">
            <fa :icon="['fab', 'css3-alt']" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde in
            consequatur vel ea nisi sunt sint. Amet blanditiis explicabo ducimus
            iste deserunt, placeat expedita pariatur necessitatibus est vitae!
            Neque, recusandae!
          </p>
        </div>
        <div class="lang-detail">
          <span class="icon-wrap">
            <fa :icon="['fab', 'sass']" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde in
            consequatur vel ea nisi sunt sint. Amet blanditiis explicabo ducimus
            iste deserunt, placeat expedita pariatur necessitatibus est vitae!
            Neque, recusandae!
          </p>
        </div>
        <div class="lang-detail">
          <span class="icon-wrap">
            <fa :icon="['fab', 'figma']" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde in
            consequatur vel ea nisi sunt sint. Amet blanditiis explicabo ducimus
            iste deserunt, placeat expedita pariatur necessitatibus est vitae!
            Neque, recusandae!
          </p>
        </div>
        <div class="lang-detail">
          <span class="icon-wrap">
            <fa :icon="['fab', 'react']" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde in
            consequatur vel ea nisi sunt sint. Amet blanditiis explicabo ducimus
            iste deserunt, placeat expedita pariatur necessitatibus est vitae!
            Neque, recusandae!
          </p>
        </div>
        <div class="lang-detail">
          <span class="icon-wrap">
            <fa :icon="['fab', 'vuejs']" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde in
            consequatur vel ea nisi sunt sint. Amet blanditiis explicabo ducimus
            iste deserunt, placeat expedita pariatur necessitatibus est vitae!
            Neque, recusandae!
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.about {
  width: 100%;
  height: 100%;
  .profile {
    width: 70%;
    // height: 90vh;
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
          svg {
            margin-right: 20px;
            font-size: 3rem;
          }
        }
      }
    }
    img {
      width: 35%;
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
          font-size: 1.1rem;
        }
      }
    }
  }
}
</style>
