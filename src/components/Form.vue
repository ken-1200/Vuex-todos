<template>
  <div>
    <label for="title">Title</label>
    <br>
    <input 
      type="text"
      id="title"
      :value="readTitle"
      @change="sendTitle"    
    >
    <!-- <p>{{ title }}</p> -->
    <br><br>
    <label for="content">Content</label>
    <br>
    <textarea 
      id="content"
      :value="readContent"
      @change="sendContent"
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
    readTitle() {
      return this.title
    },
    readContent() {
      return this.content
    }
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