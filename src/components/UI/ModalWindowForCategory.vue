<script>
export default {
   name: "ModalWindowForCategory",
   props: {
      show: {
         type: Boolean,
         required: true,
         default: false,
      },
      changeShow: {
         type: Function,
         required: true,
      },
   },
   data: () => {
      return {
         categoryName: "",
      };
   },
   methods: {
      addNewCategory() {
         this.$emit("add-new-category", this.categoryName);
         this.categoryName = "";
         this.changeShow();
      },
   },
};
</script>

<template>
   <div class="modal" v-if="show" @click.self="changeShow">
      <div class="modal_content">
         <InputV1
            :value="categoryName"
            :placeholder="'Write category name'"
            @change-value="(v) => (categoryName = v)"
         />
         <div class="btns">
            <ButtonV1 @click="changeShow" class="btn">Close</ButtonV1>
            <ButtonV1
               @click="addNewCategory"
               class="btn"
               :disabled="!categoryName"
               >Add category</ButtonV1
            >
         </div>
      </div>
   </div>
</template>

<style scoped>
.modal {
   top: 0;
   bottom: 0;
   right: 0;
   left: 0;
   position: fixed;
   display: flex;
   flex-direction: column;
   background: rgba(0, 0, 0, 0.5);
}
.modal_content {
   width: 30%;
   margin: auto;
   background: white;
   border-radius: 12px;
   min-height: 50px;
   min-width: 200px;
   padding: 20px;
}

.btns {
   display: flex;
   justify-content: center;
   margin-top: 20px;
}
.btn {
   width: 120px;
}
</style>
