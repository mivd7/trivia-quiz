import axios from 'axios';
import { shuffle } from '../../lib/quizLogic';

const state = {
    questions: [],
    question: {},
    answers: [],
};
  
const getters = {
    allQuestions: state => state.questions,
    currentQuestion: state => state.question,
    allAnswers: state => state.answers,
}

const actions = {
    async fetchQuestionsByCategory({ commit }, id) {
        const response = await axios.get(`https://opentdb.com/api.php?amount=10&category=${id}&difficulty=easy&type=multiple`);
        commit('setQuestions', response.data.results)
        commit('setAnswers');
    },
    nextQuestion({ commit }) {
        commit('setNextQuestion')
        commit('setAnswers')
    }
}
  
const mutations = {
    setQuestions: (state, questions) => (
        state.questions = questions,
        state.question = questions.shift()
    ),
    setAnswers: (state) => (
        state.question.incorrect_answers.push(state.question.correct_answer),
        state.answers = shuffle(state.question.incorrect_answers)
    ),
    setNextQuestion: (state) => state.question = state.questions.shift()
}
  
export default {
    state,
    getters,
    mutations,
    actions
}