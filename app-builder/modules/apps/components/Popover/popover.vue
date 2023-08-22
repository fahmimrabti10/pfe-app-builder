<template>
  <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24}px` }">
    <a-popover placement="right">
      <template #content>
        <p>Content</p>
        <p>Content</p>
      </template>
      <template #title>
        <span>Title</span>
      </template>
      <a-button>Right</a-button>
    </a-popover>
  </div>
</template>
    <script lang="ts">
    import { defineComponent, ref } from 'vue';
    export default defineComponent({
      setup() {
        return {
          buttonWidth: ref<number>(70),
        };
      },
    });
    </script>
    <style scoped>
    #components-popover-demo-placement .ant-btn {
      width: 70px;
      text-align: center;
      padding: 0;
      margin-right: 8px;
      margin-bottom: 8px;
    }
    </style>
    
 
  
  
  