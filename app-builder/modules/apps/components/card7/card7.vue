<template>
    <a-card 
      class="card"
    >
      <img
        class="thumbnail"
       :src="component.items.coverImageUrl">
      <div class="headings">
        <span class="title"> {{ component.items.Title }} </span>
        
        <span class="sub-title"> {{component.items.SubTitle }} </span>
      </div>
    </a-card>
  </template>
      <script>
      export default {
        name: 'Card7',
        
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
          width: 290px;
          height: 240px;
          max-width: 50%;
      border: none;
  
            .thumbnail {
              position: absolute; /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
                  left: 1%;
                   right: 0%;
                   bottom:0%;
                   top: 10%;
              width: 5rem;
              height: 5rem;
              border-radius:12%; 
              
            }
            .headings{
                font-size: 15px;
            
          
              .title {
          
              position: absolute; /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
                  left: 3%;
                
                   bottom:0%;
                   top: 49%;
              
             
        
              }
              .sub-title{
                position: absolute; /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
                  left: 3%;
                   top: 59%;
        
               
              
                   color: rgba(54, 54, 54, 0.532);
                width: 10rem;
           text-overflow: ellipsis;
             
              }
             
             
            }
    
       
    
    
    
    
    
    
    
            
          }
     
        </style>