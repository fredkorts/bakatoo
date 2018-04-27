<template>
    <div>
        <v-flex xs12 v-for='(experience, index) in experiences' :key="`experience-${index}`">
            <v-card>
                <v-card-title primary-title>
                    <div>
                        <h2 class='company'>{{ experience.company }}</h2>
                        <h3 class='role'>{{ experience.role }}</h3>
                        <p>{{ experience.yearStart  | date }} - {{ experience.yearEnd | date }}</p>
                    </div>
                </v-card-title>
                <v-btn
                        v-if="loggedIn"
                        color='red'
                        dark
                        small
                        absolute
                        bottom
                        right
                        fab
                        v-on:click='removeExperience(experience)'
                >
                    <v-icon>close</v-icon>
                </v-btn>
            </v-card>
            <br>
        </v-flex>
    </div>
</template>
<script>
    import fireb from '../../utils/firebaseConfig'

    var experienceDB = fireb.database().ref('experiences/')
    export default {
        methods: {
            removeExperience (experience) {
                if (confirm("Kindel, et tahad kustutada?")) {
                    experienceDB.child(experience['.key']).remove()
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
            experiences: experienceDB
        }
    }
</script>
<style scoped>
    .company {
        font-size: 3em;
        opacity: 0.5;
    }
</style>