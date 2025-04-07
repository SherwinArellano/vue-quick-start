import { mount } from "@vue/test-utils";
import Counter from "./Counter.vue";

const buttonSelector = "button";

describe("Counter", () => {
  test("that it increments", async () => {
    const wrapper = mount(Counter);
    const button = wrapper.find(buttonSelector);

    expect(button.text()).toContain("0");

    await button.trigger("click");

    expect(button.text()).toContain("1");
  });
});
