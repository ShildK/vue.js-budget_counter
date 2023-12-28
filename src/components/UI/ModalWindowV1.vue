<script>
export default {
   name: "ModalWindowV1",
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
      isAddButton: {
         type: Boolean,
         requred: true,
      },
   },
   data: () => {
      return {
         message: "",
         amount: null,
         optionValue: "",
         currentDate: "",
         date: "",
      };
   },
   mounted() {
      this.setCurrentDate();
   },
   methods: {
      changeSelectedOption(value) {
         this.optionValue = value;
      },
      setCurrentDate() {
         var currentDate = new Date();

         let year = currentDate.getFullYear();

         let month = currentDate.getMonth() + 1;
         if (month < 10) {
            month = "0" + month;
         }

         let day = currentDate.getDate();
         if (day < 10) {
            day = "0" + day;
         }

         let formattedDate = `${year}-${month}-${day}`;

         this.currentDate = formattedDate;
         this.date = formattedDate;
      },
      clearInputs() {
         this.message = "";
         this.amount = "";
         this.date = this.currentDate;
         this.optionValue = "";
      },
      addProfit() {
         this.$emit("add-new-profit", this.message, this.amount, this.date);
         this.clearInputs();
         this.changeShow();
      },
      addExpense() {
         this.$emit("add-expense", this.message, this.amount, this.optionValue, this.date);
         this.clearInputs();
         this.changeShow();
      },
   },
};
</script>

<template>
   <div class="modal" v-if="show" @click.self="changeShow">
      <div class="modal_content">
         <div class="modal_input" v-if="isAddButton">
            <InputV1
               :value="message"
               :placeholder="'Write your message about profit'"
               @change-value="(v) => (message = v)"
            />
            <InputV1
               :value="amount"
               :placeholder="'Write your profit'"
               @change-value="(v) => (amount = v)"
            />
            <input
               class="input_date"
               type="date"
               v-model="date"
               :max="currentDate"
            />
            <div class="btns">
               <ButtonV1 @click="changeShow">Close</ButtonV1>
               <ButtonV1
                  class="btn"
                  @click="addProfit"
                  >Add</ButtonV1
               >
            </div>
         </div>
         <div class="modal_input" v-else>
            <InputV1
               :value="message"
               :placeholder="'Write your message about expense'"
               @change-value="(v) => (message = v)"
            />
            <InputV1
               :value="amount"
               :placeholder="'Write your expense'"
               @change-value="(v) => (amount = v)"
            />
            <SelectV1
               :value="optionValue"
               @change-value="changeSelectedOption"
            />
            <input
               class="input_date"
               type="date"
               v-model="date"
               :max="currentDate"
            />
            <div class="btns">
               <ButtonV1 @click="changeShow">Close</ButtonV1>
               <ButtonV1
                  class="btn"
                  @click="addExpense"
                  >Add</ButtonV1
               >
            </div>
         </div>
         <slot></slot>
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
.modal_input {
   display: flex;
   flex-direction: column;
}
.btns {
   display: flex;
   justify-content: center;
   margin-top: 20px;
}
.btn {
   width: 120px;
}
.input_date {
   padding: 10px;
   margin: 5px 0;
   border-radius: 5px;
   border: 1px solid grey;
}
</style>
