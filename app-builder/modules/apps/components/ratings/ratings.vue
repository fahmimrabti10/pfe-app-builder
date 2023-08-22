<template>
  <span class="heading">4.8</span>
  <font-awesome-icon
    :icon="['fas', 'star']"
    style="color: #f2df07;"
  />;
  <span class="ant-rate-text">allowClear: true</span>
  <p>4.1 average based on 254 reviews.</p>


  <div class="row">
    <div class="side">
      <div>5 stars</div>
    </div>
    <div class="middle">
      <div class="bar-container">
        <div class="bar-5" />
      </div>
    </div>
  </div>

    
  <div class="side">
    <div>4 star</div>
  </div>
  <div class="middle">
    <div class="bar-container">
      <div class="bar-4" />
    </div>
  </div>

  <div class="side">
    <div>3 star</div>
  </div>
  <div class="middle">
    <div class="bar-container">
      <div class="bar-3" />
    </div>
  </div>
   

  <div class="side">
    <div>2 star</div>
  </div>
  <div class="middle">
    <div class="bar-container">
      <div class="bar-2" />
    </div>
  </div>
  
  
  <div class="side">
    <div>1 star</div>
  </div>
  <div class="middle">
    <div class="bar-container">
      <div class="bar-1" />
    </div>
  </div>
</template>
<script lang="ts">
export default {
name: 'Ratings',

props: {
component: {
type: Object,
required: true
}
},

}
</script>
  
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial;
  margin: 0 auto; /* Center website */
  max-width: 800px; /* Max width */
  padding: 20px;
}

.heading {
  font-size: 25px;
  margin-right: 2px;
}

.fa {
  font-size: 25px;
}

.checked {
  color: orange;
}

/* Three column layout */
.side {
  float: left;
  width: 15%;
  margin-top: 1px;
}

.middle {
  float: left;
  width: 70%;
  margin-top: 1px;
}

/* Place text to the right */
.right {
  
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* The bar container */
.bar-container {
  width: 100%;
  background-color: #f1f1f1;
  text-align: center;
  color: white;
}

/* Individual bars */
.bar-5 {width: 60%; height: 10px; background-color:  #f2df07;}
.bar-4 {width: 30%; height: 10px; background-color:  #f2df07;}
.bar-3 {width: 10%; height: 10px; background-color: #f2df07;}
.bar-2 {width: 4%; height: 10px; background-color: #f2df07;}
.bar-1 {width: 15%; height: 10px; background-color: #f44336;}

/* Responsive layout - make the columns stack on top of each other instead of next to each other */
@media (max-width: 400px) {
  .side, .middle {
    width: 100%;
  }
  /* Hide the right column on small screens */
  .right {
    display: none;
  }
}
  </style>
  
