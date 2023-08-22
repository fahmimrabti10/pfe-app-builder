<template>
  <div class="cards-container">
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
         
          <span class="title">{{component.items.Title}}</span>

          <span class="sub-title"> {{component.items.Subtitle}}</span>
        </div>
      </div>
    </a-card>
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
.card {
  margin-top: 1%;
  border: none;
  border-radius: 3%;
  padding: 0;
  min-width: 13rem;
  width: 10rem;
  height: 10rem;

  .container {
    .cover {
      position: absolute; /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
      top: 0;
      left: 0;
      width: 90%;
      height: 65%; /* Modifier la hauteur à 50% pour que l'image de couverture prenne la moitié de la hauteur de la carte */

      border-radius: 9%;
  
    }
    .headings {
      margin-top: 11vw;

      .title {
        font-weight: bold;
        font-size: 0.9vw;
      
        position: absolute; /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
        top: 70%;
       left: 30%;

      }
      .sub-title {
        font-size: 0.8vw;
        color: rgb(100, 97, 97);
        // margin-top: 0.1vw;
        // margin-left: 1.1vw;
        position: absolute; /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
        top: 85%;
        left: 30%;
      }
      .thumbnail {
      border-radius: 50%; width: 20px; height: 20PX; margin-left:0.1vw ; position: absolute; 
 top: 70%; 
 left: 2%;
  width: 24%; 
  height: 24%;

      }
    }
  }
}

.cards-container {
  display: flex;
  gap: 0.4vw;
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
</style>
