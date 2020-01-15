<template>
    <div>
    <div v-if="allQuestions.length > 0">

        <p>The category is...<br> {{currentQuestion.category}}</p>
        <h3>{{currentQuestion.question}}</h3>
        <ol type="a">
            <li @click="e => handleClick(answer)" v-for="answer in allAnswers" :key="allAnswers.indexOf(answer)">{{answer}}</li>
            <p v-if="isCorrect === true">Correct!</p>
            <p v-if="isCorrect === false">Wrong! The correct answer was {{previousCorrectAnswer}}</p>
        </ol>
    </div>
    <div v-else>ALL DONE HERE! <router-link to="/home"><br/>
    <p>You answered {{correctAnswerAmount}} / 10 questions correctly</p>
    <button @click="reset">go back</button></router-link></div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { checkAnswer } from '../lib/quizLogic'

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
        ...mapActions(["fetchQuestionsByCategory","nextQuestion","setCorrectAnswer","setWrongAnswer","levelUp"]),
        handleClick(answer) {
            const correct = checkAnswer(answer, this.correctAnswer)
            
            if (correct) {
              this.isCorrect = true;
              this.setCorrectAnswer(this.currentQuestion)
              this.nextQuestion();
            } else {
              this.isCorrect = false;
              this.setWrongAnswer(this.currentQuestion)
              this.nextQuestion();
            }
        },
        reset() {
            if(this.correctAnswerAmount >= 1) {
                this.levelUp()
            }
            this.$emit('quizCompleted')
        }
    },
    created() {
        this.fetchQuestionsByCategory(this.categoryId);
    },
    computed: {
        ...mapGetters(["allQuestions","allAnswers","currentQuestion","correctAnswer","previousCorrectAnswer","correctAnswerAmount"])
    },  
}
</script>

<style>

</style>