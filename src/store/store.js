import Vue from 'vue'
import Vuex from 'vuex'
import fireb from '../utils/firebaseConfig'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        addToProfile: false,
        signInModal: false,
        loggedIn: false,
        showConfirmation: false,
        deleteItem: false
    },
    getters: {
        addToProfileGetter: state => {
            return state.addToProfile
        },
        modalState: state => {
            return state.signInModal
        },
        userStatus: state => {
            return state.loggedIn
        },
        confirmationStatus: state => {
            return state.showConfirmation
        },
        deleteItemGetter: state => {
            return state.deleteItem
        }
    },
    mutations: {
        addToProfileSetter (state) {
            state.addToProfile = !state.addToProfile
        },
        setModalState (state) {
            state.signInModal = !state.signInModal
        },
        signIn (state) {
            state.loggedIn = true
        },
        signOut (state) {
            state.loggedIn = false
        },
        deleteItemSetter (state) {
            state.deleteItem = !state.deleteItem
        },
        toggleConfirmation (state) {
            state.showConfirmation = !state.showConfirmation
        }
    },
    actions: {
        showAddToProfile (context) {
            context.commit('addToProfileSetter')
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
        },
        deleteItemAction (context) {
            context.commit('deleteItemSetter')
        },
        toggleConfirmation (context) {
            context.commit('toggleConfirmation')
        }
    }
})
