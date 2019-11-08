<template>
    <div>
    <div v-if="allQuestions.length > 0">
        <h3>{{currentQuestion.question}}</h3>
        <ol type="a">
            <li @click="handleClick" v-for="answer in allAnswers" :key="allAnswers.indexOf(answer)">{{answer}}</li>
        </ol>
    </div>
    <div v-else>ALL DONE HERE <router-link to="/">go back</router-link> </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Questions',
    props: {
        categoryId: {
            type: Number,
            required: true,
        }
    },
    methods: {
        ...mapActions(["fetchQuestionsByCategory","nextQuestion"]),
        handleClick() {
            this.nextQuestion()
        }
    },

    created() {
        this.fetchQuestionsByCategory(this.categoryId);
    },
    computed: {
        ...mapGetters(["allQuestions","allAnswers","currentQuestion"])
    },
    
}
</script>

<style>

</style>