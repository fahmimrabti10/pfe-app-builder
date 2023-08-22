<template>
  <div class="oum">
    <h1 class="title">myProject</h1>
    <a-dropdown>
      <template #overlay>
        <a-menu @click="handleMenuClick">
          <a-menu-item v-for="item in allUserScreen" :key="item.id" @click="getScreen(item, $route.params.id)">
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
      <a-button class="btn-fix" @click="useShowModal"> Add Screen </a-button>
      <a-button class="btn-fix" @click="deleteScreen">
        <span>Remove Screen</span>
      </a-button>
      <a-button class="btn-fix" @click="useUpdateScreenn">
        <span>Save Screen</span>
      </a-button>
    </div>

    <div class="right-buttons">
      <a-button class="btn-fix" @click="onPreview">
        <font-awesome-icon :icon="['fas', 'eye']" size="lg" style="color: #000000" />
        <span>Preview</span>
      </a-button>

      <a-button class="btn-fix ms-2 me-2" @click="generateJson">
        <a-icon type="code" class="me-2" />
        <span>Generate Mustache</span>
      </a-button>

    <!-- <input type="file" id="fileInput" accept=".mustache">
<button onclick="importOrganismObjects()">Importer</button> -->
    </div>
    <a-modal
      :visible="isModalVisible"
      title="New screen"
      @ok="useAddScreenn(screenNamee, $route.params.id)"
      @cancel="useHideModal"
    >
      <a-form ref="screenNameForm" :model="appsPayload">
        <a-form-item label="ScreenName" name="screenName" :rules="[{ required: true, message: 'required' }]">
          <a-input v-model:value="screenNameValue" @change="(e) => useFormDataChange(e.target.value, 'screenName')" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>

    <a-modal
        title="Preview" 
        :visible="isPreviewVisible" 
        @ok="closePreview"
        :class="classMode"
        @cancel="closePreview">
{{ modeClass}}
      <Preview :added-components="appsPayload.addedComponents"
      @setViewMode="setViewMode" />
    </a-modal>


  <a-layout>
    <a-layout>
      <UiTemplatesMenu :nav-tree="nav">
        <slot />
      </UiTemplatesMenu>
      <a-layout-content
        :style="{ margin: '10px 16px', padding: '10px', background: '#fff', minHeight: '280px', width: '430px' }"
      >
        <!-- <UiModalConfirmationModal
          :content="jsoncontent"
          :is-visible="generatejson"
          @onConfirmModal="cancelDelete"
          @onCloseModal="cancelDelete"
        /> -->

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
                :added-components="appsPayload.addedComponents"
                @setSelectedComponent="setSelectedComponent"
                @confirmDelete="confirmDelete"
              />
            </div>
          </div>
        </div>
      </a-layout-content>

      <a-layout-sider class="aaa" :style="{ background: '#fff', position: 'static', padding: '15px' }">
        <div class="panel-options property-column">
          <div class="property-column-inner" />
          <a-form ref="appsForm" :model="appsPayload" layout="vertical">
            <component
              :is="selectedComponent.componentProperty"
              v-if="selectedComponent"
              v-model:block="selectedComponent"
              v-model:form-payload="appsPayload"
              @update-data="useFormDataChange"
              @clear-validate="useClearValidate"
            />
          </a-form>
        </div>
      </a-layout-sider>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import Preview from '../components/Preview/Preview.vue';
import BlockPreviewer from '../components/BlockPreviewer/BlockPreviewer.vue'
import Element1Property from '../components/Element1Property/Element1Property.vue';
import descreption1Property from '../components/descreption1-property/descreption1-property.vue';
import nav from '~~/assets/data/nav.json';
import card13Property from '../components/card13Property/card13-property.vue';
import imageProperty from '../components/image-property/image-property.vue';
import ButtonProperty from '../components/Button-property/Button-property.vue';
import AddedComponents from '../components/AddedComponents/AddedComponents.vue';
import moduleName from 'module';
import descreptionProperty from '../components/descreption-property/descreption-property.vue';
import element2Property from '../components/Element2-property/element2-property.vue';
import card from '../components/Card/card.vue';
import elemente2Property from '../components/elemente2-property/elemente2-property.vue';
import card7Property from '../components/card7Property/card7-property.vue';
import cardProperty from '../components/Card-property/card-property.vue';
import card10Property from '../components/card10-property/card10-property.vue';
import ratings from '../components/ratings/ratings.vue';
import descreptionProperty from '../components/descreption-property/descreption-property.vue';
import carousel1Property from '../components/carousel1Property/carousel1-property.vue';
// import card2Property from '../components/card2Property/card2-property.vue';
import card12Property from '../components/card12-property/card12-property.vue';
import templ1Property from '../components/temp1-property/templ1-property.vue';
import card5Property from '../components/card5Property/card5-property.vue';
import mustache from '~~/assets/data/mustache.json';

// import { property } from 'cypress/types/lodash';

