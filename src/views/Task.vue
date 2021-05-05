<template>
  <div class="card" v-if="task">
    <h2>Название задачи</h2>
    <p><strong>Статус</strong>: <AppStatus :type="task.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ new Date(task.date).toLocaleDateString() }}</p>
    <p><strong>Описание</strong>: {{task.description}}</p>
    <div class="card">
      <button class="btn" @click="setStatus('pending')">Взять в работу</button>
      <button class="btn primary" @click="setStatus('done')">Завершить</button>
      <button class="btn danger" @click="setStatus('cancelled')">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>Tут АЙДИ</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'

export default {
  components: {AppStatus},
  props: ['id'],
  computed: {
    task(){
      return this.$store.getters.taskById(this.id)
    }
  },
  methods: {
    setStatus(status){
      const updated = {...this.task, status }
      this.$store.dispatch('changeTask', updated)
    }
  },
}
</script>

<style scoped>

</style>