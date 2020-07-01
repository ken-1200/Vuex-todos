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
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
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
    sendTitle(e) {
      this.$emit('update:title', e.target.value);
    },
    sendContent(e) {
      this.$emit('update:content', e.target.value)
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