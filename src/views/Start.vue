<template>
    <div>
        <h1>Here be a login / signup screen</h1>
        <button @click="login">Login</button>
    </div>
</template>

<script>
export default {
    name: 'Start',
    methods: {
        login() {
            this.$emit('loggedIn')
        }
    }
}
</script>

<style>

</style>