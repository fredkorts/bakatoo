<template>
    <v-layout row justify-center>
        <v-dialog v-model="modalState" persistent max-width="500px">
            <v-card>
                <v-card-title>
                    <span class="headline">Sign in</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12>
                                <v-text-field label="Email" v-model="username" required></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field label="Password" v-model="password" type="password" required></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="toggleModal">Close</v-btn>
                    <v-btn color="blue darken-1" flat @click="signIn">Sign in</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
    import fireb from '../../utils/firebaseConfig'

    export default {
        data () {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            toggleModal () {
                this.$store.dispatch('changeModalState')
            },
            signIn () {
                fireb.auth().signInWithEmailAndPassword(this.username, this.password).then(
                    user => {
                        this.$store.dispatch('signIn')
                        this.$store.dispatch('changeModalState')
                    }
                ).catch(
                    error => {
                        console.log(error)
                    }
                )
            }
        },
        computed: {
            modalState () {
                return this.$store.getters.modalState
            }
        }
    }
</script>