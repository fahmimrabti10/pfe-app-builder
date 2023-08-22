<template>
  <div class="sectionTitle">
    <h2 class="sectionTitle">
      {{ component.sectionTitle }}
    </h2>
  
    <a-card 
      class="card"
    >
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
  </div>
</template>
<script lang="ts">
  export default {
    name: 'Element2',
    
    props: {
      component: {
        type: Object,
        required: true
      }
    },
     
    data() {
      const myData = {
        "cover": {"type":"{{cover.type}}","value":"{{cover.value}}"},
        "thumbnail": {"type":"{{thumbnail.type}}","value":"{{thumbnail.value}}"},
        "title": "{{title}}",
        "subTitle": "{{subTitle}}",
        "destinationModel":{
          "screenName":"{{destinationModel.screenName}}",
          "entityType":"{{destinationModel.entityType}}",
          "itemId":"{{destinationModel.itemId}}",
          "destinationType":"{{destinationModel.destiinationType}}",
          "routeName":"{{destinationModel.routeName}}"
        }
      };
      
      return {
        myData
      };
    }
  }
</script>

      <style lang="scss" scoped>
      .sectionTitle {
  
     font-size: 1.5vw;
     font-weight: bold;
    margin-bottom:0.7vw ;
     margin-left:3Vw ;
      }
      .card {
        width:19.5vw;
        height: 24.5vw;
        max-width: 50%;
      
        border: 1px solid lightgray;
        border-radius: 3%;
       
        .container {
          
        
  
          
          .cover {
              position: absolute; /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
              top: 0;
              left: 0;
              width: 100%; /* Pour que l'image de couverture prenne toute la largeur du conteneur */
               height: 100%; /* Modifier la hauteur à 50% pour que l'image de couverture prenne la moitié de la hauteur de la carte */
   
          }
          .headings{
            margin-top: 17vw;
    
            position: absolute; /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
            left: 0%;
             right: 0%;
             bottom:0%;
             top: 13%;
             background-color: rgb(49, 45, 45);
            opacity: 0.75;
           
            .title {
              font-weight: bold;
              font-size: 0.7vw;
              color: hsl(96, 12%, 92%) ;     
              position: absolute; /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
            left: 20%;
             right: 0%;
             bottom:0%;
             top: 19%;
            }
            .sub-title{
                position: absolute; /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
            left: 9.9%;
             right: 0%;
             bottom:0%;
             top: 19%;
            
            font-size: 0.6vw;
             margin:0.3VW;
             color: hsl(96, 12%, 92%)  
            }
            .thumbnail{
             width:2.5vw;
              height: 2.5vw;
             border-radius: 10%;
             margin:0.7VW;
            }
           
         
          }
          
        }
      }
      
      </style>