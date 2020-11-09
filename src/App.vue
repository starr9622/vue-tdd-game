<template>
  <div class="cardWrap">
    <card></card>
  </div>
</template>

<script>
import card from "./components/card";
export default {
  name: "App",
  components: {
    card
  },
  mounted() {
    this.$store.dispatch("startGame", 8);
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.cardWrap {
  width: 100%;
  max-width: 40rem;
  margin: 10% auto;
}
</style>
