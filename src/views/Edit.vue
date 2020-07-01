<template>
  <div class="form-container">
    <h2>Edit Todo</h2>
    <Form v-bind.sync="todo"></Form>
    <button @click="editer" class="form-container__btn">編集</button>
  </div>
</template>

<script>
import Form from '../components/Form.vue'

export default {
  data() {
    return {
      todo: {
        id: '',
        title: '',
        content: '',
        done: false
      }
    }
  },
  methods: {
    editer() {
      this.$store.dispatch('updateTodos', this.todo);
      this.$router.push('/');
    }
  },
  created() {
    //公式を参照....関数を返り値にすることで、ゲッターに引数を渡すこともできます。これは特にストアの中の配列を検索する時に役立ちます
    //data内のtodoオブジェクトをクリエイトされるタイミングで、gettersの値を代入
    //代入された値をv-bind.sync="todo"で双方向データバインディングする
    //form.vueのpropsに送る
    this.todo = this.$store.getters.getTodoById(Number(this.$route.params.id));
  },
  components: {
    Form
  }
}
</script>