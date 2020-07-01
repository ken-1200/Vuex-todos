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
      <li v-for="todo in todos" :key="todo.id" class="todo-list__items" @click="changeDone(todo.id)">
        <div :class="['todo-list__checkbox', { 'click': todo.done }]"/>
          <p :class="['todo-list__text', { 'click': todo.done}]">{{ todo.title }}</p>
          <button class="todo-list__edit" @click.stop="edit(todo.id)">編集</button>
          <button class="todo-list__delete" @click.stop="del(todo.id)">削除</button>
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
    },
    del(id) {
      this.$store.dispatch('deleteTodos', id)
    },
    changeDone(id) {
      this.$store.dispatch('changeDoneTodos', id)
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

  &__items {
    padding: 5px 10px;
    border-top: 1px solid #ddd;
    transition: background-color 0.75s;

    &:hover {
      background-color: #f6f6f6;
    }
    &:nth-last-child(1) {
      border-bottom: 1px solid #ddd;
    }
  }

  &__checkbox {
    cursor: pointer;
    position: relative;
    margin: auto 10px;
    width: 15px;
    height: 15px;
    border: 1px solid #ddd;
    border-radius: 50%;
    display: inline-block;
    transition: all 0.75s;

    &::before {
      content: "✔︎";
      position: absolute;
      top: -5px;
      left: 3px;
      color: transparent;
      transition: all 0.75s;
    }

    &.click {
      background-color: $cVueGreen;
      &::before {
        color: $cSubBlack;
      }
    }
  }

  &__text {
    cursor: pointer;
    display: inline-block;
    margin: 1em 0;

    &.click {
      text-decoration: line-through;
      transition: all 0.75s;
    }
  }

  &__edit {
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    padding: 0px 10px;
    margin: 0px 20px;
    font-weight: bold;
    border: 1px solid $cSubBlack;
    color: $cTextWhite;
    background-color: $cMainBlack;
    transition: all 0.75s;
    
    &:hover {
      opacity: 0.8;
    }
  }

  &__delete {
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    padding: 0px 10px;
    margin: 0px auto;
    font-weight: bold;
    border: 1px solid $cSubBlack;
    color: $cTextWhite;
    background-color: $cMainBlack;
    transition: all 0.75s;

    &:hover {
      opacity: 0.8;
    }
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
    transition: all 0.75s;

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>