<template>
  <div>
    <h2>Todo List</h2>
    <ul class="todo-list">
      <li v-for="todo in todos" :key="todo.id" class="todo-list__items">
        <p class="todo-list__title">{{ todo.title }}</p>
      </li>
    </ul>
    <router-link to="/add">＋</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.state.todoData
    }
  }
}
</script>

<style lang="scss" scoped>

</style>