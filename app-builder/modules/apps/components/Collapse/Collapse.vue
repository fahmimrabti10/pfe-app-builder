<template>
  <div class="collapse-container">
    <a-collapse v-model:activeKey="activeKey">
      <a-collapse-panel key="1">
        <template #header>
          <div class="panel-header">
            <div class="panel-content">
              <div class="title-container">
                <h3>Votre titre</h3>
              </div>
              <p>Votre sous-titre</p>
            </div>
            <div class="collapse-right-indicator">
              <a-icon :type="activeKey.includes('1') ? 'up' : 'down'" />
            </div>
          </div>
        </template>
        <div class="panel-body">
          <p>{{ text }}</p>
        </div>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>
  
  <script lang="ts">
  import { defineComponent, ref, watch } from 'vue';
  
  export default defineComponent({
    setup() {
      const text = `A dog is a type of domesticated animal.`;
      const activeKey = ref(['1']);
  
      watch(activeKey, val => {
        console.log(val);
      });
  
      return {
        text,
        activeKey,
      };
    },
  });
  </script>
  
  <style scoped>
  .collapse-container {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
  }
  
  .panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  
  .panel-content {
    margin-left: 10px;
  }
  
  .panel-content .title-container {
    display: flex;
    align-items: center;
  }
  
  .panel-content h3 {
    font-size: 20px;
    margin: 0;
  }
  
  .panel-content p {
    font-size: 14px;
    margin: 0;
  }
  
  .panel-body {
    margin-top: 10px;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
  }
  
  .collapse-right-indicator {
    text-align: right;
  }
  
  .ant-collapse-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
  </style>