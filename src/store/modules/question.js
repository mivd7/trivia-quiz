import axios from 'axios';

const state = {
    questions: [],
};
  
const getters = {
    allQuestions: state => state.questions,
}

const actions = {
    async fetchQuestionsByCategory({ commit }, id) {
        const response = await axios.get(`https://opentdb.com/api.php?amount=10&category=${id}&difficulty=easy&type=multiple`);
        commit('setQuestions', response.data.results)
    },
}
  
const mutations = {
    setQuestions: (state, questions) => (state.questions = questions),
}
  
export default {
    state,
    getters,
    mutations,
    actions
}