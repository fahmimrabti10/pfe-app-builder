<template>
  <div class="oum">
    <h1>
      {{ myProject }}
    </h1>
    <a-dropdown>
      <template #overlay>
        <a-menu @click="handleMenuClick">
          <a-menu-item
            v-for="item in allUserScreen"
            :key="item.id"
            @click="getScreen(item)"
         
        >
            {{ item.screenName }}
          </a-menu-item>
        </a-menu> 
      </template>
       
      <a-button class="btn-fix1">
        {{ name }}
        <DownOutlined />
      </a-button>
    </a-dropdown> 
    <div class="left-buttons">
      <a-button
        class="btn-fix"
        @click="useShowModal"
        >
        Add Screen
      </a-button>
      <a-button
        class="btn-fix"
        @click="deleteScreen"
      >
        <span>Remove Scren</span>
      </a-button>
      <a-button
        class="btn-fix"
        @click="useUpdateScreenn"
      >
        <span> Save Scren</span>
      </a-button>
    </div>

    <div class="right-buttons">
          <a-button
            class="btn-fix"
            @click="onPreview"
          >
            <font-awesome-icon
              :icon="['fas', 'eye']"
              size="lg"
          style="color: #000000"
            />
            <span>Preview</span>
          </a-button>

          <a-button
            class="btn-fix ms-2 me-2"
            @click="generateJson"
          >
            <a-icon
              type="code"
              class="me-2"
            />
            <span>Generate JSON</span>
          </a-button>
    </div>
    <a-modal
      :visible="isModalVisible"
      title="New screen"
      @ok="useAddScreenn(screenNamee)"
      @cancel="useHideModal"
    >
      <a-form
        ref="screenNameForm"
        :model="appsPayload"
      >
        <a-form-item
          label="ScreenName"
          name="screenName"
          :rules="[{ required: true, message: 'required' }]"
        >
          <a-input
            v-model:value="screenNameValue"
            @change="(e) => useFormDataChange(e.target.value, 'screenName')"
          />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>

    <a-layout>
    <a-layout>
      <UiTemplatesMenu :nav-tree="nav">
        <slot />
      </UiTemplatesMenu>
      <a-layout-content
        :style="{ margin: '10px 16px', padding: '10px', background: '#fff', minHeight: '280px', width: '430px' }"
      >
        <UiModalConfirmationModal
          :content="jsoncontent"
          :is-visible="generatejson"
          @onConfirmModal="confirmDelete"
          @onCloseModal="cancelDelete"
        />
        
        <div class="form-body flex-grow-1">
          <div
            :class="[
              'email-body',
              'd-flex',
              'content-droppable-zone',
              'dndList',
              //dragStartClass,
              'align-items-start',
            ]"
            :style="{
              'font-family': 'Helvetica, sans-serif',
              'font-size': '16px',
              'background-color': '#f5f5f5',
              padding: '15px',
            }"
          >
            <div
              class="form-container mx-auto"
              style="
                width: 1100px;
               max-width: 1100px;
                justify-content: color-interpolation-filters: ;
                background-color: #ffffff;
                border-radius: 8px;
                padding: 15px;
                border: solid 1px #ced4da;
              "
            >
              <h2>{{ screenNameValue }}</h2>

              <AddedComponents
          
               :added-components="addedComponents"
                @setSelectedComponent="setSelectedComponent"
                @confirmDelete="confirmDelete"
              />
            </div>
          </div>
        </div>
      </a-layout-content>

      <a-layout-sider
        class="aaa"
        :style="{ background: '#fff', position: 'static', padding: '0' }"
        >
        <div class="panel-options property-column">
          <div class="property-column-inner" />
          <a-form
            ref="appsForm"
            :model="appsPayload"
            layout="vertical"
          >
          <component
            :is="selectedComponent.componentProperty"
            v-if="selectedComponent"
            v-model:block="selectedComponent"
           

          />
          <!-- v-model:form-payload="appsPayload"
           @update-data="useFormDataChange"
            @clear-validate="useClearValidate" -->

          </a-form>
        </div>
      </a-layout-sider>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
// import descreption1Property from '../components/descreption1-property/descreption1-property.vue';
import nav from '~~/assets/data/nav.json';

import imageProperty from '../components/image-property/image-property.vue';
import ButtonProperty from '../components/Button-property/Button-property.vue';
import AddedComponents from '../components/AddedComponents/AddedComponents.vue';
import element2 from '../components/Element2/element2.vue';
import element2Property from '../components/Element2-property/element2-property.vue';
import card from '../components/Card/card.vue';
import cardProperty from '../components/Card-property/card-property.vue';
import mustache from '~~/assets/data/mustache.json';
import ratings from '../components/ratings/ratings.vue';
import descreptionProperty from '../components/descreption-property/descreption-property.vue';

