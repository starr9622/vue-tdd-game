<template>
  <ul>
    <li v-for="(index, card) in cards" :key="index" @click="clickCard(card)">
      {{ card }}
    </li>
  </ul>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: mapGetters({
    cards: "shuffle"
  }),
  methods: mapActions("clickCard")
};
</script>

<style></style>
