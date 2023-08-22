<template>
  <a-form layout="vertical">
    <ui-templates-form>
      <template #form>
        <!-- {{ formPayload }} -->
        <lazy-ui-forms-form-builder
          :langs="langs"
          :rules="rules"
          :form-model="formDes1"
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

import form from '../../assets/data/formDes1.json';
const emit = defineEmits([...formEvents(null).events, 'update:block']);

const { useFormDataChange, useClearValidate } = formEvents(emit);

const formDes1
 = useTranslate(form);

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
    component.value.items.text = newValue['text'];
    component.value.items.truncatedText= newValue['truncatedText'];
    component.value.sectionTitle= newValue['sectionTitle'];
  
  },
  { deep: true }
);

const brn = () => {
  localPayload.value.text = component.value.items.text;
  localPayload.value.sectionTitle = component.value.sectionTitle;
  localPayload.value.truncatedText = component.value.items.truncatedText;

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
}
</style>
