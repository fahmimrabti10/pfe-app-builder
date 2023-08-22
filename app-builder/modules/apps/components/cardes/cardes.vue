<template>
  <div class="container">
    <a-card class="card">
      <span> desgin</span>
    </a-card>
    <a-card class="card">
      <span> desgin</span>
    </a-card>
  </div>
</template>
<script>
export default {
  name: 'Card',

  props: {
    component: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
    display: flex;
    grid: 5px;
  .card {
    width: 120px;
    height: 175px;
    max-width: 50%;
    border: 1px solid lightgray;
    border-radius: 8%;
  }
}
</style>
