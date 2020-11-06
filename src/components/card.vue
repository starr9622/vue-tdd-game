<template>
  <ul>
    <li
      v-for="(card, index) in cards"
      :key="index"
      @click="clickCard({ index })"
    >
      {{ card.select ? card.value : 0 }}
    </li>
  </ul>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: mapState(["cards"]),
  mounted() {
    this.$store.commit("CARD_INSERT", [1, 2, 3, 4]);
  },
  methods: mapActions(["clickCard"])
};
</script>

<style></style>
