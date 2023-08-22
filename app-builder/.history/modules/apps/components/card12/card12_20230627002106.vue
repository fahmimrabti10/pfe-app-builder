<template>
  <div>
    <h2 class="sectionTitle">
      {{ component.sectionTitle }}
    </h2>
 
    <a-card class="card">
      <div class="container">
        <img
          class="thumbnail"
          src="https://cdn-icons-png.flaticon.com/512/58/58778.png"
        >
        <div
        
          class="container-button"
        >
          <button
        
            v-if=" component.number_of_tickets_available >0"
            class="container-btn"
          >
            <button
              class="minus-button"
              @click="decreaseValue"
            >
              -
            </button>

            <span
              id="numberInput"
              class="number-input"
            >1</span>
            <button
              class="plus-button"
              @click="increaseValue"
            >
              +
            </button>
          </button>

          <button
            v-if="component.number_of_tickets_available == 0"
            class="container-btn1"
          >
            Sold Out
          </button>
        </div>
        <div class="headings">
          <span class="title">Netflix 10$</span>
          <div class="sub-title">
            <span class="value">100.00</span>
            <span class="SUB">FCFA</span>
          </div>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  name: 'Card12',

  props: {
    component: {
      type: Object,
      required: true,
    }
  },

  methods: {
    decreaseValue() {
      var input = document.getElementById('numberInput');
      var value = parseInt(input.textContent);

      if (value > 1) {
        value--;
        input.textContent = value;
      }
    },

    increaseValue() {
      var input = document.getElementById('numberInput');
      var value = parseInt(input.textContent);

      value++;
      input.textContent = value;
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
  width: 17rem;
  height: 4.2rem;

  border: 2px solid #7778784b;
  border-radius: 6%;
  .container {
    .thumbnail {
      position: absolute; /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
      top: 20%;
      left: 4%;

      width: 30px;
    }
    .container-button {
  position: absolute;
  left: 60%;
  top: 20%;
  .container-btn1 {
    border-radius: 29%;
    border-right-width: 30%;
    border: none;
    width: 55px;
    height: 22px;
    font-size:  10PX;
    background-color: rgba(159, 30, 30, 0.918);
    margin-left: 77%;
    color: white;
  

  .number-input {
    text-align: center;
    width: 33%;
    font-size: 13px;

  }

  .minus-button,
  .plus-button {
    width: 25px;
    height: 25px;
    font-size: 15px;
    font-weight: bold;
    margin-left: 13%;
    border-radius: 60%;
    background-color: white;
    border: none;
  }

  .minus-button {
    margin-right: 1px;
    margin-left: -9%;
  }

  .plus-button {
    margin-left: 1px;
    margin-right: -10px;
  }
}
.container-btn {
    border-radius: 29%;
    border-right-width: 30%;
    border: none;
    width: 90px;
    height: 33px;
  }
}

    .headings {
      .title {
        position: absolute; /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
        top: 13%;
        left: 20%;
        font-weight: bold;
      }
      .sub-title {
        position: absolute; /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
        top: 43%;
        left: 20%;
        color: rgba(221, 91, 48, 0.944);

        font-weight: bold;
        .value {
        }

        .SUB {
          font-size: 10px;
          margin-left: 4px;
        }
      }

     
    }
  }


}


</style>
