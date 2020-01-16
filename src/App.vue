<template>
  <div id="app">
    <div v-if="!isLoggedIn">
      <h1>Welcome to Trivia Kings! Please login</h1>
      <Login v-on:loginSuccesful="isLoggedIn = true" />
    </div>
    <div v-else>
      <Home :currentUser="currentUser"/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Login from './views/Login.vue';
import Home from './views/Home.vue';
import {mapGetters} from 'vuex';

export default {
  name: 'app',
  components: {
    Login,
    Home
  },
  data() {
    return {
      isLoggedIn: false,
    }
  },
  computed: {
    ...mapGetters(["currentUser"])
  },
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
