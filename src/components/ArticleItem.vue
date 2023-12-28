<script>
import { mapGetters, mapActions } from "vuex";

export default {
   name: "ArticleItem",
   props: {
      isProfit: {
         type: Boolean,
         required: true,
      },
      item: {
         type: Object,
         required: true,
      },
   },
   data: () => {
      return {
         dateString: "",
      };
   },
   computed: {
      ...mapGetters({
         STATE: "Balance/STATE",
      }),
   },
   mounted() {
      this.dateString = this.changeDateToString();
   },
   methods: {
      ...mapActions({
         DELETE_RECORD_BY_ID: "Records/DELETE_RECORD_BY_ID",
         DELETE_EXPENSE_IN_CATEGORY: "Categories/DELETE_EXPENSE_IN_CATEGORY",
         DELETE_INCOME: "Balance/DELETE_INCOME",
         RETURN_OUTCOME: "Balance/RETURN_OUTCOME",
         SET_MAX_VALUE: "Records/SET_MAX_VALUE",
      }),
      deleteRecord() {
         if (!this.isProfit) {
            this.RETURN_OUTCOME(this.item.amount);

            this.DELETE_EXPENSE_IN_CATEGORY({
               title: this.item.category,
               amount: this.item.amount,
            });
         } else {
            let currentBalance =
               Number(this.STATE.income) - Number(this.STATE.outcome);

            if (currentBalance >= this.item.amount) {
               this.DELETE_INCOME(this.item.amount);
            } else {
               alert("You can't go into the negative of your balance");
               return;
            }
         }

         this.DELETE_RECORD_BY_ID({
            id: this.item.id,
            amount: this.item.amount,
         });
         this.SET_MAX_VALUE();
      },
      changeDateToString() {
         return new Date(this.item.dateNumber).toLocaleDateString();
      },
   },
};
</script>

<template>
   <div class="item">
      <div class="">
         <h2 class="item__message">{{ item.message }} = {{ item.amount }}</h2>
         <div class="item__category_name" v-if="!isProfit">
            <p>{{ item.category }}</p>
         </div>
         <p class="item__date">{{ dateString }}</p>
      </div>
      <ButtonV1 :type="isProfit" @click="deleteRecord">delete</ButtonV1>
   </div>
</template>

<style scoped>
.item {
   width: 95%;
   margin: 10px auto;
   padding: 10px;

   display: flex;
   justify-content: space-between;

   border-radius: 16px;
   border: 1px solid #000;
}
.item__message {
   color: #47604b;
   font-size: 18px;
   font-weight: 700;
}
.item__category_name {
   margin: 10px 0px;
   padding: 5px 15px;

   border-radius: 24px;
   border: 1px solid #844154;
   background: #fff;
}
.item__category_name p {
   color: #bc5d78;
   font-size: 16px;
   font-weight: 600;
}
</style>
