import Vue from "vue";
import Hello from "../../../src/views/Landing";

describe("Landing.vue", () => {
  it("should render correct contents", () => {
    const Constructor = Vue.extend(Hello);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector(".hello h1").textContent).toEqual(
      "Welcome to Your Vue.js App"
    );
  });
});