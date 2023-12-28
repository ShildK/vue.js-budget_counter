<script>
import { mapActions, mapGetters } from "vuex";
import initializeApp from "../mixin/initializeApp.js";
import CategoryItem from "./CategoryItem.vue";

export default {
   name: "Categories",
   components: {
      CategoryItem,
   },
   props: {
      maxProfit: {
         type: Number,
         required: true,
         default: 0
      },
      maxExpense: {
         type: Number,
         required: true,
         default: 0
      },
   },
   mixins: [initializeApp],
   data: () => {
      return {
         isShown: false,
      };
   },
   computed: {
      ...mapGetters({
         STATE_CATEGORIES: "Categories/STATE",
         STATE_RECORDS: "Records/STATE",
      }),
   },
   mounted() {
      this.initApp();
   },
   methods: {
      ...mapActions({
         SET_CATEGORY: "Categories/SET_CATEGORY",
      }),
      addNewCategory(newCategory) {
         const isCategoryExists = this.STATE_CATEGORIES.categories.find(
            (category) =>
               category.title.toUpperCase() === newCategory.toUpperCase()
         );
         if (!isCategoryExists) {
            this.SET_CATEGORY(newCategory);
         } else {
            alert("This category already exists");
         }
      },
      showModal() {
         this.isShown = !this.isShown;
      },
   },
};
</script>

<template>
   <div class="contain">
      <ModalWindowForCategory
         :show="isShown"
         :changeShow="showModal"
         @add-new-category="addNewCategory"
      ></ModalWindowForCategory>
      <div class="max_amount" >
         <CategoryItem
            class="max_amount_data"
            title="MAX PROFIT"
            :amount="maxProfit"
         />
         <CategoryItem
            class="max_amount_data"
            title="MAX EXPENSE"
            :amount="maxExpense"
         />
      </div>
      <button class="add_category" @click="showModal">+</button>
      <div class="categories_container">
         <div
            class="category_wrapper"
            v-for="category in STATE_CATEGORIES.categories"
            :key="category.id"
         >
            <CategoryItem
               class="categories_item"
               :title="category.title"
               :amount="category.amount"
            />
         </div>
      </div>
   </div>
</template>

<style scoped>
.contain {
   margin-top: 35px;
}
.max_amount {
   display: flex;
   margin-bottom: 20px;
}
.max_amount_data {
   width: 245px;
   margin: 0 5px 0 5px;
   background: #55885d;
   color: #fff;
}
.add_category {
   width: 95%;
   margin: 10px 0;

   display: flex;
   justify-content: center;
   border-radius: 12px;
   background: #fff;
   border: none;

   color: #47604b;

   font-size: 38px;
   font-weight: 700;
}
.categories_container {
   width: 100%;
   height: 490px;
   overflow-y: scroll;
}
.category_wrapper {
   display: flex;
   justify-content: space-between;
   align-items: center;
}
.categories_item {
   width: 98%;
   background-color: #fff;
   margin: 0 0 10px;

   color: #47604b;
   font-size: 16px;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
}
</style>
