import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      count: 123,
      transaction: null,
      // transactions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      transactions: [],
      errors: null,
    };
  },
  //bao toan du lieu
  getters: {
    transactionsFilter(state) {
      return state.transactions.filter((transaction) => transaction % 2 === 0);
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setTransaction(state, transactionPayload) {
      state.transaction = transactionPayload;
    },
    setTransactions(state, transactionsPayLoad) {
      state.transactions = transactionsPayLoad;
    },
    setError(state, errorPayload) {
      state.error = errorPayload;
    },
  },
  actions: {
    // fetchPost(ctx, { id }) {
    async fetchTransaction({ commit }, { id }) {
      const res = await fetch("http://localhost:3000/transactions/" + id);
      const data = await res.json();

      commit("setTransaction", data);
    },
    async fetchAllTransactions({ commit }) {
      try {
        const response = await fetch("http://localhost:3000/transactions");

        if (!response.ok)
          throw new Error("Something went wrong, please try again");

        const data = await response.json();
        commit("setTransactions", data);
      } catch (err) {
        commit("setError", err.message);
        console.log(err);
      }
    },
  },
});
export default store;
