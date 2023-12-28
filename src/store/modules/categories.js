import { uuid } from "vue3-uuid";

const name = "CATEGORIES";
const namespaced = true;
const state = {
   categories: [],
};
const getters = {
   STATE: (state) => state,
   CATEGORIES: (state) => state.categories,
};

const mutations = {
   SET_CATEGORIES_IN_STATE: (state, data) => {
      state.categories = data;
   },
   SET_CATEGORY: (state, data) => {
      state.categories.push({
         id: uuid.v1(),
         title: data,
         amount: 0,
      });
      localStorage.setItem("categories", JSON.stringify(state.categories));
   },
   SET_NEW_EXPENSE_IN_CATEGORY: (state, data) => {
      if(data.amount < 0) return;

      state.categories.forEach(category => {
         if(category.title === data.title){
            category.amount += Number(data.amount);
         }
      });
      localStorage.setItem("categories", JSON.stringify(state.categories));
   },
   DELETE_EXPENSE_IN_CATEGORY: (state, data) => {
      state.categories.forEach(category => {
         if(category.title === data.title){
            category.amount -= Number(data.amount);
         }
      });
      
      localStorage.setItem("categories", JSON.stringify(state.categories));
   },
};

const actions = {
   GET_CATEGORIES_FROM_LS: ({ commit }) => {
      const categories = JSON.parse(localStorage.getItem("categories")) || [
         { id: 1, title: "Food Products", amount: 0 },
         { id: 2, title: "Travel Catedory", amount: 0 },
         { id: 3, title: "Heilth Category", amount: 0 },
         { id: 4, title: "Clothes Category", amount: 0 },
      ];
      commit("SET_CATEGORIES_IN_STATE", categories);
   },
   SET_CATEGORY: ({ commit }, payload) => {
      commit("SET_CATEGORY", payload);
   },
   SET_NEW_EXPENSE_IN_CATEGORY: ({ commit }, payload) => {
      commit("SET_NEW_EXPENSE_IN_CATEGORY", payload);
   },
   DELETE_EXPENSE_IN_CATEGORY: ({ commit }, payload) => {
      commit("DELETE_EXPENSE_IN_CATEGORY", payload);
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
