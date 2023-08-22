<template>
  <a-row class="mb-2">
    <a-col :span="24">
      <label
        class="mb-2"
        translate
      >Button type</label>
      <a-select
        v-model="component.items.button_type"
        class="form-select form-select-sm"
      >
        <a-select-option
          value="submit"
          translate
        >
          Submit
        </a-select-option>
        <a-select-option
          value="button"
          translate
        >
          Button
        </a-select-option>
      </a-select>
    </a-col>
  </a-row>



  
  <a-row class="mb-2">
    <a-col
      class="mb-2"
      :span="24"
    >
      <a-form-item label="Button text">
        <a-input
          v-model:value="component.items.content"
          size="small"
        />
      </a-form-item>
    </a-col>
  </a-row>
  <a-row class="mb-2">
    <a-col :span="24">
      <a-form-item label="Link to :">
        <a-input
          v-model:value="component.items.link_to"
          placeholder="Enter the link here"
          size="small"
        />
      </a-form-item>
    </a-col>
  </a-row>
  <div class="row mb-2">
    <label
      class="mb-2 col-sm-12"
      translate
    >Button style</label>
    <div class="col-sm-12 mb-2">
      <div class="row g-0">
        <a-button
          class="col button-style"
          :class="{'btn-flat': buttonStyle === 'flat', 'btn-raised': buttonStyle === 'raised', 'btn-gradient': buttonStyle === 'gradient', 'active': buttonStyle === 'flat' && !items.box_shadow_color && !items.gradient_top_color, 'active': buttonStyle === 'raised' && items.box_shadow_color, 'active': buttonStyle === 'gradient' && items.gradient_top_color }"
          :title="'Flat button' | translate"
          @click="setButtonStyle('flat')"
        />
        <a-button
          class="col button-style"
          :class="{'btn-flat': buttonStyle === 'flat', 'btn-raised': buttonStyle === 'raised', 'btn-gradient': buttonStyle === 'gradient', 'active': buttonStyle === 'raised' && items.box_shadow_color }"
          :title="'Raised button' | translate"
          @click="setButtonStyle('raised')"
        />
        <a-button
          class="col button-style"
          :class="{'btn-flat': buttonStyle === 'flat', 'btn-raised': buttonStyle === 'raised', 'btn-gradient': buttonStyle === 'gradient', 'active': buttonStyle === 'gradient' && items.gradient_top_color }"
          :title="'Gradient button'" 
          @click="setButtonStyle('gradient')"
        />
      </div>
    </div>
  </div>
  <a-row class="mb-2">
    <a-col :span="6">
      <a-form-item label="Button color">
        <input
          v-model="component.items.button_color"
          type="color"
          :style="{ background: component.items.text_color }"
        >
      </a-form-item>
    </a-col>
  </a-row>
  <div class="row mb-2">
    <label class="col-sm-6">Round corners</label>
    <div class="col-sm-6">
      <a-input-number
        v-model:value="component.items.rounded_corners"
        :min="0"
      />
    </div>
  </div>
  <div class="row mb-2">
    <label class="col-sm-6">Button height</label>
    <div class="col-sm-6">
      <a-input-number
        v-model:value="component.items.height"
        :min="0"
      />
    </div>
  </div>
  <div class="row mb-2">
    <label class="col-sm-6">Button size</label>
    <div class="col-sm-6">
      <a-select v-model:value="component.items.button_size_type">
        <a-select-option value="auto">
          Auto
        </a-select-option>
        <a-select-option value="full-width">
          The full width
        </a-select-option>
        <a-select-option value="fixed">
          Fixed size
        </a-select-option>
      </a-select>
    </div>
  </div>
  <div
    v-if="component.items.button_size_type === 'fixed'"
    class="row mb-2"
  >
    <div class="col-sm-6 offset-6">
      <a-input-number
        v-model="component.items.button_size"
        :min="0"
        class="form-control form-control-sm"
      />
    </div>
  </div>
  <div class="row mb-2">
    <div class="col-6">
      <a-form-item label="Alignment">
        <div class="row g-0">
          <a-button
            :class="{ active: component.items.alignment === 'left' }"
            @click="component.items.alignment = 'left'"
          >
            <a-icon type="align-left" />
          </a-button>
          <a-button
            :class="{ active: component.items.alignment === 'center' }"
            @click="component.items.alignment = 'center'"
          >
            <a-icon type="align-center" />
          </a-button>
          <a-button
            :class="{ active: component.items.alignment === 'right' }"
            @click="component.items.alignment = 'right'"
          >
            <a-icon type="align-right" />
          </a-button>
        </div>
      </a-form-item>
    </div>
  </div>
  <a-divider />
  <div>
    <a-form-item label="The font of inscription">
      <div class="mb-2 d-flex justify-content-between">
        <a-input-number
          v-model:value="component.items.font_size"
          class="form-control form-control-sm"
          :min="8"
          style="width: 60px"
        />
        <app-font-options :component="component" />
        <div>
          <a-button
            :class="{ active: component.items.font_bold }"
            @click="component.items.font_bold = !component.items.font_bold"
          >
            <a-icon type="bold" />
          </a-button>
          <a-button
            :class="{ active: component.items.font_italic }"
            @click="component.items.font_italic = !component.items.font_italic"
          >
            <a-icon type="italic" />
          </a-button>
        </div>
      </div>
    </a-form-item>
  </div>
  <div class="row mb-2">
    <div class="col-6">
      <a-form-item label="Text color">
        <div>
          <a-input
            v-model:value="component.items.text_color"
            type="color"
            :style="{ background: component.items.text_color }"
            @change="onColorChange"
          />
        </div>
      </a-form-item>
    </div>
  </div>
  
  <a-row class="mb-2">
    <a-col
      :span="6"
      class="align-right"
    >
      {{ $t('Alignment') }}
    </a-col>
    <a-col :span="18">
      <a-select v-model:value="component.items.vertical_align">
        <a-select-option value="top">
          {{ $t('Top') }}
        </a-select-option>
        <a-select-option value="middle">
          {{ $t('Center') }}
        </a-select-option>
        <a-select-option value="bottom">
          {{ $t('Bottom') }}
        </a-select-option>
      </a-select>
    </a-col>
  </a-row>
