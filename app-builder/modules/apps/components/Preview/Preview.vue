<template>
      <div>
    <div class="modal-header">
      <a-button
        class="btn"
        :class="{
          'btn-default': ['tablet-mode', 'desktop-mode'].includes(modeClass),
          'btn-primary': modeClass === 'mobile-mode'
        }"
        :title="'list group on mobile'"
        @click="setViewMode('mobile')"
      >
        <a-icon type="mobile" />
      </a-button>
      <a-button
        class="btn"
        :class="{
          'btn-default': ['tablet-mode', 'mobile-mode'].includes(modeClass),
          'btn-primary': modeClass === 'tablet-mode'
        }"
        @click="setViewMode('tablet')"
        :title="'Preview on tablet'"
      >
        <a-icon type="tablet" />
      </a-button>
      <a-button
        class="btn"
        :class="{
          'btn-default': ['tablet-mode', 'mobile-mode'].includes(modeClass),
          'btn-primary': modeClass === 'desktop-mode'
        }"
        @click="setViewMode('desktop')"
        :title="'Preview on desktop'"
      >
        <a-icon type="desktop" />
      </a-button>
    </div>
    <div class="modal-body">
      <div :class="modeClass">
            <BlockPreviewer
              :added-components="addedComponents"
            />
        
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import BlockPreviewer from '../BlockPreviewer/BlockPreviewer.vue'
export default {
    components: {BlockPreviewer},

 
  props: {
    addedComponents: {
      type: Object,
      required: true,
    },
  },

  emits: ['setViewMode'],

  setup() {
    const modeClass = ref('desktop-mode');
    return { modeClass };
  },


    methods: {
      setViewMode(mode: string) {
            switch (mode) {
              case 'mobile':
                this.modeClass = 'mobile-mode';
                this.$emit('setViewMode', 'mobile-mode');
                break;
              case 'tablet':
                this.modeClass = 'tablet-mode';
                this.$emit('setViewMode', 'tablet-mode');
                break;
              default:
                this.modeClass = 'desktop-mode';
                this.$emit('setViewMode', 'desktop-mode'); 
                break;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.full-width { 
    .modal-dialog.modal-lg { 
        max-width: 100%; 
        margin-left: 15px; 
        margin-right: 15px; 
    } 
} 
.mobile-mode {
max-width: 414px; 
margin: 0 auto; 
} 
.tablet-mode {
    max-width: 768px; 
    margin: 0 auto; 
} 
.desktop-mode { 
    min-width: 992px;
}

</style>
