// import axios from 'axios';

const state = {
    correctAnswers: {
        questions: [],
        correctAmount: 0,
    },
    wrongAnswers: {
        questions: [],
        wrongAmount: 0
    },
    quizStatus: {
      level: null,
      levelInProgress: false
    }
};
  
const getters = {
    gameInProgress: state => state.quizStatus.levelInProgress,
    correctAnswerAmount: state => state.correctAnswers.correctAmount,
    wrongAnswerAmount: state => state.wrongAnswers.wrongAmount,
};
  
const actions = {
    startGame({commit}, currentLevel) {
      commit('gameStarted', currentLevel)
    },
    endGame({commit}) {
      commit('gameEnded')
    },
    setCorrectAnswer({commit}, question) {
        commit('correctAnswerGiven', question)
    },
    setWrongAnswer({commit}, question) {
        commit('wrongAnswerGiven', question)
    },
}
  
const mutations = {
    gameStarted: (state, level) => {
      state.quizStatus.level = level
      state.quizStatus.levelInProgress = true
    },
    gameEnded: state => state.quizStatus.levelInProgress = false,
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