// import { property } from 'cypress/types/lodash';

    export default {
  components: {
    // descreption1Property,
    ButtonProperty,
    // descreptionProperty,
    AddedComponents,
    element2Property,
    element2,
    card,
    cardProperty,
    ratings,

 imageProperty
    
   

  },
  setup() {
    const {
      appsPayloadScreen,
      appsPayload,
      rules,
      screenId,
      Getpayload,
      allUserScreen,
      screenNameForm,
      isModalVisible,
      appsForm,
      useGetAllScreens,
      useUpdateScreen,
      useAddScreen,
      useFormDataChange,
      useClearValidate,
    } = useApps();
    const added_components = ref([]);

    const modal = ref(false);
    const modalConfirm = ref(false);
    const generatejson = ref(false);
    const jsoncontent = ref('');
    const userName = ref('');
    const screenNameFormModel = ref({ text: '' });
    const screenNamee = ref('');
    // const allUserScreen = ref(null);
    const name = ref('screen');
    const screenName = ref('');
    const visible = ref(false);
    const screenNameValue = ref('');
      
    // const showModal = () => {
    // visible.value = true;
    // ref<string[]>(['2']);
    // };
    const currentScreen = ref('');

  return {
      appsForm,
      nav,
      added_components,
      name,
      userName,
      // allUserScreen,
      screenNamee,
      currentScreen,
      screenNameValue,
      visible,
      modalConfirm,
      screenName,
      modal,
      generatejson,
      jsoncontent,
      mustache,
      screenNameFormModel,
      // appsPayload,
      // appsPayloadScreen,
      // rules,
      // screenId,
    
      // useUpdateScreen,
      // Getpayload,
      // screenNameForm,
      // isModalVisible,
      // useAddScreen,
      // useGetAllScreens,
      // useFormDataChange,
      // useClearValidate,
  };
},
  data() {
    return {
      selectedComponent: ref(null),
    };
  },

  mounted() {
    this.useGetAllScreens();
  },
  
methods: {
  onDragOver(event) {
    event.target.classList.add('dndPlaceholder');
  },
    useCatch(name, data) {
      useFormDataChange(data, name);
    },
    getScreen(item) {
     this.appsPayloadScreen = item;
      this.appsPayload= item;
      this.name = item.screenName;
      this.screenNameValue = item.screenName;
      this.userName = item.userName;
      this.screenId = item.id;
      // this.added_components = [];
      console.log('ffffffé', item.addedComponents);
      console.log('kkk', this.allUserScreen);

      // this.added_components = item.addedComponents;
      this.currentScreen = item.id;
      console.log('ou');
    },
    //     emitProjectName(){
    //        const projectName = 'Mon projet';
    //        emit('projectName', projectName);
    // },

  setSelectedComponent(component) {
      this.resetAllSelectedState();
      component.isSelected = true;
      this.selectedComponent = component;
      console.log("eeee",component);
    },
    useAddScreenn(screenName) {
      this.appsPayload.addedComponents = [];
      this.useAddScreen(screenName);
    },

    useUpdateScreenn() {
      this.appsPayloadScreen.addedComponents = this.appsPayload.addedComponents;
      
      this.useUpdateScreen();
    },

  resetAllSelectedState() {
    // reset isSelected property of all components
      this.addedComponents.forEach((c) => { c.isSelected = false });

    },

    useShowModal() {
      this.appsPayload.screenName = '';
      this.screenNameValue = '';
      this.isModalVisible = true;
    },

    useHideModal() {
      this.isModalVisible = false;
  },

  generateJson(event) {
  const organisms = {};
  
  for (let index = 0; index < this.added_components.length; index++) {
    const org = this.added_components[index];
        const resultat = mustache.filter((mustache) => mustache.organismName === org.organismName);

    organisms[`org${index + 1}`] = {
      sectionTitle: org.sectionTitle,
      organismName: org.organismName,
          items: [
            `{{#organisms.org${index + 1}.items}}`,
            resultat,
            `{{^comma}},{{/comma}} {{/organisms.org${index + 1}.items}}`,
          ],
    };
  }
  
  this.generatejson = true;
      this.jsoncontent = JSON.stringify({ screenName: 'SHOP_SERVICES', organisms });
},
  
generatemustache(event) {
      const organisms = this.added_components.map((org, index) => {
    return {
          [` "items":[{{#organisms.org${index + 1}.items}}`]: org,
        };
      });
  },
  
  deleteComponent(event) {
      this.modalConfirm = true;
},
  },
};

// /selectedComponent!: null | ElementInterface;

/*public activeTab = 2;

 function onDrop(e: DragEvent, list){
   
  component = JSON.parse(e.dataTransfer!.getData('component'))
 

    if (!['copy', 'move'].includes(e.dataTransfer!.dropEffect)) {
      return false;
    }

  let index = e..index;

  if (typeof index === 'undefined') {
    index = list.length;
  }

  // Reset selected state
  this.resetAllSelectedState();
  component = JSON.parse(event.data)
  const component = _.cloneDeep(event.data);
  component.isSelected = true;
  component.id = UUID.UUID();

  if (
    [
      'radios',
      'dropdown',
      'input',
      'checkbox',
      'textarea',
      'uploader',
    ].includes(component.machineName)
  ) {
    component.element.field_name = ${component.machineName}-${component.id.split('-').shift()};
  }

  if (
    component.machineName === 'radios' ||
    component.machineName === 'dropdown'
  ) {
    for (let option of component.element.options) {
      option.id = UUID.UUID();
    }
  }

  if (!component.hasOwnProperty('componentSettings')) {
    component.componentSettings = {...this.componentSettings};
  }

  this.selectedComponent = component;
  list.splice(index, 0, component);

  this.activeTab = 1;

  return true;
},

resetAllSelectedState() {
  this.subscriptionForm.content_dnd.added_components.forEach((c) => {
    c.isSelected = false;
  });
}

*/
</script>
<style lang="less">
@import 'ant-design-vue/lib/style/default.less';
@import 'ant-design-vue/lib/style/components.less';
</style>
<style lang="scss">
.oum {
  // background: #000;
  background: #1890ff;
  align-items: center;
  height: calc(9vh - 10px);
    display: flex;
    justify-content: space-between;
  .title {
    color: aqua;
}

  .btn-fix {
    margin-right: 1px;
}

  .btn-fix1 {
    margin-left: -550px;
}
  .left-buttons {
    margin-left: -660px;
}
}

.aaa {
  margin-top: 10px;
  margin-right: 10px;
  background: '#fff';
}

.email-body {
  height: calc(100vh - 100px) !important;
  overflow-y: auto;
  overflow-y: overlay;
}
</style>
