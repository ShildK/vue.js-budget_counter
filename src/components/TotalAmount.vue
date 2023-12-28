<script>
export default {
   name: "TotalAmount",
   props: {
      typeOfAmount: {
         type: String,
         required: true,
      },
      amount: {
         type: Number,
         required: true,
      },
      isProfit: {
         type: Boolean,
         required: true,
      },
   },
};
</script>

<template>
   <div
      :class="[
         isProfit ? 'container__green' : 'contaier__pink',
         'total_amount__container',
      ]"
   >
      <p class="text">Total {{ typeOfAmount }} Amount = {{ amount }} $</p>
   </div>
</template>

<style scoped>
.total_amount__container {
   display: flex;
   padding: 10px;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   border-radius: 16px;
}
.container__green {
   background: #55885d;
}
.contaier__pink {
   background: #bc5d78;
}
.text {
   color: #fff;

   font-family: Istok Web;
   font-size: 16px;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
}
</style>
