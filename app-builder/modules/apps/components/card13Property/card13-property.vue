<template>
  <a-form layout="vertical">
    <ui-templates-form>
      <template #form>
        <!-- {{ formPayload }} -->
        <lazy-ui-forms-form-builder
          :langs="langs"
          :rules="rules"
          :form-model="formcard12"
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

import form from '../../assets/data/formcard12.json';
const emit = defineEmits([...formEvents(null).events, 'update:block']);
const { useFormDataChange, useClearValidate } = formEvents(emit);

const formcard12 = useTranslate(form);

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
    component.value.sectionTitle = newValue['sectionTitle'];

    component.value.items.title = newValue['Title'];
    component.value.items.coverImageUrl = newValue['Image'];
    component.value.items.value = newValue['value'];
    component.value.items.key = newValue['key'];
    component.value.items.number_of_tickets_available = newValue['number_of_tickets_available'];
  },
  { deep: true }
);

const brn = () => {
  localPayload.value.sectionTitle = component.value.sectionTitle;
  localPayload.value.Title = component.value.items.title;
  localPayload.value.SubTitle = component.value.items.Subtitle;
  localPayload.value.SubTitle2 = component.value.items.SubTitle2;
  localPayload.value.Image = component.value.items.coverImageUrl;
  localPayload.value.number_of_tickets_available = component.value.items.number_of_tickets_available;
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
