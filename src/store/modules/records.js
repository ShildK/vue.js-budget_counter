import { uuid } from "vue3-uuid";

const name = "RECORDS";
const namespaced = true;
const state = {
   profits: [],
   expenses: [],
   maxValue: {},
};
const getters = {
   STATE: (state) => state,
   PROFITS: (state) => state.profits,
   EXPENSES: (state) => state.expenses,
};
const mutations = {
   SET_RECORDS_IN_STATE: (state, data) => {
      state.profits = data.profits;
      state.expenses = data.expenses;
   },
   SET_RECORD_PROFIT: (state, data) => {
      state.profits.push({ ...data, id: uuid.v1() });

      let profitsSortedByDate = state.profits.sort(function (a, b) {
         return b.dateNumber - a.dateNumber;
      });

      state.profits = profitsSortedByDate;

      localStorage.setItem(
         "records",
         JSON.stringify({ profits: state.profits, expenses: state.expenses })
      );
   },
   SET_RECORD_EXPENSE: (state, data) => {
      state.expenses.push({ ...data, id: uuid.v1() });

      let expensesSortedByDate = state.expenses.sort(function (a, b) {
         return b.dateNumber - a.dateNumber;
      });

      state.expenses = expensesSortedByDate;

      localStorage.setItem(
         "records",
         JSON.stringify({ profits: state.profits, expenses: state.expenses })
      );
   },
   DELETE_RECORD_BY_ID: (state, data) => {
      state.profits = state.profits.filter((record) => record.id !== data.id);
      state.expenses = state.expenses.filter((record) => record.id !== data.id);

      localStorage.setItem(
         "records",
         JSON.stringify({ profits: state.profits, expenses: state.expenses })
      );
   },
   SET_MAX_VALUE: (state, data) => {
      state.maxValue = data;
   },
};
const actions = {
   GET_RECORDS_FROM_LS: ({ commit }) => {
      const records = JSON.parse(localStorage.getItem("records")) || {
         profits: [],
         expenses: [],
      };

      let expensesSortedByDate = records.expenses.sort(function (a, b) {
         return b.dateNumber - a.dateNumber;
      });

      let profitsSortedByDate = records.profits.sort(function (a, b) {
         return b.dateNumber - a.dateNumber;
      });

      commit("SET_RECORDS_IN_STATE", {
         profits: profitsSortedByDate,
         expenses: expensesSortedByDate,
      });
   },
   SET_RECORD_PROFIT: ({ commit }, payload) => {
      commit("SET_RECORD_PROFIT", payload);
   },
   SET_RECORD_EXPENSE: ({ commit }, payload) => {
      commit("SET_RECORD_EXPENSE", payload);
   },
   DELETE_RECORD_BY_ID: ({ commit }, payload) => {
      commit("DELETE_RECORD_BY_ID", payload);
   },
   SET_MAX_VALUE: ({ state, commit }) => {
      if (!state.profits.length && !state.expenses.length) {
         commit("SET_MAX_VALUE", { maxProfit: 0, maxExpense: 0 });
         return;
      }

      if (!state.profits.length && state.expenses.length) {
         let expensesCopy = JSON.parse(JSON.stringify(state.expenses));
         const expensesSorted = expensesCopy.sort(function (a, b) {
            return b.amount - a.amount;
         });
         let maxExpense = Number(expensesSorted[0].amount);

         commit("SET_MAX_VALUE", { maxProfit: 0, maxExpense });
         return
      }

      if (state.profits.length && !state.expenses.length) {
         let profitsCopy = JSON.parse(JSON.stringify(state.profits));
         const profitSorted = profitsCopy.sort(function (a, b) {
            return b.amount - a.amount;
         });
         let maxProfit = Number(profitSorted[0].amount);

         commit("SET_MAX_VALUE", { maxProfit, maxExpense: 0 });
         return
      }

      let profitsCopy = JSON.parse(JSON.stringify(state.profits));
      const profitSorted = profitsCopy.sort(function (a, b) {
         return b.amount - a.amount;
      });
      let maxProfit = Number(profitSorted[0].amount);

      let expensesCopy = JSON.parse(JSON.stringify(state.expenses));
      const expensesSorted = expensesCopy.sort(function (a, b) {
         return b.amount - a.amount;
      });
      let maxExpense = Number(expensesSorted[0].amount);

      commit("SET_MAX_VALUE", { maxProfit, maxExpense });
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
