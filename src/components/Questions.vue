<template>
    <div>
    <div v-if="allQuestions.length > 0">

        <p>The category is...<br> {{currentQuestion.category}}</p>
        <h3>{{currentQuestion.question}}</h3>
        <ol type="a">
            <li @click="e => handleClick(answer)" v-for="answer in allAnswers" :key="allAnswers.indexOf(answer)">{{answer}}</li>
            <p v-if="isCorrect === true">Correct!</p>
            <p v-if="isCorrect === false">wrong!</p>
        </ol>
    </div>
    <div v-else>ALL DONE HERE <router-link to="/">go back</router-link> </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import {checkAnswer} from '../lib/quizLogic'

export default {
    name: 'Questions',
    props: {
        categoryId: {
            type: Number,
            required: true,
        }
    },
    data() {
      return {
        isCorrect: null,
      }
    },
    methods: {
        ...mapActions(["fetchQuestionsByCategory","nextQuestion"]),
        handleClick(answer) {
            const correct = checkAnswer(answer, this.correctAnswer)
            if (correct) {
              this.isCorrect = true;
              setTimeout(this.nextQuestion(), 5000);
            } else {
              this.isCorrect = false;
              setTimeout(this.nextQuestion(), 5000);
            }
        }
    },
    created() {
        this.fetchQuestionsByCategory(this.categoryId);
    },
    computed: {
        ...mapGetters(["allQuestions","allAnswers","currentQuestion","correctAnswer"])
    },
    
}
</script>

<style>

</style>