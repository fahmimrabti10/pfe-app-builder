<template>
  <div>
    <h2 class="sectionTitle">
      {{ component.sectionTitle }}
    </h2>

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
</template>
<script lang="ts">
export default {
  name: 'Descreption',

  props: {
    component: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const isExpanded = ref(true);

    return { isExpanded };
  },
   methods: {
    expandText() {
      this.isExpanded = ! this.isExpanded;
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
.card-text.expanded {
  max-height: none; /* Affiche le texte complet lorsque la classe 'expanded' est présente */
}

.read-more {
  color: rgba(0, 0, 0, 0.789);
  cursor: pointer;
  /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
  font-weight: bold;
}
</style>
