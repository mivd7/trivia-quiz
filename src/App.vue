<template>
  <div id="app">
    <div v-if="!isLoggedIn">
      <Start v-on:loggedIn="isLoggedIn = true" />
    </div>
    <div v-else>
      <Home :currentUser="user"/>
      <router-view></router-view>
    </div>
    <footer>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/HLXdl1XdgF4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </footer>
  </div>
</template>

<script>
import Start from './views/Start.vue';
import Home from './views/Home.vue';
import {joep} from './lib/dummyUser';

export default {
  name: 'app',
  components: {
    Start,
    Home
  },
  data() {
    return {
      isLoggedIn: false,
      user: {}
    }
  },
  created() {
    this.user = joep
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

footer {
  margin-top: 50px;
}
</style>
