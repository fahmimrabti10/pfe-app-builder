  <template>
  <div>
    <h2 class="sectionTitle">
      {{ component.sectionTitle }}
    </h2>
   
    <a-row :gutter="16">
      <a-col :span="8">
        <a-card class="card">
          <div class="container">
            <div class="">
              <img
                class="thumbnail"
                :src="component.items.thumbnailUrl1"
              >
            

              <div class="headings">
                <span class="title">{{component.items.Title1}}</span>
                <div class="sub-title">
                  <span class="value">{{component.items.SubTitle1}}</span>
                </div>
              </div>
            </div>
            <div>
              <img
                class="thumbnail"
                  :src="component.items.thumbnailUrl2"
              >
              <div class="headings">
                <span class="title">{{component.items.Title2}}</span>
                <div class="sub-title">
                  <span class="value">{{component.items.SubTitle2}}</span>
                </div>
              </div>
            </div>
            <div>
              <img
                class="thumbnail"
               :src="component.items.thumbnailUrl3"
              >
              <div class="headings">
                <span class="title">{{component.items.Title3}}</span>
                <div class="sub-title">
                  <span class="value">{{component.items.SubTitle3}}</span>
                </div>
              </div>
            </div>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Element1',
  
  props: {
  component: {
  type: Object,
  required: true
  }
  },

}
</script>
  <style lang="scss" scoped>
   .sectionTitle {
     padding-left: 2px;
     font-size: 1.5vw;
     font-weight: bold;
  
     display: flex;
     border-radius: 11%;
     
        } 
        .card {
    padding: 0;
    min-width: 17rem;
    width: 10rem;
    height: 10rem;
margin:auto;

    .container {
        display: flex;
      
  justify-content: space-between;

        .thumbnail {
          margin-right: 20px;
           /* Pour que l'image de couverture se positionne par-dessus les autres éléments */
          width: 65px;
         height: 65PX;
          border-radius: 8%;
          
        }
        .headings{
          padding-top:8PX;
     .title{
      size:  10px;
    }
    
    .sub-title{
      size:  9px;
      color: rgb(121, 118, 118);
    }
  }
  }
}
  
            

</style>