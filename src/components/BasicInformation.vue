<script>
export default {
   name: "BasicInformation",
   props: {
      changeShowProfit: {
         type: Function,
         required: true,
      },
      changeShowExpense: {
         type: Function,
         required: true,
      },
      balance: {
         type: Number,
         required: true
      }
   },
   data: () => {
      return {
         isAddProfit: true,
      };
   },
};
</script>

<template>
   <div class="balance_card">
      <div class="balance_card__amount">
         <h2>BALANCE:</h2>
         <p>{{ balance }} $</p>
      </div>
      <img class="balance_card__icon" src="../assets/wallet.png" alt="" />
      <div class="btns">
         <ButtonV1 :type="!isAddProfit" @click="changeShowProfit"
            >add profit</ButtonV1
         >
         <ButtonV1 :type="isAddProfit" @click="changeShowExpense"
            >add expense</ButtonV1
         >
      </div>
   </div>
</template>

<style scoped>
.balance_card {
   position: relative;

   width: 100%;
   margin: 0 auto;

   display: flex;
   align-items: center;
   justify-content: space-between;
}
.balance_card__amount {
   width: 250px;
   height: 150px;
   padding: 10px 20px;

   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 10px;

   border-radius: 8px;
   background: #fff;
}
.balance_card__amount p {
   color: #55885d;

   font-size: 50px;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
   text-align: center;
}
.balance_card__icon {
   position: absolute;
   top: -40px;
   left: 215px;
}
.btns {
   display: flex;
   flex-direction: column;
}
.btn {
   width: 200px;
   font-size: 20px;
}
.green {
   border-radius: 16px;
   border: 3px solid #3c5f41;
   background: #55885d;
}
.pink {
   border-radius: 16px;
   border: 3px solid #844154;
   background: #bc5d78;
}
</style>
