<template>
  <a-form layout="vertical">
    <ui-templates-form>
      <template #form>
        <!-- {{ formPayload }} -->
        <lazy-ui-forms-form-builder
          :langs="langs"
          :rules="rules"
          :form-model="formcard2"
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

import form from '../../assets/data/formcard2.json';
const emit = defineEmits([...formEvents(null).events, 'update:block']);
const { useFormDataChange, useClearValidate } = formEvents(emit);

const formcard2 = useTranslate(form);

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
    if (newValue['Image'][0] !== undefined && newValue['Image'][0]["thumbUrl"] !== undefined) {
component.value.items.Image= newValue['Image'][0]["thumbUrl"]; }

    component.value.items.SubTitle = newValue['SubTitle'];

    component.value.items.Title = newValue['Title'];


    component.value.items.Path = newValue['Path'];
  },
  { deep: true }
);

const brn = () => {
  if (component.value.items.Image !== undefined) { localPayload.value.Image =
component.value.items.Image[0]["thumbUrl"]; }

    localPayload.value.Path= component.value.items.Path;

  localPayload.value.SubTitle = component.value.items.SubTitle;
  localPayload.value.Title = component.value.items.Title;


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
