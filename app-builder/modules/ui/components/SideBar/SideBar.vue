<template>
  <a-layout-sider
    :collapsed="collapsed"
    :trigger="null"
    collapsible
    collapsed-width="false"
    theme="light"
    class="sidebar"
  >
    <UiNavMenu
      :collapsed="collapsed"
      :nav-tree="navTree"
    />

    <div
      class="spacing-y hide"
      :class="collapsed ? 'icon-position-colapse' : 'nowrap'"
    />
  </a-layout-sider>
</template>
<script lang="ts" setup>
import icoHamburger from '@UI/assets/img/iconMenuClose.svg';
import icoHamburgerOn from '@UI/assets/img/iconMenuOpen.svg';
defineProps({
  collapsed: {
    type: Boolean,
    default: () => false,
  },
  navTree: {
    type: Array,
    default: () => {
      return;
    },
  },
});
</script>
<style lang="less">
@import 'ant-design-vue/lib/layout/style/index.less';
</style>
<style scoped>
.collapsed {
  display: none;
}
.sidebar{
  
  overflow: auto;

}
</style>

