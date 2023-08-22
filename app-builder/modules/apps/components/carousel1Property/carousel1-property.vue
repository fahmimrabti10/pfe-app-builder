<template>
  <a-form layout="vertical">
    <ui-templates-form>
      <template #form>
        <!-- {{ formPayload }} -->
        <lazy-ui-forms-form-builder
          :langs="langs"
          :rules="rules"
          :form-model="formCard3"
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

import form from '../../assets/data/formCard3.json';
const emit = defineEmits([...formEvents(null).events, 'update:block']);
const { useFormDataChange, useClearValidate } = formEvents(emit);

const formCard3 = useTranslate(form);

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
      if (newValue['thumbnailUrl1'][0] !== undefined && newValue['thumbnailUrl1'][0]['thumbUrl'] !== undefined) {
component.value.items.thumbnailUrl1 = newValue['thumbnailUrl1'][0]['thumbUrl']; }


if (newValue['thumbnailUrl1'][0] !== undefined && newValue['thumbnailUrl2'][0]['thumbUrl'] !== undefined) {
component.value.items.thumbnailUrl2 = newValue['thumbnailUrl2'][0]['thumbUrl']; }


if (newValue['thumbnailUrl1'][0] !== undefined && newValue['thumbnailUrl3'][0]['thumbUrl'] !== undefined) {
component.value.items.thumbnailUrl3 = newValue['thumbnailUrl3'][0]['thumbUrl']; }

        component.value.sectionTitle = newValue['sectionTitle'];
        component.value.items.Title1= newValue['Title1'];

    component.value.items.SubTitle1= newValue['SubTitle1'];
        component.value.items.Title2= newValue['Title2'];

    component.value.items.SubTitle2= newValue['SubTitle2'];


            component.value.items.Title3= newValue['Title3'];

    component.value.items.SubTitle3= newValue['SubTitle3'];

   
    // component.value.items.title = newValue['element2Title'];
    // component.value.items.thumbnailUrl1 = newValue['thumbnailUrl1'];
    //   component.value.items.thumbnailUrl2 = newValue['thumbnailUrl2'];
    //     component.value.items.thumbnailUrl3 = newValue['thumbnailUrl3'];

  },
  { deep: true }
);
const brn = () => {
  if (component.value.items.thumbnailUrl1 !== undefined) { localPayload.value.thumbnailUrl1 =
    component.value.items.thumbnailUrl1[0]['thumbUrl'];
  }
if (component.value.items.thumbnailUrl2 !== undefined) { localPayload.value.thumbnailUrl2 =
    component.value.items.thumbnailUrl2[0]['thumbUrl'];
  }
if (component.value.items.thumbnailUrl3 !== undefined) { localPayload.value.thumbnailUrl3 =
component.value.items.thumbnailUrl3[0]['thumbUrl']; }



  localPayload.value.sectionTitle = component.value.sectionTitle;
  localPayload.value.SubTitle1  = component.value.items.SubTitle1;
    localPayload.value.Title1  = component.value.items.Title1;

 localPayload.value.SubTitle2  = component.value.items.SubTitle2;
 
    localPayload.value.Title2  = component.value.items.Title2;
     localPayload.value.SubTitle3  = component.value.items.SubTitle3;
    localPayload.value.Title3  = component.value.items.Title3;


//   localPayload.value.thumbnailUrl1 = component.value.items.thumbnailUrl1;
// localPayload.value.thumbnailUrl2 = component.value.items.thumbnailUrl2;
// localPayload.value.thumbnailUrl3 = component.value.items.thumbnailUrl3;
};
</script>

<style lang="scss" scoped>
::deep {
  @import '@UI/assets/scss/form';

  :deep(.textfield-number) {
    width: 50%;
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
