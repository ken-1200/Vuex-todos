<template>
  <div class="form-container">
    <h2>Edit Todo</h2>
    <Form></Form>
    <button class="form-container__btn">編集</button>
  </div>
</template>

<script>
import Form from '../components/Form.vue'

export default {
  components: {
    Form
  }
}
</script>