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
header {
  h1 {
    border-bottom: solid 3px $cVueGreen;
    cursor: pointer;
  }
}

main {
  margin-left: 10px;
  
  h2 {
    color: $cSubBlack;
    border-bottom: solid 3px $cVueGreen;
  }
}
</style>
