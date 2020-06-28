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
    setTitleInfo(value) {
      this.title = value;
      console.log(this.title);
    },
    setContentInfo(value) {
      this.content = value;
      console.log(this.content);
    },
    adder() {
      console.log(this.todo);//add内のdataを変更して表示している。
      this.$store.dispatch('createTodos', this.todo);//ここにtitle, contentをまとめて送る
      this.$router.push('/');//Home.vueに遷移する
      console.log(this.$store.state.todoData);
    }
  },
  components: {
    Form
  }
}
</script>