<template>
    <div>
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
    </div>
</template>

<script>
    export default {
        data () {
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
        }
    }
</script>

<style scoped>
    .to-left {
        margin-left: 0;
    }
    .login-button {
        margin-top: -3px;
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