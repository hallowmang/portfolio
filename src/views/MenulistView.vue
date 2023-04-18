<template>
  <div id="menu" class="">
    <div class="main-nav">
      <ul>
        <li>
          <router-link to="/"> Introduction </router-link>
        </li>
        <li>
          
            
            
              <router-link to="#"> Project </router-link>
            
          
        </li>

        <li>
          <router-link to="/about"> About </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
$menu-bg: #000;
$menu-color: #ffffff;
$menu-font-size: 2.5rem;
$menu-zindex: 1100;

#menu {
  background-color: $menu-bg;
  height: 100%;
  left: 0;
  opacity: 1;
  overflow: hidden;
  position: fixed;
  text-align: center;
  top: 0;
  transition: all 0.7s ease-in-out;
  // For some sweet fadez
  visibility: visible;
  width: 100%;
  z-index: $menu-zindex;
  &.open {
    opacity: 1;
    visibility: visible;

    @for $i from 1 through 10 {
      li:nth-child(#{$i}) {
        animation-delay: $i * 0.1s;
      }
    }

    li {
      animation-duration: 1s;
      animation-fill-mode: both;
      animation-name: fadeInUp;
    }
  }

  ul {
    &:hover {
      a {
        opacity: 0.5;
      }
    }

    a {
      // Stops it being a twitchy mess in chrome :pray:
      // https://www.binarymoon.co.uk/2014/02/fixing-css-transitions-in-google-chrome/
      -webkit-transform: translateZ(0);
      transition: opacity 0.3s ease-in-out;
      &:hover {
        opacity: 1;
      }
    }
  }

  .main-nav {
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    a {
      color: $menu-color;
      display: block;
      font-size: $menu-font-size;
      font-weight: bold;
      padding: 1rem 1rem;
      text-decoration: none;
      text-transform: uppercase;
      &:first {
        padding-top: 0;
      }
    }
  }
}
</style>
