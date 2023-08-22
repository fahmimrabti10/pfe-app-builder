<template>
    <a-card 
      class="card"
    >
      <img
        class="thumbnail"
        src="https://cdn.futura-sciences.com/cdn-cgi/image/width=1024,quality=60,format=auto/sources/images/dossier/rte/7264_04.jpg"
      >
      <div class="headings">
        <span class="title">Happier than</span>
        
        <span class="sub-title">Billie Eilish</span>
      </div>
    </a-card>
  </template>
      <script>
      export default {
        name: 'Card4',
        
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
              width: 8rem;
              height: 7rem;
              border-radius:4%; 
              
            }
            .headings{
             
            
              font-weight: bold;
              .title {
          
              position: absolute; /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
                  left: 3%;
                
                   bottom:0%;
                   top: 64%;
              
                font-size: 15px;
        
              }
              .sub-title{
                position: absolute; /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
                  left: 3%;
                   top: 74%;

                   color: rgba(54, 54, 54, 0.271);
                width: 10rrgba(54, 54, 54, 0.293)
             
              }
             
             
            }
    
       
    
    
    
    
    
    
    
            
          }
     
        </style>