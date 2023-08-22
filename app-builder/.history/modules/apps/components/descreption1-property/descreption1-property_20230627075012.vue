<template>
   <a-row  class="ant-row">
  <a-row>
    <a-col

      :span="22"
    >
      <a-form-item label="sectionTitle">
        <a-input
          v-model:value="component.sectionTitle"
          size="small"
        />
      </a-form-item>
    </a-col>
  </a-row>

  <a-row>
    <a-col
   
      :span="22"
    >
      <a-form-item label="truncatedText">
        <a-input
          v-model:value="component.items.truncatedText"
          size="small"
        />
      </a-form-item>
    </a-col>
  </a-row>
  <a-row>
    <a-col
    
      :span="22"
    >
      <a-form-item label="text">
        <a-input
          v-model:value="component.items.text"
          size="small"
        />
      </a-form-item>
    </a-col>
  </a-row>
</a-row>
</template>
    <script>
    
    import nav from '~~/assets/data/nav.json';
    
    export default defineComponent({
      name: 'Card12PropertyComponent',
  
      props: {
        block: {
          type: Object,
          default: () => ({}),
          required: true
        }
      },
      emits: ['update:block'],
    
      
        
    
    
      setup(props) {
          const component = computed({
              get: () => props.block,
          })
          return { component,nav}
    
      },
    });
    </script> 
    <style scoped>
    .ant-row{
      margin:6px;
    }
    </style>