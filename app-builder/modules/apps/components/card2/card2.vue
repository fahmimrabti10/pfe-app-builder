<template>
  <a-card class="card">
    <div class="container">
      <div>
        <img
          class="thumbnail"
          :src="component.items.Image"
        >
        <div
          class="headings"
        >
          <NuxtLink
            class="sub"
       
            :to="localePath('/pages')"

          >
        

            <font-awesome-icon
              :icon="['fas', 'chevron-right']"
              size="sm"
              style="color: #e4e5e7;"
            />
          </NuxtLink>
          <span class="title">{{ component.items.Title }}
          </span>
          
          <span class="sub-title">{{ component.items.SubTitle }}</span>
        </div>
      </div>
    </div>
  </a-card>
</template>
<script>
export default {
  name: 'Card2',

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
width: 18vw;
height: 3.6vw;
  border: 1px solid lightgray;
  border-radius:7%;
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
      .sub-title{
        position: absolute; /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
      top: 49%;
      left: 20%;
      color: rgb(198, 200, 202);
      font-size: small;
      
      }
      .sub{
        position: absolute; /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
      top: 29%;
      left: 90%;
       
      }
    }
  }
}
</style>
