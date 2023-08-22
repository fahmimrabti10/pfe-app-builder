<template>
  <a-card class="card">
    <div class="container">
      <img
        class="cover"
        :src="component.items.coverImageUrl"
      >
      <div class="headings">
        <img
          class="thumbnail"
          :src="component.items.thumbnailUrl"
        >
        <span class="title">{{ component.items.title }}</span>
        <div class="sub-title">
          <span class="sub-title"> {{ component.items.subtitle }}</span>
        </div>
      </div>
    </div>
  </a-card>
</template>
<script lang="ts">



export default {
  name: 'Element2',

  props: {
    component: {
      type: Object,
      required: true,
    },
  },

  data() {
    const myData = {
      cover: { type: '{{cover.type}}', value: '{{cover.value}}' },
      thumbnail: { type: '{{thumbnail.type}}', value: '{{thumbnail.value}}' },
      title: '{{title}}',
      subTitle: '{{subTitle}}',
      destinationModel: {
        screenName: '{{destinationModel.screenName}}',
        entityType: '{{destinationModel.entityType}}',
        itemId: '{{destinationModel.itemId}}',
        destinationType: '{{destinationModel.destiinationType}}',
        routeName: '{{destinationModel.routeName}}',
      },
    };

    return {
      myData,
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 16vw;
  height: 17vw;
  max-width: 50%;
  border: none;
  border-radius: 3%;

  .container {
    .cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .headings {
      margin-top: 11vw;
      position: absolute;
      left: 0%;
      right: 0%;
      bottom: 0%;
      top: 13%;
      background-color: rgb(49, 45, 45);
      opacity: 0.75;
      width: 100%;

      .title {
        font-weight: bold;
        font-size: 0.7vw;
        color: hsl(96, 12%, 92%);
        position: absolute; 
        left: 22%;
        right: 0%;
        bottom: 0%;
        top: 19%;
      }
      .sub-title {
        position: absolute; 
        left: 9.9%;
        right: 0%;
        bottom: 0%;
        top: 19%;
        font-size: 0.6vw;
        margin: 0.3vw;
        color: hsl(96, 12%, 92%);
      }
      .thumbnail {
        width: 2vw;
        height: 2vw;
        border-radius: 10%;
        margin: 0.6vw;
      }
    }
  }
.mobile-mode .ant-card.ant-card-bordered.card{ 
  width: 16vw !important
; 
  height: 17vw !important
; 
  max-width: 40% !important
; 
   } 
  .mobile-mode .card .container .heading .thumbnail{
     margin:0px !important; 
     width:26px !important; 
     height:26px !important; 
     margin-left:3px;
margin-top:3px; 
}
 .mobile-mode .card .container .heading .title{ 
  font-size:10px; 
}

  .mobile-mode .card .container .heading .sub-title{
     font-size:0.5vw; } 
    .mobile-mode .card .container .headings{ height:
37px; top:-8%; } 
.mobile-mode .card .container .cover{ 
  max-height: 81%; }

}
</style>
