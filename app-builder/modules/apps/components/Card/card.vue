<template>
  <a-card 
    class="card"
  >
    <div class="container">
      <img
        class="thumbnail"
        :src="component.items.coverImageUrl"
      >
      <div class="headings">
        <span class="title">{{ component.items.title }}</span>
        <div class="sub-title">
          <span class="value">{{ component.items.value }}</span>
          <span class="key">{{ component.items.key }}</span>
        </div>
        <hr>
        <div class="sub-title">
          <span class="value"> {{ component.items.value1 }}</span>
          <span class="key">{{ component.items.key1 }}</span>
        </div>
      </div>
    </div>
  </a-card>
</template>
<script>
export default {
  name: 'Card',
  
  props: {
  component: {
  type: Object,
  required: true
  }
  },

}
</script>
  <style lang="scss" scoped>
  .card {
    width: 120px;
    height: 175px;
    max-width: 50%;

    border: 1px solid lightgray;
    border-radius: 8%;
    .container {
     
      padding: 1vw;
      .thumbnail {
        position: absolute; /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
            left: 9.9%;
             right: 0%;
             bottom:0%;
             top: 8%;
        width: 30px;
        
      }
      .headings{
        margin-top: 0.2vw;
        padding: 0.1PX;
        position: absolute; /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
            left: 9.9%;
             right: 0%;
             bottom:0%;
             top: 30%;
        .title {
          color: rgb(67, 67, 67);
          font-size: 15px;
          margin-top: 5px;
        }
        .sub-title{
          margin-top: 0.1VW;
          .value{
            font-weight: bold;
            font-size: 19px;
            margin-right: 3px;
          }
          .key{
            font-size: 13px;
          }
        }
      }
      
    }
  }
  
  </style>