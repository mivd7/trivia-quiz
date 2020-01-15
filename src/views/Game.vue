<template>
  <div>
    <h2>Level {{$route.params.level}}</h2>
    <Questions v-if="randomCategory && gameInProgress" :categoryId="randomCategory.id" v-on:quizCompleted="reset"/>
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
        ...mapActions(["fetchAllCategories"]),
        reset() {
            this.gameInProgress = false
            this.$root.$emit('showPathway', true)
        }
    },
    data() {
        return {
            gameInProgress: false
        }
    },
    created() {
        this.fetchAllCategories();
        this.gameInProgress = true;
        this.$root.$emit('showPathway', false)
    },
    computed: {
        ...mapGetters(["randomCategory"])
    },
}
</script>

<style>

</style>