export default {
  components: {
    // card2Property,
    card12Property,
    descreption1Property,
    ButtonProperty,
    descreptionProperty,
    AddedComponents,
    BlockPreviewer,
    element2Property,
    Element1Property,
    card,
    elemente2Property,

    card13Property,
    cardProperty,
    ratings,
    carousel1Property,
    templ1Property,
    card10Property,
     Preview,
    card7Property,
    imageProperty,
    card5Property,
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
    const isPreviewVisible = ref(false);
    const previewContent = ref('');
    const classMode = ref('desktop-mode')


    // const showModal = () => {
    // visible.value = true;
    // ref<string[]>(['2']);
    // };
    const currentScreen = ref('');

    return {
      classMode,
      isPreviewVisible,
      previewContent,
      appsForm,
      nav,
      added_components,
      name,
      userName,
      allUserScreen,
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
      appsPayload,
      appsPayloadScreen,
      rules,
      screenId,
      useUpdateScreen,
      Getpayload,
      screenNameForm,
      isModalVisible,
      useAddScreen,
      useGetAllScreens,
      useFormDataChange,
      useClearValidate,
    };
  },
  data() {
    return {
      selectedComponent: ref(null),
    };
  },

  mounted() {
    this.Getpayload.appId = useNuxtApp().$router.currentRoute.value.params.id;
    this.useGetAllScreens();
  },

  methods: {
    async sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },

    onDragOver(event) {
      event.target.classList.add('dndPlaceholder');
    },
    useCatch(name, data) {
      useFormDataChange(data, name);
    },
    getScreen(item, appId) {
      this.appsPayloadScreen = item;
      //this.appsPayloadScreen.value.appId = appId
      this.appsPayload = item;
      this.appsPayload.appId = appId;
      this.name = item.screenName;
      this.screenNameValue = item.screenName;
      this.userName = item.userName;
      this.screenId = item.id;
      // this.added_components = [];
      console.log('ffffffé', this.appsPayload);

      // this.added_components = item.addedComponents;
      this.currentScreen = item.id;
    },

    confirmDelete(element) {
      console.log('element', element);
      console.log('ccc', this.appsPayload.addedComponents);
      const index = this.appsPayload.addedComponents.findIndex((obj) => {
        return obj.uuid === element.uuid;
      });

      if (index !== -1) {
        console.log('index', index);
        this.appsPayload.addedComponents.splice(index, 1);
      }
    },
    //     emitProjectName(){
    //        const projectName = 'Mon projet';
    //        emit('projectName', projectName);
    // },

    setSelectedComponent(component) {
      this.resetAllSelectedState();
      component.isSelected = true;
      this.selectedComponent = component;
    },

    setViewMode(mode: string) {
      this.classMode = mode;
    },

    async useAddScreenn(screenName, appId) {
      this.appsPayload.addedComponents = [];
      this.appsPayload.appId = appId;
      this.useAddScreen(screenName);
      await this.sleep(500);
    },

    useUpdateScreenn() {
      this.appsPayloadScreen.addedComponents = this.appsPayload.addedComponents;

      this.useUpdateScreen();
    },

    resetAllSelectedState() {
      // reset isSelected property of all components
      this.appsPayload.addedComponents.forEach((c) => {
        c.isSelected = false;
      });
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
      console.log('this.added_component', this.appsPayload.addedComponents);
      console.log('length', this.appsPayload.addedComponents.length);

      for (let index = 0; index < this.appsPayload.addedComponents.length; index++) {
        const org = this.appsPayload.addedComponents[index];
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
      // this.jsoncontent = JSON.stringify({ screenName: this.screenNameValue, organisms });
      const jsonContent = JSON.stringify({ screenName: this.screenNameValue, organisms }, null, 2);
      const blob = new Blob([jsonContent], { type: 'text/plain' });

      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'nom-du-fichier.mustach';

      link.click();
      URL.revokeObjectURL(url);
    },

    generatemustache(event) {
      const organisms = this.added_components.map((org, index) => {
        return {
          [` "items":[{{#organisms.org${index + 1}.items}}`]: org,
        };
      });
    },
    
   onPreview() {
      this.isPreviewVisible = true;
      //this.previewContent = this.generateHtml();

    },
    closePreview() {
      this.isPreviewVisible = false;
  },

 importOrganismObjects() {
  const fileInput = document.getElementById('fileInput');
  const file =fileInput.files[0];
  if (!file) {
    console.error("Veuillez sélectionner un fichier .mustache.");
}
    },

  

    cancelDelete(event): void {
      this.generatejson = false;
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
    margin-left: 2%;
  }

  .btn-fix {
    margin-right: 1px;
  }

  .btn-fix1 {
    margin-left: -580px;
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
.mobile-mode { max-width: 414px; margin: 0 auto; } 
.tablet-mode { max-width: 768px; margin: 0 auto; } 
.desktop-mode {
min-width: 992px; }

</style>

