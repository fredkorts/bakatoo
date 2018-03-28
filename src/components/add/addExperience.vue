<template>
    <div>
        <form @submit.prevent="addExperience">
            <h2>Lisa uus kogemus</h2>
            <v-layout row>
                <v-flex xs12>
                    <v-text-field name="company_name" label="Firma nimi" id="company_name" v-model="newExperience.company" required></v-text-field>
                </v-flex>
            </v-layout>
            <br>
            <v-layout row>
                <v-flex xs12>
                    <v-text-field name="role" label="Roll" id="role" v-model="newExperience.role" required></v-text-field>
                </v-flex>
            </v-layout>
            <br>
            <v-layout row>
                <v-flex xs12 sm5>
                    <v-date-picker v-model="newExperience.yearStart"></v-date-picker>
                </v-flex>
                <v-flex xs12 sm5>
                    <v-date-picker v-model="newExperience.yearEnd"></v-date-picker>
                </v-flex>
            </v-layout>
            <br>
            <v-layout>
                <v-flex xs12>
                    <v-btn class="primary" type="submit">
                        Lisa kogemus
                    </v-btn>
                </v-flex>
            </v-layout>
        </form>
    </div>
</template>

<script>
    import fireb from '../../utils/firebaseConfig'

    var experienceDB = fireb.database().ref('experiences/')
    export default {
        data () {
            return {
                newExperience: {
                    company: '',
                    role: '',
                    yearStart: '',
                    yearEnd: ''
                }
            }
        },
        methods: {
            addExperience () {
                experienceDB.push(this.newExperience)
                this.newExperience.company = ''
                this.newExperience.role = ''
                this.newExperience.yearStart = ''
                this.newExperience.yearEnd = ''
                this.$store.dispatch('changeProfileState')
            }
        }
    }
</script>

<style scoped>

</style>