<template>
  <div>
    <label for="title">Title</label>
    <br>
    <input 
      type="text"
      id="title"
      @change="emitTitle"
    >
    <!-- <p>{{ title }}</p> -->
    <br><br>
    <label for="content">Content</label>
    <br>
    <textarea 
      id="content"
      @change="emitContent"
    ></textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      str: 'ken'
    }
  },
  computed: {
    // title() {
    //   return this.$store.state.todoData;
    // }
  },
  methods: {
    emitTitle(e) {
      this.$emit('todo-title', e.target.value)
    },
    emitContent(e) {
      this.$emit('todo-content', e.target.value)
    }
  }
}
</script>

<style lang="scss">
.form-container {  
  input {
    width: 400px;
  }

  textarea {
    width: 400px;
    height: 100px;
  }

  &__btn {
    outline: none;
    cursor: pointer;
    width: 400px;
    height: 100%;
    margin: 0 auto;
    padding: 10px 0;
    font-weight: bold;
    border: 1px solid $cSubBlack;
    color: $cTextWhite;
    background-color: $cMainBlack;
  }
}
</style>