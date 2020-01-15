<template>
  <form>
      <input v-model="formModel.email" placeholder="email" label="enter your email"/><br/>
      <input v-model="formModel.password" placeholder="password" label="enter your password" type="password"/><br/>
      <button type="button" @click="handleClick">Login</button>
      <p v-if="loginFailed" style="color: red;">Login failed! Please supply a username or wait until Max makes the signup functionality</p>
  </form>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
    name: 'Login',
    data() {
        return {
            formModel: {
                email: '',
                password: '',
            },
            loginFailed: false,
        }
    },
    methods: {
        ...mapActions(['login']),
        handleClick() {
            this.login(this.formModel)
            if(this.currentUser.loggedIn === true) {
                this.$emit('loginSuccesful')
            } else {
                this.loginFailed = true
            }
        }
    },
    computed: {
        ...mapGetters(['currentUser'])
    }
}
</script>

<style>

</style>