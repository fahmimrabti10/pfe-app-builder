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
    width: 5vw;
    height: 5vw;
    padding: 0.1vw;
    border-radius: 80%;
    border: 1.5px solid rgb(151, 146, 196);
  }
}
.cards-container {
  display: flex;
  gap: 0.1px;
  margin-left: 10px;
  margin: auto;
  overflow: auto;
  scroll-snap-type: x mandatory;
  scroll-snap-align: start;
 
}

::-webkit-scrollbar {
  width: 1em;
  height: 0.4em;
}
.mobile-mode .container .thumbnail{
  width:3vw;
  height: 3vw;
}
.mobile-mode .title{
  font-size:0.8vw;
}
.tablet-mode .container .thumbnail{ 
  width:4vw; height: 4vw; } 
.tablet-mode .title{ 
  font-size:0.9vw; }


</style>
