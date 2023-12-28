<script>
import ArticleItem from "./ArticleItem.vue";
import TotalAmount from "./TotalAmount.vue";

export default {
   name: "Articles",
   components: {
      ArticleItem,
      TotalAmount,
   },
   props: {
      title: {
         type: String,
         required: true,
      },
      isProfit: {
         type: Boolean,
         required: true,
         default: false,
      },
      items: {
         type: Array,
         required: true,
      },
      isShown: {
         type: Boolean
      }
   },
   data: () => {
      return{
         totalAmount: 0,
      }
   },
   watch: {
      items(){
         this.totalAmount = this.getTotalAmount(this.items)
      },
      isShown(){
         this.totalAmount = this.getTotalAmount(this.items)
      }
   },
   methods: {
      getTotalAmount(items) {
         let totalAmount = 0
         for (let i = 0; i < items.length; i++) {
            totalAmount += Number(items[i].amount)
         }
         return totalAmount
      },
   },
};
</script>

<template>
   <div class="articles_wrapper">
      <h2>{{ title }} ARTICLES:</h2>
      <div class="none" v-if="items.length">
         <div class="articles_item__container">
            <ArticleItem
               v-for="item in items"
               :key="item.id"
               :isProfit="isProfit"
               :item="item"
            />
         </div>
         <TotalAmount
            typeOfAmount="Profit"
            :amount="totalAmount"
            :isProfit="isProfit"
         />
      </div>

      <div class="" v-else>
         <p>There are no records yet</p>
      </div>
   </div>
</template>

<style scoped>
.articles_wrapper {
   width: 355px;
   height: 880px;
   padding: 10px;

   border-radius: 24px;
   box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
}
.articles_item__container {
   height: 760px;
   overflow-y: scroll;
   margin-bottom: 20px;
}
</style>
