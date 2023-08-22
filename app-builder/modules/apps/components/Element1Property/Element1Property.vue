<template>
  <a-form layout="vertical">
    <ui-templates-form>
      <template #form>
        <!-- {{ formPayload }} -->
        <lazy-ui-forms-form-builder
          :langs="langs"
          :rules="rules"
          :form-model="formElement1"
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

import form from '../../assets/data/formElement1.json';
const emit = defineEmits([...formEvents(null).events, 'update:block']);
const { useFormDataChange, useClearValidate } = formEvents(emit);

const formElement1 = useTranslate(form);

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
    if (newValue['Image'][0] !== undefined && newValue['Image'][0]['thumbUrl'] !== undefined) {
      component.value.items.coverImageUrl = newValue['Image'][0]['thumbUrl'];
    }

    component.value.items.title = newValue['Title'];

    component.value.items.Subtitle = newValue['SubTitle'];
    component.value.items.SubTitle2 = newValue['SubTitle2'];
    component.value.items.Subtitle1 = newValue['Subtitle1'];
  },
  { deep: true }
);

const brn = () => {
  if (component.value.items.coverImageUrl !== undefined) { localPayload.value.Image =
component.value.items.coverImageUrl[0]["thumbUrl"]; }

  localPayload.value.Title = component.value.items.title;
  localPayload.value.SubTitle = component.value.items.Subtitle;
  localPayload.value.SubTitle2 = component.value.items.SubTitle2;

  localPayload.value.Subtitle1 = component.value.items.Subtitle1;
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
