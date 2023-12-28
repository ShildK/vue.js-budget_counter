<script>
import { mapActions, mapGetters } from "vuex";

import Categories from "./Categories.vue";
import BasicInformation from "./BasicInformation.vue";

export default {
   name: "BudgetController",
   components: {
      BasicInformation,
      Categories,
   },
   props: {
      isShown: {
         type: Boolean,
      },
      showModal: {
         type: Function,
      },
   },
   data: () => {
      return {
         isAddButton: true,
      };
   },
   computed: {
      ...mapGetters({
         STATE: "Balance/STATE",
         STATE_RECORDS: "Records/STATE",
      }),
   },
   methods: {
      ...mapActions({
         SET_INCOME: "Balance/SET_INCOME",
         SET_OUTCOME: "Balance/SET_OUTCOME",
         SET_RECORD_PROFIT: "Records/SET_RECORD_PROFIT",
         SET_RECORD_EXPENSE: "Records/SET_RECORD_EXPENSE",
         SET_MAX_VALUE: "Records/SET_MAX_VALUE",
         SET_NEW_EXPENSE_IN_CATEGORY: "Categories/SET_NEW_EXPENSE_IN_CATEGORY",
      }),
      showModalWindow() {
         this.showModal();
      },
      showModalProfit() {
         this.showModal();
         this.isAddButton = true;
      },
      showModalExpense() {
         this.showModal();
         this.isAddButton = false;
      },
      addNewProfit(message, amount, date) {
         let dateNumber = new Date(date).getTime();
         if (Number(amount) / 1 && message !== "") {
            this.SET_INCOME(Number(amount));
            this.SET_RECORD_PROFIT({ message, amount, dateNumber });
         } else {
            alert("Fill in everything correctly");
         }
         this.SET_MAX_VALUE();
      },
      addExpense(message, amount, category, date) {
         let dateNumber = new Date(date).getTime();
         let currentBalance =
            Number(this.STATE.income) - Number(this.STATE.outcome);

         if (currentBalance < amount) {
            alert("You don't have enough funds");
            return;
         }

         if (Number(amount) / 1 && category !== "" && message !== "") {
            this.SET_OUTCOME(Number(amount));
            this.SET_NEW_EXPENSE_IN_CATEGORY({ title: category, amount });
            this.SET_RECORD_EXPENSE({ message, amount, category, dateNumber });
         } else {
            alert("Fill in everything correctly");
         }

         this.SET_MAX_VALUE();
      },
   },
};
</script>

<template>
   <div class="controller_wrapper">
      <ModalWindowV1
         :show="isShown"
         :changeShow="showModalWindow"
         @add-new-profit="addNewProfit"
         @add-expense="addExpense"
         :isAddButton="isAddButton"
      />
      <BasicInformation
         :balance="Number(STATE.income) - Number(STATE.outcome)"
         :changeShowProfit="showModalProfit"
         :changeShowExpense="showModalExpense"
      />
      <Categories
         :maxProfit="STATE_RECORDS.maxValue.maxProfit"
         :maxExpense="STATE_RECORDS.maxValue.maxExpense"
      />
   </div>
</template>

<style scoped>
.controller_wrapper {
   width: 600px;
   height: 880px;

   border-radius: 24px;
   box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);

   padding: 50px;
}
.max_amount {
   display: flex;
   justify-content: space-around;
   margin-top: 50px;
}
.max_amount_data {
   width: 245px;
}
</style>
