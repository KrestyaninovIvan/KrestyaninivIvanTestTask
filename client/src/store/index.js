import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        maxPage: Number,
        user: Object,
        users: []
    },
    mutations: {
        SET_USERS_TO_STATE: (state, users) => {
            state.users = users
        },
        SET_USER_TO_STATE: (state, user) => {
            state.user = user
        },
        SET_CARDMAXPAGE_TO_STATE: (state, maxPage) => {
            state.maxPage = maxPage
        },
        SET_SEARCH_TO_STATE: (state, users) => {
            state.users = users
        }
    },
    actions: {
        GET_USERS_FROM_API({commit}, page) {
            page = '?page=' + page
            return axios('http://localhost:5000/api/' + page, {
                method: "GET"
            })
                .then((users) => {
                    commit('SET_USERS_TO_STATE', users.data)
                    return users
                })
                .catch((error) => {
                    console.log(error)
                    return error
                })
        },
        GET_USER_FROM_API({commit}, id) {
            return axios('http://localhost:5000/api/get/' + id, {
                method: "GET"
            })
                .then((user) => {
                    commit('SET_USER_TO_STATE', user.data)
                    return user
                })
                .catch((error) => {
                    console.log(error)
                    return error
                })
        },
        GET_CARDMAXPAGE_FROM_API({commit}) {
            return axios('http://localhost:5000/api/maxpage', {
                method: "GET"
            })
                .then((maxPage) => {
                    commit('SET_CARDMAXPAGE_TO_STATE', maxPage.data)
                    return maxPage
                })
                .catch((error) => {
                    console.log(error)
                    return error
                })
        },
        GET_SEARCH_FROM_API({commit}, page) {
            return axios('http://localhost:5000/api/search' + page, {
                method: "GET"
            })
                .then((users) => {
                    commit('SET_SEARCH_TO_STATE', users.data)
                    return users
                })
                .catch((error) => {
                    console.log(error)
                    return error
                })
        }
    },
    getters: {
        USERS(state) {
            return state.users
        },
        USER(state) {
            return state.user
        },
        CARDMAXPAGE(state) {
            return state.maxPage
        },
        SEARCH(state) {
            return state.users
        }
    }
})
