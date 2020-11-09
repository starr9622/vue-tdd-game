export default {
  clickCard({ state, commit }, { index }) {
    if (state.select === null) {
      commit("SELECT", index);
    } else {
      if (state.cards[state.select].value === state.cards[index].value) {
        commit("MATCHED_CARD", index);
      } else {
        commit("SELECT_VACATE", index);
      }
    }
  },
  startGame({ commit }, payload) {
    let array = [];
    let basic = parseInt("1F345", 16);
    console.log(basic);
    for (let i = 0; i < payload; i++) {
      basic += i;
      array.push(`&#x${basic.toString(16)}`);
    }
    commit("CARD_INSERT", array);
    commit("SHUFFLE");
  }
};
