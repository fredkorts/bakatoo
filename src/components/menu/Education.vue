<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12 v-for="e in education">
                <v-card>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">{{ e.facility }}</h3>
                            <h3>{{ e.yearStart }} - {{ e.yearEnd }}</h3>
                            <br>
                            <div><b>Eriala:</b> {{ e.degree }}</div>
                        </div>
                    </v-card-title>
                    <v-btn
                            v-if="loggedIn"
                            color="red"
                            dark
                            small
                            absolute
                            bottom
                            right
                            fab
                            v-on:click="removeEducation(e)"
                    >
                        <v-icon>close</v-icon>
                    </v-btn>
                </v-card>
                <br>
            </v-flex>
        </v-layout>
    </div>
</template>
<script>
    import fireb from '../../utils/firebaseConfig'

    var educationDB = fireb.database().ref('education/')
    export default {
        data () {
            return {
                education: []
            }
        },
        methods: {
            removeEducation (e) {
                educationDB.child(e['.key']).remove()
            }
        },
        computed: {
            loggedIn () {
                return this.$store.getters.loggedState
            }
        },
        firebase: {
            education: educationDB
        }
    }
</script>
<style scoped>

</style>