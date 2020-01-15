// import axios from 'axios';

const state = {
    correctAnswers: {
        questions: [],
        correctAmount: 0,
    },
    wrongAnswers: {
        questions: [],
        wrongAmount: 0
    }
};
  
const getters = {
    correctAnswerAmount: state => state.correctAnswers.correctAmount,
    wrongAnswerAmount: state => state.wrongAnswers.wrongAmount,
};
  
const actions = {
    setCorrectAnswer({commit}, question) {
        commit('correctAnswerGiven', question)
    },
    setWrongAnswer({commit}, question) {
        commit('wrongAnswerGiven', question)
    },
}
  
const mutations = {
    correctAnswerGiven: (state, question) => {
        state.correctAnswers.questions.push(question)
        state.correctAnswers.correctAmount++
    },
    wrongAnswerGiven: (state, question) => {
        state.wrongAnswers.questions.push(question)
        state.wrongAnswers.wrongAmount++
    }
}
  
export default {
    state,
    getters,
    mutations,
    actions
}