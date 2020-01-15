import axios from 'axios';

const state = {
    categories: [],
    category: {},
};
  
const getters = {
    allCategories: state => state.categories,
    randomCategory: state => state.categories[Math.floor(Math.random()*state.categories.length)],
};
  
const actions = {
    filterPreviousCategory({commit}, id) {
        commit('categoryCompleted', id)
    },
    async fetchAllCategories({ commit }) {
        const response = await axios.get(`https://opentdb.com/api_category.php`);
        commit('setCategories', response.data.trivia_categories)
    },
}
  
const mutations = {
    setCategories: (state, categories) => (state.categories = categories),
    categoryCompleted: (state, categoryId) => (state.categories.filter(category => category.id !== categoryId)) 
}
  
export default {
    state,
    getters,
    mutations,
    actions
}