<script>
export default {
   name: "CategoryItem",
   props: {
      title: {
         type: String,
         required: true,
      },
      amount: {
         type: Number,
         required: true,
      },
   },
};
</script>

<template>
   <div class="data_output_component">
      <p class="text">{{ title }}:</p>
      <p class="text">{{ amount }}$</p>
   </div>
</template>

<style scoped>
.data_output_component {
   padding: 12px 20px;
   display: flex;
   flex-direction: row;
   justify-content: space-between;

   border-radius: 12px;
}
.text {
   font-size: 16px;
   font-weight: 500;
}
</style>
