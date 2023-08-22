<template>
  <a-form layout="vertical">
    <ui-templates-form>
      <template #form>
        {{ formPayload }}
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

  <!-- <a-form layout="vertical">
    <ui-templates-form>
      <template #form>
        <lazy-ui-forms-form-builder
          :langs="langs"
          :form-model="formImage"
          @updateData="useFormDataChange"
          @fileValueChanged="handleFileValueChanged2"
          @clearValidate="useClearValidate"
        />
      </template>
    </ui-templates-form>
  </a-form> -->
  <!-- 
  <a-col :span="22">
    <a-form-item label="sectionTitle">
      <a-input
        v-model:value="component.sectionTitle"
        size="small"
      />
    </a-form-item>
  </a-col> -->
</template>

<script lang="ts" setup>
const { rules } = useApps();
import form from '../../assets/data/formImage.json';
const emit = defineEmits([...formEvents(null).events, 'update:block']);
const { useFormDataChange, useClearValidate } = formEvents(emit);

// const handleFileValueChanged = (value) => {
//   props.block.items.coverImageUrl = value['imageUrl']['fileList'][0]['response']['url'];
//   console.log('c', value);

//   // Perform any necessary actions with the data
// };
// const handleFileValueChanged2 = (value) => {
//   props.block.items.thumbnailUrl = value['imageUrl']['fileList'][0]['response']['url']; // Perform any necessary actions with the data };
// };
// const emit = defineEmits(['customEmit']);

// const useFormDataChange = (data, name) => {
//   emit("customEmit", name, data);
// };

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
    component.value.sectionTitle = newValue['element2SectionTitle'];
    component.value.items.coverImageUrl = newValue['sectionImage'];
    component.value.items.title = newValue['element2Title'];
    component.value.items.thumbnailUrl = newValue['titleImage'];
    component.value.items.subtitle = newValue['element2SubTitle'];
  },
  { deep: true }
);
const brn = () => {
  localPayload.value.element2SectionTitle = component.value.sectionTitle;
  localPayload.value.element2SectionTitle = component.value.items.title;
  localPayload.value.element2SectionTitle = component.value.items.subtitle;
  localPayload.value.sectionImage = component.value.items.coverImageUrl;
  localPayload.value.titleImage = component.value.items.thumbnailUrl;
};
</script>

<style lang="scss" scoped>
::deep {
  @import '@UI/assets/scss/form';

  :deep(.textfield-number) {
    width: 100%;
  }
}
</style>
