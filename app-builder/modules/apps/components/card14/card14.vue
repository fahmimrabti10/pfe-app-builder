<template>
    <a-card 
      class="card"
    >
      <div class="container">
        <img
          class="thumbnail"
          src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/44010/musical-note-emoji-clipart-md.png"
        >
        <div class="title">
          <span >{{ component.items.title }}</span>
          
       
        
        </div>
      </div>
    </a-card>
  </template>
  <script>
  export default {
    name: 'Card',
    
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
      width: 150px;
      height: 50px;
      max-width: 50%;
    
      border: 1px solid lightgray;
      border-radius: 18%;
      .container {
      position: absolute;
      top: 20%;

      
        .thumbnail {
     
          width: 30px;
          
        }
        .title{
            font-size: 16px;
            margin-top:2px;
        }
     
        
      }
    }
    
    </style>