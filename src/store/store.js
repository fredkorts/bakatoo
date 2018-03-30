import Vue from 'vue'
import Vuex from 'vuex'
import fireb from '../utils/firebaseConfig'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        profileAdd: false,
        signInModal: false,
        loggedIn: false
    },
    getters: {
        profileState: state => {
            return state.profileAdd
        },
        modalState: state => {
            return state.signInModal
        },
        userStatus: state => {
            return state.loggedIn
        }
    },
    mutations: {
        setProfileState (state) {
            state.profileAdd = !state.profileAdd
        },
        setModalState (state) {
            state.signInModal = !state.signInModal
        },
        signIn (state) {
            state.loggedIn = true
        },
        signOut (state) {
            state.loggedIn = false
        }
    },
    actions: {
        changeProfileState (context) {
            context.commit('setProfileState')
        },
        changeModalState (context) {
            context.commit('setModalState')
        },
        userStatus (context) {
            fireb.auth().onAuthStateChanged(function(user) {
                if (user) {
                    // User is signed in
                    context.commit('signIn')
                    console.log('user is signed in')
                } else {
                    // User is signed out
                    context.commit('signOut')
                    console.log('user is signed out')
                }
            })
        }
    }
})
