<template>
  <div>
    <h2 class="sectionTitle">
      {{ component.sectionTitle }}
    </h2>

  <a-card class="card">
    <div class="container">
      <img
        class="cover"
       :src="component.items.coverImageUrl"

      >
    </div>
  </a-card>
  </div>
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
  width: 14vw;
  height: 17vw;
  max-width: 50%;

  border: 1px solid lightgray;
  border-radius: 3%;

  .container {
  
    .cover {
      position: absolute; /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
      top: 0;
      left: 0%;
      width: 100%; /* Pour que l'image de couverture prenne toute la largeur du conteneur */
      height: 100%; /* Modifier la hauteur à 50% pour que l'image de couverture prenne la moitié de la hauteur de la carte */

      border-top-left-radius: 3%;
      border-top-right-radius: 3%;
    }
  }
}
</style>
