export default {
  SELECT(state, index) {
    if (state.select !== null) state.cards[state.select].select = false;
    state.select = index;
    state.cards[state.select].select = true;
  },
  SELECT_VACATE(state, index) {
    state.cards[index].select = true;
    setTimeout(() => {
      state.cards[index].select = false;
      state.cards[state.select].select = false;
      state.select = null;
    }, 300);
  },
  MATCHED_CARD(state, index) {
    state.cards[state.select].select = false;
    state.cards[state.select].matched = true;
    state.cards[index].matched = true;
    state.select = null;
  },
  SHUFFLE(state) {
    let array = state.cards;
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  },
  CARD_INSERT(state, card) {
    state.cards = [];
    const items = [...card].concat(card);
    items.map(item => {
      state.cards.push({
        value: item,
        select: false,
        matched: false
      });
    });
  }
};