</template>


<script>

import nav from '~~/assets/data/nav.json';


export default defineComponent({
  name: 'ButtonPropertyComponent',
  props: {
    block: {
      type: Object,
      default: () => ({}),
      required: true
    }
  },
  emits: ['update:block'],

  
    


  setup(props) {
      const component = computed({
          get: () => props.block,
      })
      return { component,nav}

  },
    
  methods: {

    
    setButtonStyle(style) {

      const c = this.component.items.button_color;
      switch (style) {
        case 'raised':
          this.component.items.box_shadow_color = c.darken(0.2).hex().toString();
          this.component.items.gradient_top_color = '';
          this.component.items.gradient_bottom_color = '';
          break;
        case 'gradient':
          this.component.items.box_shadow_color = '';
          this.component.items.gradient_top_color = c.lighten(0.2).hex().toString();
          this.component.items.gradient_bottom_color = c.darken(0.2).hex().toString();
          break;
        default:
          this.component.items.box_shadow_color = '';
          this.component.items.gradient_top_color = '';
          this.component.items.gradient_bottom_color = '';
          break;
      }

     },

      
    onColorPickerChange(color) {
      let buttonStyle = 'flat';
      if (this.component.items.box_shadow_color) {
        buttonStyle = 'raised';
      } else if (this.component.items.gradient_top_color) {
        buttonStyle = 'gradient';
      }
      this.setButtonStyle(buttonStyle);
    },
  
  },
  
});
</script> 


<!-- 

  <style lang="less" scoped>
     @import 'ant-design-vue/dist/antd.css';
     @import 'ant-design-vue/lib/button/style/index.less';
     @import 'ant-design-vue/lib/Icon/style/index.less';
    
     @import 'ant-design-vue/lib/select/style/index.less';
    
     @import 'ant-design-vue/lib/form/style/index.less';
     @import 'ant-design-vue/lib/divider/style/index.less';
     @import 'ant-design-vue/lib/input-number/style/index.less';
 
     
     </style> -->
 
 
 

<style scoped>
 

.picker {
  display: inline-block;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(3, 1, 1, 0.08);
}

.button-style {
  background-position: 50% 50%;
  background-size: cover;
  height: 40px;
  opacity: 0.6;
  outline: none;
}

  .button-style.active {
  opacity: 1;
       }

.button-style.btn-gradient {
  background-image: url(/assets/svg/btn-gradient.svg);
}

.button-style.btn-flat {
  background-image: url(/assets/svg/btn-flat.svg);
}

.button-style.btn-raised {
  background-image: url(/assets/svg/btn-raised.svg);
}
</style> 
