<template>
  <a-row class="ant-row">
    <a-row>
      <a-col
      
        :span="22"
      >
        <a-form-item label="title">
          <a-input
            v-model:value="component.items.title"
            size="small"
          />
        </a-form-item>
      </a-col>
    </a-row>
    <a-row>
      <a-col
      
        :span="8"
      >
        <a-form-item label="rates">
          <a-input
            v-model:value="component.items.rateValue"
            size="small"
          />
        </a-form-item>
      </a-col>
    </a-row>
    <a-row>
      <a-col
      
        :span="12"
      >
        <a-form-item label="date">
          <a-input
            v-model:value="component.items.Value"
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
    <a-row class="mb-2">
      <a-col
        class="mb-2"
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
    name: 'ButtonPropertyComponent',
    props: {
      block: {
        type: Object,
        default: () => ({}),
        required: true
      }
    },
    emits: ['update:block'],
  
    
      
  
  
    setup(props) {
      const rateValue = ref(0);
        const component = computed({
            get: () => props.block,
        })
        return { component,nav,rateValue}
  
    },
  });
  </script> 
  <style  scoped>
  .ant-row{
      margin:6px;
    }
  </style>