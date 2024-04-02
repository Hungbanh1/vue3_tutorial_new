import { reactive, readonly } from "vue";

const state = reactive({
  count: 0,
});

const setCount = function () {
  state.count = 10;
};
export default { state: readonly(state, setCount) };
