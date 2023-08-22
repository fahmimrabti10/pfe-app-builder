<template>
  <a-form layout="vertical">
    <ui-templates-form>
      <template #form>
        
        <lazy-ui-forms-form-builder
          :langs="langs"
          :rules="rules"
          :form-model="formImg
"
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
import form from '../../assets/data/formImg.json';

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

const formImg = useTranslate(form);

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
    component.value.items.coverImageUrl = newValue['Image'];

   component.value.sectionTitle = newValue['SectionTitle'];
  },
  { deep: true }
);
const brn = () => {
  localPayload.value.Image = component.value.items.coverImageUrl;

  localPayload.value.SectionTitle = component.value.sectionTitle;
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


<style lang="scss" scoped>
::deep {
  @import '@UI/assets/scss/form';

  :deep(.textfield-number) {
    width: 100%;
  }
}
</style>
