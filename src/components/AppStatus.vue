<template>
  <span :class="['badge', className]">{{ text }}</span>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      validator(value) {
        return ["active", "done", "pending", "cancelled"].includes(value);
      },
    },
  },
  data() {
    return {
      classesMap: {
        active: "primary",
        cancelled: "danger",
        done: "primary",
        pending: "warning",
      },
      textMap: {
        active: "Активен",
        cancelled: "Отменен",
        done: "Завершен",
        pending: "Выполняется",
      },
      className: '',
      text: ''
    };
  },
  watch: {
    type: function(){
      this.className = this.classesMap[this.type]
      this.text = this.textMap[this.type]
      // console.log(this.text);
    }
  },
  mounted() {
    this.className = this.className = this.classesMap[this.type]
    this.text = this.textMap[this.type]
    // console.log(this.type);
    // console.log( this.classesMap[this.type]);
    // console.log(this.className);
  },
};
</script>
