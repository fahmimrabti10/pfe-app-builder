<template>
  <div class="drag">
    <a-input-search
      v-model:value="value"
      placeholder="search"
      enter-button
      class="search-input"
      @search="onSearch"
    />

    <draggable
      :clone="clone"
      :list="filteredNav"
      :sort="false"
      :group="{ name: 'oum', pull: 'clone', put: false }"
      item-key="id"
    >
      <template
        #item="{ element: nav }"
      >
        <div
          :key="nav.organismName"
    
          class="display-item"
        >
          <div
            v-if="nav.organismName !=='section'"
            
            class="icon-container"
          >
          <a-popover placement="right">
              <template #content>
                <draggable
                  :clone="clone"
                  
                  :list="[nav]"
                  :sort="false"
                  :group="{ name: 'oum', pull: 'clone', put: false }"
                  item-key="id1"
                >
                  <template
                    #item="{ elm }"
                  >
                    <div class="nav-sections"> 
                      <div
                         
                        class="nav-sections__item"
                      >
                        <img
                          :src="navIcons[nav.image]"
                          class="nav-sections__icon"
                        >
                      </div>
                    </div>
                  </template>
                </draggable>
              </template>
            
              <div class="icon-container">
                <img
                  :src="navIcons[nav.image]"
                  class="nav__icon"
                >
                <span class="label-class">{{ $t(nav.organismName) }}</span>
              </div>
            </a-popover>
          </div>


















          
          <div
            v-if="nav.organismName ==='section'"
              
            class="icon-container"
          >
            <a-popover
              placement="right"
              class="test"
            >
              <template #content>
                <div class="items-container"> 
                <draggable
                  :clone="clone"
                  
                  :list="nav.sections"
                  :sort="false"
                  :group="{ name: 'oum', pull: 'clone', put: false }"
                  item-key="id1"
                >
                  <template
                    #item="{ element }"
                  >
                        <img
                          :src="navIcons[element.image]"
                        class="section-item-img"
                        >
                  </template>
                </draggable>
                </div>
              </template>
              <template #title>
                <span>Add New Section</span>
              </template>
              <div class="icon-container">
                <img
                  :src="navIcons[nav.image]"
                  class="nav__icon"
                >
                <span class="label-class">{{ $t(nav.organismName) }}</span>
              </div>
            </a-popover>
          </div>
        </div>
      </template>
    </draggable>
  </div>
</template>
   
   
<script lang="ts" setup>
import nav from '~~/assets/data/nav.json';
import { v4 as uuidv4 } from 'uuid';
import { cloneDeep } from 'lodash';



defineProps({
  collapsed: {
    type: Boolean,
  },
  navTree: {
    type: Array,
    default: () => {
      return [];
    },
  },
});

const value = ref('');

const filteredNav = computed(() => {

  const searchValue = value.value.toLowerCase();
  
  return nav.filter((nav) => {
    return nav.organismName.toLowerCase().includes(searchValue);
  });
});



const clone = (component) => {
  component.uuid = uuidv4();
  return cloneDeep(component);
};

function onDragOver(event): void {
  event.target.classList.add('dndPlaceholder');
}

function onDragStart(event: DragEvent) {
  // event.dataTransfer.dropEffect = 'move';
  //event.dataTransfer.effectAllowed = "move";
  //event.dataTransfer?.setData('component', JSON.stringify(component))
  //  this.$emit('onDragstart', 'bg-light');
  //},
  //onDragEnd(event: DragEvent) {
  //this.$emit('onDragEnd');
}
</script>



<style lang="less" scoped>
@import 'ant-design-vue/lib/menu/style/index.less';
</style>

<style lang="scss" scoped>
@import '@UI/assets/scss/variable';

.icon-container {
  // border: 1px solid rgb(255, 255, 225);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(255, 255, 255);
  // margin: 6px;
  // padding:13px 20px ;
  border-radius: 14px;
  height: 150px;
}

.nav-sections {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  grid-gap: 10px;
  justify-items: center;
  align-items: center;
  margin-top: 10px;
}

.nav-sections__item {
  display: flex;
  justify-content: center;
}

.nav-sections__icon {
  width: 200px;
 
}
.nav__icon {
  width: 110px;
  height: 95px;
}

.label-class {
  font-size: 11px;
  color: #595c5f;
  line-height: 3;
}

.menu.ant-menu-gray {
  background-color: #f7f7f7;
}

.menu-item {
  display: inline-block;
  height: 80px !important;
  margin-right: 10px; /* vous pouvez ajuster ce nombre pour définir l'espace entre les éléments de menu */
}

// .email-structure {
//   min-height: 100%;
// }
.drag{
  display:flex;
  height: 100vh;
  flex-direction: column;
  overflow-y: scroll;
}
</style>
