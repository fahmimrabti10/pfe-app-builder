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
   component.value.items.title  = newValue['element2Title'];
   component.value.items.thumbnailUrl= newValue['titleImage'];
    component.value.items.subtitle = newValue['element2SubTitle'];
    

  },
  { deep: true }
);
const brn = () => {
  localPayload.value.element2SectionTitle = component.value.sectionTitle;
  localPayload.value.element2SectionTitle = component.value.items.title;
  localPayload.value.element2SectionTitle = component.value.items.subtitle ;
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
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
