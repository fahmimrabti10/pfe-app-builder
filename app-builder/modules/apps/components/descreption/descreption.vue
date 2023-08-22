<template>
  <div class="heading">
  <div class="headings">
    <img
      class="cover"
        :src="component.items.Image"
    >
      <span class="title">{{ component.items.Title }}</span>
    <div class="section">
      <a-rate
        class="rate "
          :value="component.items.rateValue "
        disabled
      />
        <span class="value"> {{ component.items.date }}</span>
    </div>
  </div>

  <div>
    <div
      class="card-text"
        :class="{ expanded: isExpanded }"
    >
        {{ isExpanded ?component.items.truncatedText: component.items.text }}
      <div>
        <span
            v-if="isExpanded"
          class="read-more"
          @click="expandText"
        >Read more</span>
      </div>
    </div>
  </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Descreption',
  
  props: {
  component: {
  type: Object,
  required: true
  }
  },
  setup() {
    const rateValue = ref(0);
    const isExpanded = ref(true);
                            
    const expandText = () => {
      isExpanded.value = !isExpanded.value;
    };

    return {
      rateValue,
      isExpanded,
      expandText
    };
  }
};








</script>
<style lang="scss" scoped>
.heading{
    .card-text {
  font-size: 1rem;
  line-height: 1.25rem;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -.01rem;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  max-height: 2.5rem; /* Hauteur maximale de deux lignes */
  position: relative;
  color: grey;


.card-text.expanded {
  max-height: none; 
}

.read-more {
  color: rgba(0, 0, 0, 0.789);
  cursor: pointer;
/* Pour que l'image de couverture se positionne par-dessus les autres éléments */
font-weight: bold;              
}
}
.headings{
  padding-top: 0.1px;
.cover {
    width: 2.2vw;
    height: 2.2vw;
    border-radius: 50%;
    margin-right:1vw;
    margin-top:19px;
}
.title{

font-weight: bold;

}
.section{
  margin-top:-21PX ;
.rate  {

    margin-bottom:1vw;

    margin-left: 3vw;
  font-size: 12px; /* Modifier la taille de la police pour ajuster la taille des étoiles */


}
.value{
    color: grey;
  font-size: 15px;
}
}

}
}

</style>