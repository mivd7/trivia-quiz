import axios from 'axios';
import { shuffle, checkAnswer } from '../../lib/quizLogic';

const state = {
    questions: [],
    question: {},
    answers: [],
    correctAnswer: '',
    correctAmount: 0
};
  
const getters = {
    allQuestions: state => state.questions,
    currentQuestion: state => state.question,
    allAnswers: state => state.answers,
    correctAnswer: state => state.correctAnswer,
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
    },
    compareAnswers({ commit }, chosenAnswer) {
        commit('setQuestionResult', chosenAnswer)
        commit('setNextQuestion')
        commit('setAnswers')
    },
    finalResult({ commit }, user) {
      commit('checkQuizResult')
    }
}
  
const mutations = {
    setQuestions: (state, questions) => (
        state.questions = questions,
        state.question = questions.shift()
    ),
    setAnswers: (state) => (
        state.question.incorrect_answers.push(state.question.correct_answer),
        state.answers = shuffle(state.question.incorrect_answers),
        state.correctAnswer = state.question.correct_answer
    ),
    setQuestionResult: (state, chosenAnswer) => {
        if (checkAnswer(chosenAnswer, state.correctAnswer)) {
          state.correctAmount += 1
        } else {
          return;
        }
    },
    setQuizResult: (state, )
    setNextQuestion: (state) => state.question = state.questions.shift(),
}
  
  
export default {
    state,
    getters,
    mutations,
    actions
}