<template>
    <div>
        <v-container grid-list-md>
            <v-layout row wrap>
                <v-flex xs12 md6 pa-3 v-for="item in portfolio">
                    <v-card>
                        <v-card-media :src="item.imageURL" height="200px">
                        </v-card-media>
                        <v-btn
                                v-if="loggedIn"
                                color="red"
                                dark
                                small
                                absolute
                                bottom
                                right
                                fab
                                v-on:click="removeProject(item)"
                        >
                            <v-icon>close</v-icon>
                        </v-btn>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import fireb from '../../utils/firebaseConfig'

    var projectsDB = fireb.database().ref('projects/')
    export default {
        data () {
            return {
                portfolio: []
            }
        },
        methods: {
            removeProject (item) {
                if (confirm("Kindel, et tahad kustutada?")) {
                    projectsDB.child(item['.key']).remove()
                }
                else {
                    console.log("Kustutamine jäi ära...")
                }
            }
        },
        computed: {
            loggedIn () {
                return this.$store.getters.userStatus
            }
        },
        firebase: {
            portfolio: projectsDB
        }
    }
</script>
<style scoped>
    .headline {
        color: white;
        font-size: 2.5em !important;
        text-shadow: 2px 2px black;
        transition: text-shadow .5s ease;
    }
    .headline a {
        color: white;
        text-decoration: none
    }
    .headline a:hover {
        text-shadow: 4px 2px black;
        transition: text-shadow .5s ease;
    }
    .card-container {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    .portfolio-card {
        flex: 1;
        flex-grow: 2;
        flex-basis: 30%;
        background: white;
        margin: 1.5em 0;
        -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
        -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
        box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
    }
    .portfolio-card--info {
        padding: 1em;
    }
    .portfolio-card--image {
        width: 100%;
        border-bottom: 2px solid black;
    }
</style>