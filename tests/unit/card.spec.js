import store from "../../src/store";
import Card from "../../src/components/card.vue";
import { shallowMount } from "@vue/test-utils";

describe("vuex 데이터 확인", () => {
  it("vuex 값 등록 테스트 등록한 배열 복사하여 반환", () => {
    const array = [1, 2, 3, 4, 5];
    store.commit("CARD_INSERT", array);
    const { cards } = store.state;
    expect(cards.length).toBe(array.length * 2);
  });

  it("셔플테스트 - shuffle을 통해 랜덤한 순서를 가진 card 반환", async () => {
    store.commit("CARD_INSERT", [1, 2, 3, 4, 5]);
    const { cards } = store.state;
    let before = [...cards];
    store.commit("SHUFFLE");
    expect(before).not.toEqual(cards);
  });
});

describe("card component 확인", () => {
  beforeEach(() => {
    store.commit("CARD_INSERT", [1, 2, 3, 4]);
    store.commit("SHUFFLE");
  });
  it("클릭 이벤트 확인(셀렉 카드가 없을 경우)", () => {
    const wrapper = shallowMount(Card, { store });
    const selectIndex = 0;
    const li = wrapper.findAll("li").at(selectIndex);
    li.find("div").trigger("click");
    wrapper.vm.$nextTick(() => {
      expect(li.find("div").text()).not.toBeNull();
      expect(store.state.cards[selectIndex].select).toBe(true);
      expect(store.state.cards[selectIndex].matched).toBe(false);
    });
  });
  it("셀렉 카드가 있을 경우 ,동일한 값을 가진 카드를 선택한 경우 ", () => {
    store.commit("SELECT", 0);
    const wrapper = shallowMount(Card, { store });
    const selectIndex = store.state.cards.findIndex(
      e => store.state.cards[0].value === e.value && !e.select
    );
    const li = wrapper.findAll("li").at(selectIndex);
    li.find("div").trigger("click");
    wrapper.vm.$nextTick(() => {
      expect(store.state.cards[selectIndex].matched).toBeTruthy();
      expect(store.state.select).toBeNull();
    });
  });
  it("셀렉 카드가 있을 경우 ,동일하지 않은 값을 가진 카드를 선택한 경우 ", () => {
    store.commit("SELECT", 0);
    const wrapper = shallowMount(Card, { store });
    const selectIndex = store.state.cards.findIndex(
      e => store.state.cards[0].value !== e.value && !e.select
    );
    const li = wrapper.findAll("li").at(selectIndex);
    li.find("div").trigger("click");
    wrapper.vm.$nextTick(() => {
      setTimeout(() => {
        expect(store.state.cards[selectIndex].matched).not.toBeTruthy();
        expect(store.state.select).toBeNull();
      }, 300);
    });
  });
});
