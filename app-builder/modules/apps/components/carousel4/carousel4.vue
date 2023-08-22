<template>
  <div>
    <h2 class="sectionTitle">
      {{ component.sectionTitle }}
    </h2>
    <div
      class="cards-container"
    >
      <a-card
        v-for="item in 9"
        :key="item"
        class="card"
      >
        <div>
          <div class="container">
            <div>
              <img
                class="cover"
                src="https://img.freepik.com/photos-gratuite/belle-femme-africaine-se-sentant-reconnaissante_181624-46352.jpg"
              >
              <div>
                <img
                  class="thumbnail"
                  src="https://previews.123rf.com/images/carlosphotos/carlosphotos1803/carlosphotos180300081/97483691-portrait-de-la-belle-jeune-femme-coquette-avec-fond-de-mise-au-point.jpg"
                  alt="live"
                >
              </div>
              <div class="ww">
                <div class="rr">
                  <font-awesome-icon
                    :icon="['fas', 'eye']"
                    size="s"
                    style="color: aliceblue"
                    c-l
                    class="sub-title"
                  />
                  <span class="value"> 265</span>
                </div>
              </div>
              <div class="headings">
                <span class="title">The quick, Brown liveNow liveNow</span>
                <span class="title2">liveNow !</span>
              </div>
            </div>
          </div>
        </div>
      </a-card>
     
    
    </div>
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
.sectionTitle {
  font-size: 1.5vw;
  font-weight: bold;
  margin-bottom: 0.1vw;
}

.card {
  margin-top: 1%;
  border: 1px solid lightgray;
  border-radius: 10%;
  padding: 0;

  min-width:10rem;
  width: 9rem;
  height: 16rem;

  .container {
    .cover {
      position: absolute; /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
      top: 0;
      left: 0;
      width: 100%;
      height: 100%; /* Modifier la hauteur à 50% pour que l'image de couverture prenne la moitié de la hauteur de la carte */

      border-radius: 10%;
    }

 
    .thumbnail{
      border-radius: 50%;
      position: absolute; /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
      top: 3%;
      left: 10%;
      width: 21%;
      height: 14%;
      padding: 0.1vw;
      border-radius: 50%;
      border: 2px solid #e93a3a;
      padding: 2.3px;
     
    }
    .ww {
      width: 4rem;
      height: 2.1rem;
      background-color: rgba(0, 0, 0, 0.364);

      position: absolute; /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
      top: 5%;
      left: 40%;
      border-radius: 40%;
      justify-items: center;
      .rr {
        margin-top: 0.3rem;
        margin-left: 0.6rem;

        color: aliceblue;
      }
    }
    .headings {
      width: 100%;
      height: 30%;
      background-color: rgba(6, 1, 1, 0.768);
      position: absolute; /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
      bottom: 0%;
      left: 0%;
      font-weight: bold;
   
 border-bottom-right-radius:15%;
 border-bottom-left-radius:15%;

      .title {
        white-space: nowrap;
        width: 133px;
        overflow: hidden;
        text-overflow: ellipsis;

        color: #fafafa;
        position: absolute; /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
        bottom: 50%;
        left: 7%;
      
      }
      .title2{
        color: #e93a3a;
        position: absolute; /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
        bottom: 20%;
        left: 12%;
        right: 12%;
      
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


.mobile-mode .ant-card.ant-card-bordered.card{ 
  margin-top:1% !important;
  min-width:7rem !important;
  width:9rem !important
;
  height: 11rem !important;

 }
.mobile-mode .card .container .ww{ 
  width:3rem !important; 
  left:51% !important; 
  height: 1.6rem;
}
.mobile-mode .ant-card{ 
  font-size: 11px !important;
 }
.mobile-mode .card.container.ww.rr{ 
 margin-left:0.5rem !important;}
.mobile-mode .card .container .heading .title{ 
  font-size:6px !important;
font-weight: 700 !important; 
 }
.mobile-mode .card .container .heading .title2{ 
  font-size:10px !important; 
   }
 .mobile-mode .sectionTitle{
  font-size:1vw;
 }
.tablet-mode .ant-card.ant-card-bordered.card{ 

  min-width:9.5rem !important; 
height: 15rem !important; }
.tablet-mode .sectionTitle{ font-size:1.1vw; }

.tablet-mode .card.container.heading.title2{ font-size:14px !important; } 
.tablet-mode .sectionTitle{ font-size:1.1vw; }

.tablet-mode .card .container .heading .title{ font-size:8px !important; font-weight: 700 !important; } .mobile-mode
tablet-mode
.tablet-mode .card .container .heading .title2{ font-size:12px !important; }

.tablet-mode .ant-card{ font-size: 10px !important; }








</style>
