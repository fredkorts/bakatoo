
<template>
    <v-app>
        <v-content>
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12 sm10 md10 class="mx-auto custom-height">
                        <v-layout row wrap>
                            <v-flex xs12 md4>
                                <v-card>
                                    <div class="avatar-wrapper">
                                      <img
                                              class="img-circle sidebar-avatar mt-4"
                                              src="https://i.imgur.com/Lc3yGzQ.jpg"
                                      >
                                    </div>
                                    <v-subheader middle><h3>CONTACT</h3></v-subheader>
                                    <v-card-text>
                                        <v-layout row wrap mb-2 mt-3>
                                            <v-flex xs2 class="text-xs-right"><v-icon>person</v-icon></v-flex>
                                            <v-flex xs9 offset-xs1 class="text-xs-left">Born 1991, Tallinn</v-flex>
                                        </v-layout>
                                        <v-layout row wrap mb-2 mt-3>
                                            <v-flex xs2 class="text-xs-right"><v-icon>home</v-icon></v-flex>
                                            <v-flex xs9 offset-xs1 class="text-xs-left">Avar 4-61, Maardu, 74112</v-flex>
                                        </v-layout>
                                        <v-layout row wrap mb-2 mt-3>
                                            <v-flex xs2 class="text-xs-right"><v-icon>phone</v-icon></v-flex>
                                            <v-flex xs9 offset-xs1 class="text-xs-left">+372 56 82 71 09</v-flex>
                                        </v-layout>
                                        <v-layout row wrap mb-2 mt-3>
                                            <v-flex xs2 class="text-xs-right"><v-icon>email</v-icon></v-flex>
                                            <v-flex xs9 offset-xs1 class="text-xs-left">fredkorts@gmail.com</v-flex>
                                        </v-layout>
                                    </v-card-text>
                                    <v-subheader><h3>SKILLS</h3></v-subheader>
                                    <br>
                                    <v-card-text v-for="skill in skills" class="custom-slider-padding">
                                        <v-layout row wrap>
                                            <v-flex xs10 offset-xs1>
                                                <h4 style="text-align:left;">{{ skill.title }}</h4>
                                            </v-flex>
                                            <v-flex xs10 offset-xs1>
                                                <v-progress-linear v-model="skill.score"></v-progress-linear>
                                            </v-flex>
                                        </v-layout>
                                    </v-card-text>
                                    <br>
                                    <br>
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
                this.$store.dispatch('changeProfileState')
            },
            changeModalState () {
                this.$store.dispatch('changeModalState')
            },
            logUserOut () {
                fireb.auth().signOut().then(() => {
                    this.$router.replace('/')
                    this.$store.dispatch('logIn')
                })
            }
        },
        computed: {
            activateProfile () {
                return this.$store.getters.profileState
            },
            loggedIn () {
                return this.$store.getters.loggedState
            },
            signIn () {
                return this.$store.getters.modalState
            }
        },
        name: 'App',
        components: {AddToProfile, SignIn}
}
</script>

<style scoped>
    .to-left {
        margin-left: 0;
    }
    .login-button {
        margin-top: -3px;
    }
    .primary-header {
        font-size: 2.75em;
        text-transform: uppercase;

    }
    .secondary-header {
        font-size: 2em;
    }
    .avatar-wrapper {
        width: 100%;
        text-align: center;
    }
    .avatar-wrapper img {
        border-radius: 50%;
        width: 30%;
    }
    .sidebar-avatar {
        width: 100%;
    }
    .custom-height {
        min-height: 90vh;
    }
	.custom-slider-padding {
		padding: 0 16px;
	}
    .faded-text {
        opacity: 0.5;
        letter-spacing: 3px !important;
    }
    .fade-enter-active, .fade-leave-active {
        transition-property: opacity;
        transition-duration: .25s;
    }

    .fade-enter-active {
        transition-delay: .25s;
    }

    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>