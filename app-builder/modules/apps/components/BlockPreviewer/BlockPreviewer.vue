<template>

   <div v-for="(element, index) in addedComponents" :key="element.uuid">
        <component
          :is="element.organismName"
          v-if="element.organismName !== 'section'"
          :component="element"
          item-key="element.uuid"
        />

        <a-row
          v-if="element.column === '2-1-3' && element.organismName === 'section'"
          :gutter="0"
          type="flex"
          justify="start"
        >
          <a-col
            :span="4"
          >
            <BlockPreviewer
              :added-components="element.addedComponents[0]"
            />
          </a-col>

          <a-col
            :span="8"
          >
            <BlockPreviewer
              :added-components="element.addedComponents[1]"
            />
          </a-col>
        </a-row>

        <a-row
          v-else-if="element.column === '2-3-1' && element.organismName === 'section'"
          :gutter="0"
          type="flex"
          justify="start"
        >
          <a-col
            :span="8"
          >
            <BlockPreviewer
              :added-components="element.addedComponents[0]"
            />
          </a-col>

          <a-col
            :span="4"
          >
            <BlockPreviewer
              :added-components="element.addedComponents[1]"
            />
          </a-col>
        </a-row>

        <a-row
          v-else
          :gutter="0"
          type="flex"
        >
          <a-col
            v-for="(addedComponent, i) in element.addedComponents"
            :key="i"
            :span="element.span"
            :flex="element.flex"
          >
            <BlockPreviewer
              :added-components="addedComponent"
            />
          </a-col>
        </a-row>
    </div>
</template>

<script lang="ts">
import section from '../Section/section.vue';
import image from '../image/image.vue';
import card13 from '../card13/card13.vue';
import Button from '../Button/Button.vue';
import card from '../Card/card.vue';
import templ from '../Templ/templ.vue';
import element1 from '../Element1/element1.vue';
import ratings from '../ratings/ratings.vue';
import carousel from '../carousel/carousel.vue';
import story from '../Story/story.vue';
import carousel1 from '../carousel1/carousel1.vue';
import element2 from '../Element2/element2.vue';
import carousel2 from '../carousel2/carousel2.vue';
import descreption from '../descreption/descreption.vue';
import descreption1 from '../descreption1/descreption1.vue';
import carousel4 from '../carousel4/carousel4.vue';
import card2 from '../card2/card2.vue';
// import card4 from '../card4/card4.vue';
import card1 from '../card1/card1.vue';
// import carousel5 from '../carousel5/carousel5.vue';
// import card3 from '../card3/card3.vue';
import card5 from '../card5/card5.vue';
import card7 from '../card7/card7.vue';
import card11 from '../card11/card11.vue';
import card10 from '../card10/card10.vue';
import card15 from '../card15/card15.vue';
import card12 from '../card12/card12.vue';
import card14 from '../card14/card14.vue';
import card16 from '../card16/card16.vue';
import cardes from '../cardes/cardes.vue';
import text1 from '../text1/text1.vue';

export default {
  components: {
    section, image, story,card12, card13, card14, card15, card10, card11, card1, card5, card7,
    Button, card, templ, element1,  element2, ratings, carousel, carousel1, carousel2,
    carousel4, card2, descreption,   descreption1, card16,cardes,text1


  },

  props: {
    addedComponents: {
      type: Object,
      required: true,
    },
  },

};
</script>