<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12 v-for="e in education">
                <v-card>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">{{ e.facility }}</h3>
                            <h3>{{ e.yearStart | date}} - {{ e.yearEnd | date}}</h3>
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
                if (confirm("Kindel, et tahad kustutada?")) {
                    educationDB.child(e['.key']).remove()
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
            education: educationDB
        }
    }
</script>
<style scoped>

</style>