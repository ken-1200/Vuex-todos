<template>
  <div class="form-container">
    <h2>Add Todo</h2>
    <Form @todo-title="setTitleInfo" @todo-content="setContentInfo"></Form>
    <button @click="adder" class="form-container__btn">追加</button>
  </div>
</template>

<script>
import Form from '../components/Form.vue'

export default {
  data() {
    return {
      title: '',
      content: ''
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
      let todo = {
        title: this.title,
        content: this.content
      }
      this.$store.dispatch('createTodos', todo);//ここにtitle, contentをまとめて送る
      this.$router.push('/');//Home.vueに遷移する
      console.log(this.$store.state.todoData);
    }
  },
  components: {
    Form
  }
}
</script>