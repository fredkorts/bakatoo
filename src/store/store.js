import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        profileAdd: false,
        loggedIn: false,
        signInModal: false
    },
    getters: {
        profileState: state => {
            return state.profileAdd
        },
        loggedState: state => {
            return state.loggedIn
        },
        modalState: state => {
            return state.signInModal
        }
    },
    mutations: {
        setProfileState (state) {
            state.profileAdd = !state.profileAdd
        },
        setModalState (state) {
            state.signInModal = !state.signInModal
        },
        logUserIn (state) {
            state.loggedIn = !state.loggedIn
        }
    },
    actions: {
        changeProfileState (context) {
            context.commit('setProfileState')
        },
        logIn (context) {
            context.commit('logUserIn')
        },
        changeModalState (context) {
            context.commit('setModalState')
        }
    }
})
