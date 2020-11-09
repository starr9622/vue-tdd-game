<template>
  <ul>
    <li
      v-for="(card, index) in cards"
      :key="index"
      :style="{
        background: card.matched ? `#fff` : card.select ? `#fff` : ''
      }"
      @click="card.matched || card.select ? '' : clickCard({ index })"
      v-html="card.select || card.matched ? card.value : ''"
    ></li>
  </ul>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: mapState(["cards"]),

  methods: mapActions(["clickCard", "startGame"])
};
</script>

<style lang="scss" scoped>
ul {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 12rem;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  padding: 0;
  margin: 0;
  list-style: none;
  justify-items: center;
  align-items: center;
  margin: auto;
  li {
    &::before {
      content: "";
      border: 1px solid #e1e1e1;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    position: relative;
    background: conic-gradient(
        #fff 0.25turn,
        #f1f1f1 0.25turn 0.5turn,
        #fff 0.5turn 0.75turn,
        #f1f1f1 0.75turn
      )
      top left / 25% 25% repeat;
    height: 100%;
    width: 12rem;
    box-shadow: 0 0 0 1rem #fff inset;
    font-size: 8rem;
    text-align: center;
    padding: 1rem;
    box-sizing: border-box;
  }
}
</style>
