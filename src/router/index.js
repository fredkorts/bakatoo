import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/menu/Home.vue'
import Experience from '../components/menu/Experience.vue'
import Education from '../components/menu/Education.vue'
import Projects from '../components/menu/Projects.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/experience',
      name: 'Experience',
      component: Experience
    },
    {
      path: '/education',
      name: 'Education',
      component: Education
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    }
  ]
})
