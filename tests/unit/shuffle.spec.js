import store from "../../src/store";
// import { createLocalVue, shallowMount } from "@vue/test-utils";

describe("vuex 데이터 확인", () => {
  it("셔플테스트 - shuffle을 통해 랜덤한 순서를 가진 card 반환", () => {
    const { shuffle } = store.getters;
    const { card } = store.state;
    let cardList = shuffle;
    expect(cardList).not.toEqual(card);
  });

  it("셔플 카드 클릭 이벤트 확인", () => {});
});
