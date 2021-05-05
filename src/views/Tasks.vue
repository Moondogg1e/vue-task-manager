<template>
  <h1 class="text-white center" v-if="tasks.length === 0">Задач пока нет</h1>
  <template v-else>
    <h3 class="text-white">Всего активных задач: {{activeTasksCount}}</h3>
    <div class="card" v-for="task in tasks" :key="task.id">
      <h2 class="card-title">
        {{task.title}}
        <AppStatus :type="task.status" />
      </h2>
      <p>
        <strong>
          <small>
            Дэдлайн: {{new Date(task.date).toLocaleDateString()}}
          </small>
        </strong>
      </p>
      <button class="btn primary" @click="open(task.id)">Посмотреть</button>
      <button class="btn danger" @click="remove(task.id)">Удалить задачу</button>
    </div>
  </template>
</template>

<script>
// import {useStore} from 'vuex'
import AppStatus from '../components/AppStatus'

export default {
  components: {AppStatus},
  computed: {
    tasks(){
      return this.$store.getters.tasks;
    },
    activeTasksCount(){
      return this.$store.getters.activeTasksCount
    }
  },
  methods: {
    open(id){
      this.$router.push(`/task/${id}`)
    },
    remove(id){
      this.$store.commit('removeTask', id)
    }
  },
}
</script>
