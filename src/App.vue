
<template>
    <v-app>
        <v-content>
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12 sm10 md10 class="mx-auto custom-height">
                        <v-layout row wrap>
                            <v-flex xs12 md3 offset-md1>
                                <v-card>
                                    <sidebar></sidebar>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md8 px-4>
                                <v-container>
                                    <v-layout>
                                        <v-flex xs12>
                                            <h3 class="primary-header">
                                                Fred Korts
                                                <v-btn
                                                      color="blue darken-2"
                                                      class="login-button"
                                                      dark
                                                      fab
                                                      flat
                                                      hover
                                                      v-if="!loggedIn"
                                                      @click="changeModalState"
                                                >
                                                    <v-icon>lock</v-icon>
                                                </v-btn>
                                                <v-btn
                                                      color="blue darken-2"
                                                      class="login-button"
                                                      dark
                                                      fab
                                                      flat
                                                      hover
                                                      v-else
                                                      @click="logUserOut"
                                                >
                                                    <v-icon>lock</v-icon>
                                                </v-btn>
                                            </h3>
                                            <br>
                                            <h3 class="secondary-header faded-text">Front-end arendaja</h3>
                                            <br>
                                            <br>
                                            <v-btn flat light router to="/" class="to-left">Kaaskiri</v-btn>
                                            <v-btn flat light router to="experience">Kogemus</v-btn>
                                            <v-btn flat light router to="projects">Portfoolio</v-btn>
                                            <v-btn flat light router to="education">Haridus</v-btn>
                                            <sign-in></sign-in>
                                            <div v-if="loggedIn">
                                                <div v-if="activateProfile" style="height: 50px; width: auto; margin-top:8px;">
                                                    <v-btn
                                                          color="red"
                                                          dark
                                                          fab
                                                          absolute
                                                          right
                                                          large
                                                          @click="changeProfileState"
                                                    >
                                                      <v-icon>close</v-icon>
                                                    </v-btn>
                                                </div>
                                                <div v-else style="height: 50px; width: auto; margin-top:8px;">
                                                    <v-btn
                                                      color="blue"
                                                      dark
                                                      fab
                                                      absolute
                                                      right
                                                      large
                                                      @click="changeProfileState"
                                                    >
                                                        <v-icon>add</v-icon>
                                                    </v-btn>
                                                </div>
                                            </div>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                                <v-container>
                                    <v-layout row wrap>
                                        <v-flex xs12>
                                            <div>
                                                <add-to-profile v-if="activateProfile"></add-to-profile>
                                            </div>
                                        </v-flex>
                                        <v-flex xs12 v-if="!activateProfile">
                                            <transition name="fade" mode="out-in" appear>
                                                <router-view></router-view>
                                            </transition>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-flex>
                      </v-layout>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
	/* eslint-disable no-multi-spaces */
    import AddToProfile from './components/AddToProfile.vue'
    import SignIn from './components/menu/SignIn.vue'
    import Sidebar from './components/menu/Sidebar.vue'
    import fireb from './utils/firebaseConfig'

	export default {
        data: function () {
            return {
                skills: [
                    {
                        title: 'HTML',
                        score: 80
                    },
                    {
                        title: 'CSS',
                        score: 88
                    },
                    {
                        title: 'JavaScript',
                        score: 60
                    },
                    {
                        title: 'Wordpress',
                        score: 60
                    },
                    {
                        title: 'Vue.js',
                        score: 50
                    }
                ],
                maxSkill: 50
            }
        },
        methods: {
            changeProfileState () {
                this.$store.dispatch('showAddToProfile')
            },
            changeModalState () {
                this.$store.dispatch('changeModalState')
            },
            logUserOut () {
                fireb.auth().signOut().then(() => {
                    this.$router.replace('/')
                    this.$store.dispatch('signOut')
                })
            }
        },
        computed: {
            activateProfile () {
                return this.$store.getters.addToProfileGetter
            },
            signIn () {
                return this.$store.getters.modalState
            },
            loggedIn () {
                return this.$store.getters.userStatus
            }
        },
        created() {
            // Check user status
            this.$store.dispatch('userStatus')
        },
        name: 'App',
        components: {AddToProfile, SignIn, Sidebar}
}
</script>

<style scoped>
    .primary-header {
        font-size: 2.75em;
        text-transform: uppercase;

    }
    .secondary-header {
        font-size: 2em;
    }
    .faded-text {
        opacity: 0.5;
        letter-spacing: 3px !important;
    }
</style>