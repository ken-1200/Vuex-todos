<template>
  <div class="form-container">
    <h2>Add Todo</h2>
    <Form v-bind.sync="todo"></Form>
    <button @click="adder" class="form-container__btn">追加</button>
  </div>
</template>

<script>
import Form from '../components/Form.vue'

export default {
  data() {
    return {
      todo: {
        title: '',
        content: ''
      }
    }
  },
  methods: {
    adder() {
      this.$store.dispatch('createTodos', this.todo);//ここにtitle, contentをまとめて送る
      this.$router.push('/');//Home.vueに遷移する
    }
  },
  components: {
    Form
  }
}
</script>