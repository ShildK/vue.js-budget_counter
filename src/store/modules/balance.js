const name = "BALANSE";
const namespaced = true;
const state = {
   income: 0,
   outcome: 0,
};
const getters = {
   STATE: (state) => state,
   INCOME: (state) => state.income,
   OUTCOME: (state) => state.outcome,
};
const mutations = {
   SET_BALANCE: (state, data) => {
      state.income = data.income
      state.outcome = data.outcome
   },
   SET_INCOME: (state, data) => {
      state.income += data;
      setTimeout(() => {
         localStorage.setItem(
            "balance",
            JSON.stringify({ income: state.income, outcome: state.outcome })
         );
      }, 100);
   },
   SET_OUTCOME: (state, data) => {
      state.outcome += data;
      localStorage.setItem(
         "balance",
         JSON.stringify({ income: state.income, outcome: state.outcome })
      );
   },
   DELETE_INCOME: (state, data) => {
      state.income -= data;
      localStorage.setItem(
         "balance",
         JSON.stringify({ income: state.income, outcome: state.outcome })
      );
   },
   RETURN_OUTCOME: (state, data) => {
      state.outcome -= data;
      localStorage.setItem(
         "balance",
         JSON.stringify({ income: state.income, outcome: state.outcome })
      );
   },
};
const actions = {
   GET_BALANSE_FROM_LS: ({commit}) => {
      const balance = JSON.parse(localStorage.getItem("balance")) || {income: 0, outcome: 0};
      commit("SET_BALANCE", balance);
   },
   SET_INCOME: async ({ commit }, payload) => {
      commit("SET_INCOME", payload);
   },
   SET_OUTCOME: async ({ commit }, payload) => {
      commit("SET_OUTCOME", payload);
   },
   DELETE_INCOME: async ({ commit }, payload) => {
      commit("DELETE_INCOME", payload);
   },
   RETURN_OUTCOME: async ({ commit }, payload) => {
      commit("RETURN_OUTCOME", payload);
   },
};

export default {
   name,
   namespaced,
   state,
   getters,
   mutations,
   actions,
};
