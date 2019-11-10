<template>
  <div>
    <h2>Level {{$route.params.level}}</h2>
    <p>The category is...<br> {{randomCategory.name}}</p>
    <Questions v-if="randomCategory" :categoryId="randomCategory.id"/>
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
        ...mapActions(["fetchAllCategories"])
    },
    created() {
        this.fetchAllCategories();
    },
    computed: {
        ...mapGetters(["randomCategory"])
    },
}
</script>

<style>

</style>