<template>
    <div>
        <form @submit.prevent="addProject">
            <h2>Lisa uus tehtud töö</h2>
            <v-layout row>
                <v-flex xs12>
                    <v-text-field name="project_name" label="Projekti nimi" id="project_name" v-model="newProject.projectName"></v-text-field>
                </v-flex>
            </v-layout>
            <br>
            <v-layout row>
                <v-flex xs12>
                    <v-text-field name="project_url" label="Projekti URL" id="project_url" v-model="newProject.projectURL" required></v-text-field>
                </v-flex>
            </v-layout>
            <br>
            <v-layout row>
                <v-flex xs12>
                    <v-text-field name="image_url" label="Pildi URL" id="image_url" v-model="newProject.imageURL" required></v-text-field>
                </v-flex>
            </v-layout>
            <br>
            <v-layout>
                <v-flex xs12>
                    <v-btn class="primary" type="submit">
                        Lisa projekt
                    </v-btn>
                </v-flex>
            </v-layout>
        </form>
    </div>
</template>

<script>
    import fireb from '../../utils/firebaseConfig'

    var projectsDB = fireb.database().ref('projects/')

    export default {
        data () {
            return {
                newProject: {
                    projectName: '',
                    projectURL: '',
                    imageURL: ''
                }
            }
        },
        methods: {
            addProject () {
                projectsDB.push(this.newProject)
                this.newProject.projectName = ''
                this.newProject.projectURL = ''
                this.newProject.imageURL = ''
                this.$store.dispatch('showAddToProfile')
            }
        }
    }
</script>

<style scoped>

</style>