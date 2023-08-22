<template>
  <div>
    <button @click="openPopup">
      Open Popup
    </button>
    <div class="photos">
      <draggable
        :list="formPayload.Image"
        group="carousel"
      >
        <template #item="{ element }">
          <a-card
            :key="element"
            class="photo"
          >
            <img
              class="photo-item"
              :src="element.thumbUrl"
              alt="Photo"
            >
          </a-card>
        </template>
      </draggable>
    </div>

    <a-modal
      :visible="isPopupVisible"
      title="Upload Photos"
      width="800px"
      centered="true"
      @ok="ok"
      @cancel="useHideModal"
    >
      <div class="images-container">
        <draggable
          :list="formPayload.Image"
          group="carousel"
        >
          <template #item="{ element }">
            <a-card class="container">
              <div>
                <img
                  class="photo-item"
                  :src="element.thumbUrl"
                  alt="Photo"
                >
                <div class="hading">
                  <!-- <span>Title:</span> -->
                  <a-input
                    v-model:value="element.title"
                    class="title"
                  />
                  <!-- <span>Sub Title:</span>  -->
                  <a-input
                    v-model:value="element.subtitle"
                    class="sub-title"
                  />
                  <!-- <a-input v-model:value="element.title" class="title">
                  Title:
                </a-input> -->
                </div>
              </div>
            </a-card>
          </template>
        </draggable>
      </div>
      <a-form layout="horizontal">
        <ui-templates-form>
          <template #form>
           
            <lazy-ui-forms-form-builder
              :langs="langs"
              :rules="rules"
              :form-model="formImage"
              @click="brn"
              @updateData="useFormDataChange"
              @clearValidate="useClearValidate"
            />
          </template>
        </ui-templates-form>
      </a-form>
    </a-modal>
  </div>
</template>
<script lang="ts" setup>
const { rules } = useApps();
import form from '../../assets/data/formImage.json';
const emit = defineEmits([...formEvents(null).events, 'update:block']);
const { useFormDataChange, useClearValidate } = formEvents(emit);

const formImage = useTranslate(form);

const props = defineProps({
  block: {
    type: Object,
    default: () => ({}),
    required: true,
  },
  formPayload: {
    type: Object,
    default: () => ({}),
    required: true,
  },
});

// const emit = defineEmits('update:block');
const isPopupVisible = ref(false);

const component = computed({
  get() {
    return props.block;
  },
  set(value) {
    emit('update:block', value);
  },
});

const localPayload = ref(props.formPayload);
watch(
  () => props.formPayload,
  (newValue) => {
    component.value.items.coverImageUrl = newValue['Image'];
    component.value.items.title = newValue['element2Title'];
    component.value.items.thumbnailUrl = newValue['thumbnailUrl'];
    component.value.items.subtitle = newValue['element2SubTitle'];
  },
  { deep: true }
);
const brn = () => {
  if (component.value.items.coverImageUrl !== undefined) { localPayload.value.Image =
component.value.items.coverImageUrl[0]["thumbUrl"]; }

  localPayload.value.element2SectionTitle = component.value.items.title;
  localPayload.value.element2SectionTitle = component.value.items.subtitle;

  localPayload.value.thumbnailUrl = component.value.items.thumbnailUrl;
};

const openPopup = () => {
  isPopupVisible.value = true;
};

const ok = () => {
  isPopupVisible.value = false;
};

const useHideModal = () => {
  isPopupVisible.value = false;
};
</script>

<style lang="scss" scoped>
.photos {
  margin: 1px;
border: 1px solid lightgray;



  .photo {
    width: 50px;
    height: 40px;
    display: inline-block; 
    margin: 2px;

    .photo-item {
      margin-right: 8px;
      margin-bottom: 8px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}

.images-container
 {
  /* overflow-y: scroll; */
}
.container {
  width: 130px;
  height: 173px;
  display: inline-block;
  margin: 5px;

  .photo-item {
    margin-right: 8px;
    margin-bottom: 8px;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60%;
  }
  .hading {
    position: absolute;
    top: 61%;
    left: 0%;
    width: 100%;

    .title {
    }
    .sub-title {
    }
  }
}
</style>
