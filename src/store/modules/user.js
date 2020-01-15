const state = {
    user: {
        name: 'Joep Meloen',
        email: 'joep.meloen@euronet.nl',
        password: 'joepie!',
        level: 1,
        lives: 5,
        coins: 1000,
        loggedIn: false
    }
};
  
const getters = {
    currentUser: state => state.user
}

const actions = {
    login({commit}, payload) {
        commit('loginAttempt', payload)
    },
    levelUp({commit}) {
        commit('nextLevel')
    },
    buyCoins({commit}, amount) {
        commit('coinsAdded', amount)
    },
    buyLives({commit}, amount) {
        commit('livesAdded', amount)
    },
}
  
const mutations = {
    loginAttempt: (state, {email, password}) => {
        if (email === state.user.email && password === state.user.password) {
            state.user.loggedIn = true
        }
    },
    nextLevel: state => state.user.level++,
    coinsAdded: (state, amount) => state.user.coins += amount,
    livesAdded: (state, amount) => state.user.lives += amount
}
  
export default {
    state,
    getters,
    mutations,
    actions
}