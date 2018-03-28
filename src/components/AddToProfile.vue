<template>
    <div>
        <div v-if="$route.path == '/education'">
            <add-education></add-education>
        </div>
        <div v-else-if="$route.path == '/projects'">
            <add-project></add-project>
        </div>
        <div v-else-if="$route.path == '/experience'">
            <add-experience></add-experience>
        </div>
    </div>
</template>

<script>
    import addExperience from './add/addExperience.vue'
    import addProject from './add/addProject.vue'
    import addEducation from './add/addEducation.vue'

    export default {
        components: {
            addExperience,
            addProject,
            addEducation
        }
    }
</script>

<style scoped>

</style>