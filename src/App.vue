<script>
import { mapActions, mapGetters } from "vuex";

import initializeApp from "./mixin/initializeApp.js";
import BudgetController from "./components/BudgetController.vue";
import Articles from "./components/Articles.vue";

export default {
   components: {
      BudgetController,
      Articles,
   },
   mixins: [initializeApp],
   data: () => {
      return {
         isProfit: true,
         isShown: false,
      }
   },
   computed: {
      ...mapGetters({
         STATE: "Records/STATE",
      }),
   },
   mounted() {
      this.initApp();
   },
   methods: {
      ...mapActions({}),
      showModal() {
         this.isShown = !this.isShown;
      },
   },
};
</script>

<template>
   <div class="container">
      <BudgetController :isShown="isShown" :showModal="showModal" />
      <Articles
         :title="'PROFITS'"
         :isProfit="isProfit"
         :items="STATE.profits"
         :isShown="isShown"
      />
      <Articles
         :title="'EXPENSES'"
         :isProfit="!isProfit"
         :items="STATE.expenses"
         :isShown="isShown"
      />
   </div>
</template>

<style>
body {
   background-color: #e3e3e3;
}
.container {
   width: 1440px;
   padding: 40px;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
}
</style>
