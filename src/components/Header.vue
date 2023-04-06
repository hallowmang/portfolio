<template>
  <header>
    <h1>SIYOUNG</h1>
    <nav>
      <router-link to="/">Introduction</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/project">Project</router-link>
      <router-link to="/menulist">
        <fa :icon="['fas', 'bars']"/>
      </router-link>      
    </nav>
  </header>
</template>

<script>

export default {
    name: "HeaderView",
};
</script>

<style lang="scss">
header {
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  width: 70%;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 9999;
  > h1 {
    color: whitesmoke;
    font-size: 1.5rem;
    font-weight: 800;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      padding: 0 30px ;
      font-weight: bold;
      color: red;
      text-decoration: none;

      &.router-link-exact-active {
        color: blue;
      }
    }
  }
}
</style>
