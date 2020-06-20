<template>
  <div id="app">
    <header>
      <h1 @click="goList()">My Todos App</h1>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  methods: {
    goList() {
      this.$router.push('/', () => {});
    }
  },
  created() {
    this.$store.dispatch('todoCreate');
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  h1 {
    text-decoration: underline;
  }
}
</style>
