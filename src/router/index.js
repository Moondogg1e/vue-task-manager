import { createRouter, createWebHistory } from 'vue-router'
import Tasks from '../views/Tasks.vue'
import Task from '../views/Task.vue'
import New from '../views/New.vue'
// import Task from '../views/Task.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: Tasks},
    {path: '/new', component: New},
    {path: '/task/:id', component: Task, props: true}
    // {path: '/task', component: Task},
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})



export default router
