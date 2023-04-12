<template>
  <div>
  <section class="detail-visual">   
    <div class="detail-wrap">
      <div class="detail-wrap-top">
        <p>{{ data.website[id].subtitle }}</p>
        <h1>{{ data.website[id].title }}</h1>
        <div class="detail-text">
          <p>
            {{ data.website[id].text }}
          </p>
          <div class="tools">
            <p>Tools</p>
            <fa v-for="v in data.website[id].tools" :key="v.id" :icon="['fab', v]" />
          </div>
        </div>
        <router-link to="#">
          {{ data.website[id].url }} <fa :icon="['fa', 'arrow-right']" class="arrow" />
        </router-link>
      </div>
      <img :src="data.website[id].img" alt="" />
      <!-- <img src="@/assets/img/Chair-Meister-main-page.png" alt="" /> -->
    </div>
  </section>

  <section class="clone">
    <div class="clone-wrap">
      <div class="clone-title">
        <h2>{{ data.website[id].webDesign }}</h2>
        <p>{{ data.website[id].designText }}.</p>
      </div>
      <div class="clone-homepage">
        <img :src="data.website[id].designImg" alt="" />
      </div>
    </div>  
  </section>

  <section class="responsive-design">
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
</div>
</template>

<script>
import projData from "@/assets/data/projectData.json"

export default {
  name: "ProjectView",
  data(){
    return{
      data:projData,
      id:0,
    }
  },
  mounted(){
    this.id = this.$route.query.id;
    
    const bgMovie = document.querySelector(".detail-visual")
    
    if(this.id == 2){
      bgMovie.classList.add("bg-movie")
    } else {
      bgMovie.classList.remove("bg-movie")
    }

    
    // if(this.id == 2){

    // }

    window.scrollTo(0,0); //페이지가 바뀌었을때 스크롤이 위에서 시작
  }
};
</script>

<style lang="scss">
.bg-movie{
  background: linear-gradient(#4b0000, #000000);
  .detail-wrap{
    color:whitesmoke;
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
