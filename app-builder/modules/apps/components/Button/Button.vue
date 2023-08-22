<template>
  <div
    :style="{
      paddingTop: `${component.componentSettings.padding_top}px`,
      paddingRight: `${component.componentSettings.padding_right}px`,
      paddingBottom: `${component.componentSettings.padding_bottom}px`,
      paddingLeft: `${component.componentSettings.padding_left}px`,
      backgroundColor: component.componentSettings.background_color,
      borderRadius: `${component.componentSettings.rounded_corners}px`,
      height: `${component.componentSettings.height > 0 ? component.componentSettings.height + 'px' : 'auto'}`
    }"
  >
    <table
      :style="{
        borderRadius: `${component.items.rounded_corners}px`,
        lineHeight: component.items.line_height,
        background: component.items.gradient_top_color
          ? `linear-gradient(to top, ${component.items.gradient_bottom_color}, ${component.items.gradient_top_color})`
          : component.items.button_color,
        height: `${component.items.height}px`,
        width: component.items.button_size_type === 'full-width'
          ? '100%'
          : component.items.button_size_type === 'fixed'
            ? `${component.items.button_size}px`
            : 'auto',
        boxShadow: component.items.box_shadow_color
          ? `${component.items.box_shadow_color} 0px -3px 0px 0px inset`
          : 'none'
      }"
      :align="component.items.alignment"
    >
      <tr>
        <td :style="{ verticalAlign: component.items.vertical_align }">
          <a-button
            :type="component.items.button_type"
            :style="{
              color: component.items.text_color,
              fontFamily: component.items.font_family,
              fontSize: `${component.items.font_size}px`,
              fontWeight: component.items.font_bold ? 'bold' : 'normal',
              fontStyle: component.items.font_italic ? 'italic' : 'inherit',
              textDecoration: 'none',
              display: 'block',
              padding: '0 15px',
              textAlign: 'center',
              border: 'none',
              background: 'none'
            }"
          >
            {{ component.items.content }}
          </a-button>
        </td>
      </tr>
    </table>
    <div style="clear: both" />
  </div>
</template>
  
  <script>
  export default {
    name: 'ButtonComponent',
    
    props: {
    component: {
    type: Object,
    required: true
    }
    },

  }
  </script>
  <style lang="less" scoped>
  @import 'ant-design-vue/lib/button/style/index.less';
  </style>
  
  
  <style scoped>
  /* Add your styles here */
  </style>
  