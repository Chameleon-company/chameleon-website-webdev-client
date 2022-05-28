import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    firstName: null,
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  //updates the state
  mutations: {
    setToken (state, token) {
      state.token = token
      console.log('token state changed:', state.token)
      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
    },
    setFirstName (state, firstName) {
      state.firstName = firstName
    }
  },
    //Calls mutations - which then updates the vuex state
    actions: {
      setToken ({commit}, token) {
        commit('setToken', token)
      },
      setUser ({commit}, user) {
        commit('setUser', user)
      },
      setFirstName ({commit}, firstName) {
        commit('setFirstName', firstName)
      }
      //make api call here
    },
  
})
