<template>
  <a-form layout="vertical">
    <ui-templates-form>
      <template #form>
        
        <lazy-ui-forms-form-builder
          :langs="langs"
          :rules="rules"
          :form-model="formImg"
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
import form from '../../assets/data/formImg.json';

const emit = defineEmits([...formEvents(null).events, 'update:block']);
const { useFormDataChange, useClearValidate } = formEvents(emit);

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
    if (newValue['Image'][0] !== undefined && newValue['Image'][0]["thumbUrl"] !== undefined) {
      component.value.items.coverImageUrl = newValue['Image'][0]["thumbUrl"];
    }
   component.value.sectionTitle = newValue['SectionTitle'];
  },
  { deep: true }
);
const brn = () => {
  if (component.value.items.coverImageUrl !== undefined) {
    localPayload.value.Image = component.value.items.coverImageUrl[0]["thumbUrl"];
  }
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
