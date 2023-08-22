<template>
  <a-row class="mb-2">
    <a-col class="mb-2" :span="24">
      <a-form-item label="title">
        <a-input v-model:value="component.items.title" size="small" />
      </a-form-item>
    </a-col>
  </a-row>
  <a-row class="mb-2">
    <a-col class="mb-2" :span="24">
      <a-form-item label="number_of_tickets_available">
        <a-input v-model:value="component.number_of_tickets_available" size="small" />
      </a-form-item>
    </a-col>
  </a-row>
  <a-row class="mb-2">
    <a-col class="mb-2" :span="24">
      <a-form-item label="title">
        <a-input v-model:value="component.items.key" size="small" />
      </a-form-item>
    </a-col>
  </a-row>
</template>
<script>
import nav from '~~/assets/data/nav.json';

export default defineComponent({
  name: 'card12PropertyComponent',

  props: {
    block: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },
  emits: ['update:block'],

  setup(props) {
    const component = computed({
      get: () => props.block,
    });
    return { component, nav };
  },
});
</script>
