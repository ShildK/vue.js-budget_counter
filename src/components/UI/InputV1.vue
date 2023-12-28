<script>
export default {
  name: "InputV1",
  props: {
    placeholder: {
      type: String,
      required: false,
    },
    value: {
      type: String,
    },
    cahangeValue: {
      type: Function,
    },
  },
  data: () => {
    return {};
  },
};
</script>

<template>
  <input
    class="input"
    type="text"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('change-value', $event.target.value)"
  />
</template>

<style scoped>
.input {
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px; 
  border: 1px solid grey;
}
</style>
