<template>
  <div class="cards-container">
    <div
      v-for="item in component.items.coverImageUrl"
      :key="item"
      class="container"
    >
      <img
        class="thumbnail"
        :src="item.thumbUrl"
      >
      <div class="headings">
        <span class="title">{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Story',

  props: {
    component: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.title {
  padding: 0.9vw;
  font-size: 1vw;
  margin-bottom: VW;
}

.container {
  padding: 0.6vw;
  .thumbnail {
    padding: 0; min-width: 17rem; width: 17rem; height: 14rem;

    // width: 5vw;
    // height: 5vw;
    // padding: 0.1vw;
    // border-radius: 80%;
    // border: 1.5px solid rgb(151, 146, 196);
  }
}
.cards-container {
  display: flex;
  gap: 5px;
  margin-left: 10px;
overflow: hidden;
  overflow-x: scroll;
}


::-webkit-scrollbar {
  width: 1em;
  height: 0.4em;
}
</style>

