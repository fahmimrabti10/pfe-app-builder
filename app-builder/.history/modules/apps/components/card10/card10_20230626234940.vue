<template>
  <div>
    <h2 class="sectionTitle">
      Rating & reviews
    </h2>
  </div>
  <a-card class="card">
    <div class="container">
      <img
        class="thumbnail"
        src="https://cdn-icons-png.flaticon.com/512/58/58778.png"
      >
      <div
        class="headings"
      >
        <a-card class="card1">
          <NuxtLink
            class="sub"
            to="/page"
          >
            subscribe
          </nuxtlink>
        </a-card>
      
        <span class="title">Netflix 10$</span>
            
        <div class="sub-title">
          <span class="value">100.00</span> 
          <span class="SUB">FCFA</span>
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
  .sectionTitle {

font-size: 1.5vw;
font-weight: bold;
margin-bottom:0.1vw ;

 }
  .card {
  width: 21rem;
  height: 4.2rem;
  
    margin: auto;
    border:2px solid #7778784b;
    border-radius:6%;
    .container {
  
      .thumbnail {
        position: absolute; /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
        top: 20%;
        left: 4%;
        
        width: 30px;
      }
      .headings {
      
        .title {
          position: absolute; /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
        top: 13%;
        left: 20%;
        font-weight: bold;
        }
        .sub-title{
          position: absolute; /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
        top: 43%;
        left: 20%;
        color: rgba(221, 91, 48, 0.944);
     
        font-weight: bold;
        .value{
          
        }
        
        .SUB{
          font-size: 10PX;
          margin-left:4px ;
        }
        
        }
       
        .card1{
            position: absolute; /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
        top: 25%;
        left: 70%;
            border: 1.5px solid ;
            width: 6rem;
            height: 2.3rem;
            border-radius: 12%;
            .sub{
                position: absolute; /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
        top: 20%;
        left: 20%;
        color: black;
            }
        }
         
        }
      }
    }

  </style>