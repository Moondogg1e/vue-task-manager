<template>
  <form class="card" @submit.prevent="submit">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="title"/>
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date"/>
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>
    </div>

    <button class="btn primary" :disabled="!isValid">Создать</button>
  </form>
</template>

<script>
// import { useStore } from "vuex";
// import { useRouter } from "vue-router";

export default {
    data() {
      return {
        title: '',
        date: null,
        description: '',
      }
    },
    methods: {
      submit(){
        const newTask = {
          id: Date.now().toString(),
          title: this.title,
          date: new Date(this.date).setHours(23,59,59,999),
          description: this.description,
          status: 'active'
        }

        this.$store.dispatch('createTask', newTask)
        this.$router.push('/')
      }
    },
    computed: {
      isValid(){
        return this.title !=='' && this.date !== null && this.description !== ''
      }
    }
};
</script>
