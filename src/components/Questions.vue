<template>
    <div>
        <div v-for="question in allQuestions" :key="question.id">
            <h3>{{question.question}}</h3>
            <ul>
                <li v-for="incorrect in question.incorrect_answers" :key="question.incorrect_answers.indexOf(incorrect)">{{incorrect}}</li>
            </ul>
        </div>
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
        ...mapActions(["fetchQuestionsByCategory"])
    },
    created() {
        this.fetchQuestionsByCategory(this.categoryId);
    },
    computed: {
        ...mapGetters(["allQuestions"])
    }
}
</script>

<style>

</style>