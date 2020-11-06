import store from "../../src/store";

describe("vuex 데이터 확인", () => {
  it("vuex 값 등록 테스트 등록한 배열 복사하여 반환", () => {
    const array = [1, 2, 3, 4, 5];
    store.commit("CARD_INSERT", array);
    const { cards } = store.state;
    expect(cards.length).toBe(array.length * 2);
  });

  beforeEach(() => {
    store.commit("CARD_INSERT", [1, 2, 3, 4]);
  });

  it("셔플테스트 - shuffle을 통해 랜덤한 순서를 가진 card 반환", async () => {
    const { cards } = store.state;
    let before = [...cards];
    store.commit("SHUFFLE");
    expect(before).not.toEqual(cards);
  });

  it("셔플 카드 클릭 이벤트 확인", () => {
    // store.commit("CARD_INSERT", [1, 2, 3, 4]);
    // const wrapper = shallowMount(Card);
    // const li = wrapper.findAll("li");
    // console.log(li);
    // li.trigger("click");
  });
});
