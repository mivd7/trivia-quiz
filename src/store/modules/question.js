import axios from 'axios';
import { shuffle } from '../../lib/quizLogic';

const state = {
    questions: [],
    question: {},
    answers: [],
    correctAnswer: '',
    previousCorrectAnswer: ''
};
  
const getters = {
    allQuestions: state => state.questions,
    currentQuestion: state => state.question,
    allAnswers: state => state.answers,
    correctAnswer: state => state.correctAnswer,
    previousCorrectAnswer: state => state.previousCorrectAnswer
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
        state.previousCorrectAnswer = state.question.correct_answer,
        state.questions = questions,
        state.question = questions.shift()
    ),
    setAnswers: (state) => {
      if (state.questions.length > 0) {
        state.question.incorrect_answers.push(state.question.correct_answer),
        state.answers = shuffle(state.question.incorrect_answers),
        state.correctAnswer = state.question.correct_answer
      } else {
        state.question = {}
      }
    },
    setNextQuestion: (state) => {
      state.question = state.questions.shift(),
      state.previousCorrectAnswer = state.question.correct_answer
    }
}
  
export default {
    state,
    getters,
    mutations,
    actions
}