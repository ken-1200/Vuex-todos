<template>
  <div>
    <h2>Todo List</h2>
    <ul class="todo-header">
      <li class="todo-header__items">
        <p>全て({{ allTodosCount }})</p>
        <p>完了({{ doneTodosCount }})</p>
        <p>未完了({{ notDoneTodosCount }})</p>
      </li>
    </ul>
    <ul class="todo-list">
      <li v-for="todo in todos" :key="todo.id" class="todo-list__items">
        <p class="todo-list__title">{{ todo.title }}</p>
        <button class="todo-list__edit" @click="edit(todo.id)">編集</button>
      </li>
    </ul>
    <button class="todo-list__adder" @click="add()">＋</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  computed: {
    ...mapGetters(['doneTodos', 'notDoneTodos', 'allTodosCount', 'doneTodosCount', 'notDoneTodosCount']),
    todos() {
      return this.$store.state.todoData
    }
  },
  methods: {
    add() {
      this.$router.push('/add');
    },
    edit(id) {
      this.$router.push(`/edit/${id}`);
    }
  }
}
</script>

<style lang="scss">
.todo-header {
  position: relative;
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0 20px;
  padding: 0;

  &__items {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    transform: translate(150px, 85px);
    z-index: 1000;
    background-color: white;

    & p {
      margin: auto 10px;
    }
  }
}

.todo-list {
  list-style: none;
  margin: 0 20px;
  padding: 0;

  &__edit {
    outline: none;
    cursor: pointer;
    padding: 0px 10px;
    margin: 0px auto;
    font-weight: bold;
    border: 1px solid $cSubBlack;
    color: $cTextWhite;
    background-color: $cMainBlack;
  }

  &__adder {
    position: fixed;
    outline: none;
    cursor: pointer;
    width: 50px;
    height: 50px;
    right: 140px;
    bottom: 360px;
    margin: 0 auto;
    padding: 0;
    border-radius: 50%;
    font-size: 20px;
    font-weight: bold;
    border: 1px solid $cSubBlack;
    color: $cTextWhite;
    background-color: $cMainBlack;
  }
}
</style>