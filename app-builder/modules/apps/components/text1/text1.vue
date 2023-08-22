<template>
  <div>
    <h2 class="sectionTitle">
      {{ component.sectionTitle }}
    </h2>
   
  </div>
</template>
<script lang="ts">
export default {
  name: 'Carousel2',

  props: {
    component: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.sectionTitle {
  font-size: 1.5vw;
  font-weight: bold;
  margin-bottom: 0.1vw;
}



</style>
