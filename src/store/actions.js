export default {
  clickCard({ state, commit }, { index }) {
    if (!state.select) commit("SELECT", index);
    if (state.cards[state.select].value === state.cards[index].value) {
      commit("EQUAL_CARD", index);
    } else {
      commit("SELECT_VACATE");
    }
  },
  startGame({ commit }) {
    commit("SHUFFLE");
  }
};
