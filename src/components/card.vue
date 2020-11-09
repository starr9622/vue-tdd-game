<template>
  <ul>
    <li v-for="(card, index) in cards" :key="index">
      <div
        :style="{
          background: card.matched ? `#fff` : card.select ? `#fff` : ''
        }"
        @click="card.matched || card.select ? '' : clickCard({ index })"
        v-html="card.select || card.matched ? card.value : ''"
      ></div>
    </li>
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
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 6rem;
  grid-gap: 1rem;
  padding: 1rem;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
  li {
    div {
      &::before {
        content: "";
        border: 1px solid #e1e1e1;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background: conic-gradient(
          #fff 0.25turn,
          #f1f1f1 0.25turn 0.5turn,
          #fff 0.5turn 0.75turn,
          #f1f1f1 0.75turn
        )
        top left / 25% 25% repeat;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      box-shadow: 0 0 0 1rem #fff inset;
    }
    position: relative;
  }
}
</style>
