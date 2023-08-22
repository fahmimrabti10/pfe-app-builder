<template>
  <popover />
  <a-row
    v-if="component.column === '2-1-3'"
    :gutter="0"
    type="flex"
    justify="start"
  >
    <a-col
  
      :span="4"
  
      class=" border border-primary border-dashed section-area not-added-component"
    >
      hello
      <AddedComponentsVue
        :added-components="component.addedComponents[0]"
        @setSelectedComponent="setSelectedComponent"
      />
    </a-col>
  
  
  
    <a-col
  
      
      :span="8"
      class=" border border-primary border-dashed section-area not-added-component"
    >
      <AddedComponentsVue
        :added-components="component.addedComponents[1]"
        @setSelectedComponent="setSelectedComponent"
      />
    </a-col>
  </a-row>
  <a-row
    v-else-if="component.column === '2-3-1'"
    :gutter="0"
    type="flex"
    justify="start"
  >
    <a-col
      :span="8"
        
      
      class=" border border-primary border-dashed section-area not-added-component"
    >
      <AddedComponentsVue
        :added-components="component.addedComponents[0]"
        @setSelectedComponent="setSelectedComponent"
      />
    </a-col>
      
    <a-col
    
      :span="4"
          
      class=" border border-primary border-dashed section-area not-added-component"
    >
      <AddedComponents
        :added-components="component.addedComponents[1]"
        @setSelectedComponent="setSelectedComponent"
      />
    </a-col>
  </a-row>
   
  
  <a-row
    v-else
    :gutter="0"
    type="flex"
  >
    <a-col
      v-for="(addedComponent, i) in component.addedComponents"
      :key="i"
      :span="component.span"
      :flex="component.flex"
      class=" border border-primary border-dashed section-area not-added-component"
    >
      <AddedComponents
        :added-components="addedComponents"
        @setSelectedComponent="setSelectedComponent"
      />
    </a-col>
  </a-row>
</template>
  
  <script>


 
  export default {

    props: {
    component: {
    type: Object,
    required: true
    }
    },
    methods : {
    setSelectedComponent(){
      console.log("oum")
  }
  }
  }
  </script>
  <style scoped>
  .border-dashed {
    border-style: dashed !important;
    min-height: 50px;
  }
  
  .property-column,
  .content-droppable-zone {
    box-shadow: 0 0px 8px -6px #000;
  }
  .section-area.not-added-component:before {
    content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABeElEQVQ4T6XUMUhWYRTG8Z80CkIULbqJBO4OQkFt0ZZrYhKuIYqIDjkIBZFRQxAEohA0CJpCg6ASRejgGJlBQZNDJDjZFMiB86ldv8970TPde99z/u/zPue8t8lRLKAb3/AB69jA/rGc0semQsZlDOEmvqIDa3hWFVwE1vhtGMETtOMR7uFXmcRGwFrdbIL/4BXmsXoatAzYiVH0J+Q53mKzEbQMGHWD2MIKmvE+Pa7LrAK8gdupNCDj+I6YihNRBRhFccSurL6UzRo4D/A1XuTRg7OMu9gtQqsqjDlcwqcETOcGX84KDN+28S4Bk3mTQul/0Uhha/oUNyfiYt6guI4R1/EUe/n+G2PYOe3IDyMBi1lU9CuaE3EHV/A4Xso8jCGewI96HcVVxMa9tfUyYNkgf8Qt/K0KjLxr6MFwQWWM0Vw253CpTGEt8UE24E1+6EMLXlbtcj3LZjCVvofa+/WSqiqM2gv4nJCw4d95gVEfP9uInw267gCfPEIV39dUhAAAAABJRU5ErkJggg==);
    display: block;
    text-align: center;
    margin-top: 20px;
    
  }
  
  .section-area.not-added-component:after {
    content: "Drop Content Here";
    display: block;
  
    color: #666;
    text-align: center;
  }
  .property-column {
  padding: 10px 15px;
  font-size: 14px;
  background: #fff;
  }
  
  .not-selected-component {
  text-align: center;
  font-size: 12px;
  color: #ddd;
  }
  </style>