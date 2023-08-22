<template>
  <a-card 
    class="card"
  >
    <div class="container">
      <div><span>Payement methode:</span></div>
      <img
        class="thumbnail"
        src="https://icones.pro/wp-content/uploads/2021/04/symbole-telephone-portable-noir.png"
      >
      <div class="headings">
     
        <span class="title">component.items.title </span>
        <div class="subTitle">
          component.items.subTitle
        </div>
        <NuxtLink
      
          class="sub"
          to="/page"
        >
        change
          <font-awesome-icon
            :icon="['fas', 'chevron-right']"
            size="sm"
            style="color: black;"
          />
        </NuxtLink>
        <hr class="aaa">
      </div>
     
  
  
      <div class="heading">
        <span class="title1">  component.items.title1 </span>
        
        <p class="ff">
          component.items.body 
        </p>
         
        <span class="title">  component.items.title2 </span>
       
        <div class="value">
          component.items.value 
        </div>
      </div>
    </div>
  </a-card>
</template>
    <script>
    export default {
      name: 'Card11',
      
      props: {
      component: {
      type: Object,
      required: true
      }
      },
    
    }
    </script>
      <style lang="scss" scoped>
  
      .aaa{
          color: rgba(221, 212, 212, 0.519);
   text-align: center;
   max-width: 500vw;
   margin-top:12px ;
   margin-bottom:19PX ;
   margin-left: -66px;
   margin-right: 3px;
      }
      .card {
        width: 300px;
        height:260px;
        max-width: 70%;
      
        border: 1px solid lightgray;
        border-radius: 8%;
        .container {
      
        
          .thumbnail {
  position: absolute;
            width: 30px;
            
          }
          .headings{
         padding-top:PX ;
            margin-left: 50px;
            .title{
              font-weight: bold;
            }
            .subTitle{
              color: rgba(66, 68, 70, 0.421);
            }
          }
        
     
  
              
  
  
  
          .heading{
  
     .Title{
      color: rgba(66, 68, 70, 0.421);
      font-weight: bold;
            }
          .ff{
  padding-bottom: 5px;
  padding-top: 7px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  }
  .title{
    color: rgba(66, 68, 70, 0.421);
    font-weight: bold;
  
  }
  .value{
    padding-top: 7px;
  }
        }
        }
      }
      
      </style>