<script>
export default {
  name: "ButtonV1",
  props: {
    type: {
      type: Boolean,
    },
  },
};
</script>

<template>
  <button :class="[type ? 'btn__green' : 'btn__pink', 'btn']">
    <slot></slot>
  </button>
</template>

<style scoped>
.btn {
  height: 42px;
  padding: 10px;
  margin: 0 5px 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 8px;

  align-self: stretch;
  color: #fff;
}
.btn__green {
  background: #55885d;
  border: 3px solid #3c5f41;
}

.btn__pink {
  background: #bc5d78;
  border: 3px solid #844154;
}
</style>
