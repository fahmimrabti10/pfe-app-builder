<template>
  <a-card class="card">
    <div class="container">
      <div>
        <img
          class="thumbnail"
          :src="component.items.coverImageUrl"
        >

        >
        <div class="headings">
          <span class="sub">
            <font-awesome-icon
              :icon="isClicked ? ['fas', 'circle-pause'] : ['fas', 'circle-play']"
              :style="{ color: '#000000', fontSize: '18px' }"
              @click="toggleIcon"
            />
          </span>
          <span class="title">{{ component.items.title }}</span>

          <span class="sub-title">{{ component.items.subTitle }}</span>
        </div>
      </div>
    </div>
  </a-card>
</template>
<script lang="ts">
export default {
  name: 'Card13',

  props: {
    component: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const isClicked = ref(false);

    return { isClicked };
  },
  methods: {
    toggleIcon(event) {
      this.isClicked = !this.isClicked;
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  width: 16.2vw;
  height: 4vw;

  border: 1px solid lightgray;
  border-radius: 7%;
  .container {
    .thumbnail {
      position: absolute; /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
      top: 30%;
      left: 4%;

      width: 30px;
    }
    .headings {
      .title {
        position: absolute; /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
        top: 14%;
        left: 20%;
        font-weight: bold;
      }
      .sub-title {
        position: absolute; /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
        top: 49%;
        left: 20%;
        color: rgb(198, 200, 202);
        font-size: small;
      }
      .sub {
        position: absolute; /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
        top: 29%;
        left: 90%;
      }
    }
  }
}
</style>
