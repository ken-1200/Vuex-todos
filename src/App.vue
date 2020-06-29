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
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 1100;

  h1 {
    border-bottom: solid 3px $cVueGreen;
    cursor: pointer;
    margin-bottom: 0;
  }
}

main {
  padding: 80px 0;

  h2 {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    transform: translate(10px, 60px);
    color: $cSubBlack;
    border-bottom: solid 3px $cVueGreen;
    margin: 0;
    padding: 20px 0 0;
    background-color: white;
    z-index: 1000;
  }
}
</style>
