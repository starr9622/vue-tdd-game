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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.cardWrap {
  width: 50%;
  margin: auto;
}
</style>
