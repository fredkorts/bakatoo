<template>
    <div>
        <form @submit.prevent="addEducation">
            <h2>Lisa uus haridus</h2>
            <v-layout row>
                <v-flex xs12>
                    <v-text-field name="facility" label="Õppeasutus" id="facility" v-model="newEducation.facility" required></v-text-field>
                </v-flex>
            </v-layout>
            <br>
            <v-layout row>
                <v-flex xs12>
                    <v-text-field name="specialization" label="Eriala" id="specialization" v-model="newEducation.degree" required></v-text-field>
                </v-flex>
            </v-layout>
            <br>
            <v-layout row>
                <v-flex xs12 sm5>
                    <v-date-picker v-model="newEducation.yearStart"></v-date-picker>
                </v-flex>
                <v-flex xs12 sm5>
                    <v-date-picker v-model="newEducation.yearEnd"></v-date-picker>
                </v-flex>
            </v-layout>
            <br>
            <v-layout>
                <v-flex xs12>
                    <v-btn class="primary" type="submit">
                        Lisa haridus
                    </v-btn>
                </v-flex>
            </v-layout>
            <br>
        </form>
    </div>
</template>

<script>
    import fireb from '../../utils/firebaseConfig'

    var educationDB = fireb.database().ref('education/')
    export default {
        data () {
            return {
                newEducation: {
                    degree: '',
                    facility: '',
                    yearStart: '',
                    yearEnd: ''
                }
            }
        },
        methods: {
            addEducation () {
                educationDB.push(this.newEducation, function (error) {
                    if (error) {
                        alert("!!! Ei õnnestunud lükata andmed andmebaasi !!!")
                    } else {
                        alert("Andmed edukalt lükatud andmebaasi!")
                    }
                })
                this.newEducation.degree = ''
                this.newEducation.facility = ''
                this.newEducation.yearStart = ''
                this.newEducation.yearEnd = ''
                this.$store.dispatch('showAddToProfile')
            }
        }
    }
</script>

<style scoped>

</style>