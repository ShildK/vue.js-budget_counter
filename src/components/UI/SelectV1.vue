<script>
import { mapGetters } from "vuex";

export default {
   name: "SelectV1",
   props: {
      value: {
         type: String,
      },
   },
   computed: {
      ...mapGetters({
         STATE: "Categories/STATE",
      }),
   },
};
</script>

<template>
   <select :value="value" @change="$emit('change-value', $event.target.value)">
      <option disabled value="" selected>Выберите из списка</option>
      <option
         v-for="option in STATE.categories"
         :key="option.id"
         :value="option.title"
      >
         {{ option.title }}
      </option>
   </select>
</template>

<style scoped>
select {
   padding: 10px;
   margin: 5px 0;
   border-radius: 5px;
   border: 1px solid grey;
}
select:focus {
   outline: none;
}
</style>
