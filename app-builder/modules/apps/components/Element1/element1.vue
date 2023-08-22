<template>
  <a-card class="card">
    <div class="container">
      <img
        class="cover"
        :src="component.items.coverImageUrl"
      >
      <div class="headings">
        <span class="title">{{ component.items.title }}</span>
        <div class="sub-title1">
          <span> {{ component.items.Subtitle }}</span>
          <div class="sub-title2">
            <span class="val1">{{ component.items.SubTitle2 }} </span>
          </div>

          <div class="sub-title3">
            <span>{{ component.items.Subtitle1 }} </span>
          </div>
        </div>
      </div>
    </div>
  </a-card>
</template>
<script lang="ts">
export default {
  name: 'Element1',

  props: {
    component: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  width: 17vw;
  height: 13vw;
  max-width: 50%;
  border: 1px solid lightgray;
  border-radius: 3%;

  .container {
    .cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 52%;

      border-top-left-radius: 3%;
      border-top-right-radius: 3%;
    }
    .headings {
      margin-top: 6vw;

      .title {
        font-weight: bold;
        font-size: 0.8vw;
      }
      .sub-title1 {
        font-size: 0.8vw;
        color: rgb(100, 97, 97);
        margin-top: 0.1vw;
      }
      .sub-title2 {
        font-size: 0.7vw;
        margin-top: 0.1vw;
        color: rgb(58, 174, 237);
        .val1 {
          font-weight: bold;

          margin-right: 3px;
        }
      
      }
      .sub-title3 {
        font-size: 0.7vw;
        margin-top: 0.1vw;
        color: rgb(140, 132, 132);
      }
    }
  }
}
</style>
