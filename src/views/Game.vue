<template>
  <div v-if="$route.params.level">
    <h2>Level {{$route.params.level}}</h2>
    <Questions v-if="randomCategory" :categoryId="randomCategory.id" v-on:quizCompleted="gameDone"/>
   </div> 
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Questions from '../components/Questions';

export default {
    name: 'Game',
    components: {
        Questions
    },
    methods: {
        ...mapActions(["fetchAllCategories","startGame","endGame"]),
        gameDone() {
          this.endGame()
        }
    },
    created() {
        // this.startGame()
        this.fetchAllCategories();
    },
    computed: {
        ...mapGetters(["randomCategory","gameInProgress"])
    },
}
</script>

<style>

</style>