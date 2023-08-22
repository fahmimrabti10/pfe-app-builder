<template>
  <a-menu
    id="test"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    class="card-15"
    style="width: 256px"
    mode="inline"
    @click="handleClick"
  >
    <a-sub-menu
      key="sub1"
      @titleClick="titleClick"
    >
      <template #icon>
        <font-awesome-icon
          :icon="['fad', 'square-phone']"
          style="--fa-primary-color: #97989b; --fa-secondary-color: #0033cc"
        />
      </template>
      <template #title>
        schedule
      </template>
      <a-menu-item>
        <span>Monday</span>
        <span>08:00-00:00</span>
      </a-menu-item>
      <a-menu-item>
        <span>Thusday</span>
        <span>08:00-00:00</span>
      </a-menu-item>
      <a-menu-item key="9">
        <span>Wednesday</span>
        <span>08:00-00:00</span>
      </a-menu-item>
      <a-menu-item key="9">
        <span>Friday</span>
        <span>08:00-00:00</span>
      </a-menu-item>
      <a-menu-item key="9">
        <span>Saturday</span>
        <span>08:00-00:00</span>
      </a-menu-item>
      <a-menu-item key="9">
        <span>Sunday</span>
        <span>08:00-00:00</span>
      </a-menu-item>
    </a-sub-menu>
    <hr>

    <a-sub-menu
      key="sub1"
      @titleClick="titleClick"
    >
      <template #icon>
        <font-awesome-icon
          :icon="['fas', 'square-phone']"
          font-size="2xl"
          style="color: #bfbfbf"
        />
      </template>
      <template #title>
        Contact
      </template>
      <a-menu-item key="9">
        Option 9
      </a-menu-item>
      <a-menu-item key="10">
        Option 10
      </a-menu-item>
      <a-menu-item key="11">
        Option 11
      </a-menu-item>
      <a-menu-item key="12">
        Option 12
      </a-menu-item>
    </a-sub-menu>

    <hr>

    <a-sub-menu
      key="sub1"
      @titleClick="titleClick"
    >
      <template #icon>
        <SettingOutlined />
      </template>
      <template #title>
        01StreetXX 1234
      </template>
      <a-menu-item key="9">
        Option 9
      </a-menu-item>
      <a-menu-item key="10">
        Option 10
      </a-menu-item>
      <a-menu-item key="11">
        Option 11
      </a-menu-item>
      <a-menu-item key="12">
        Option 12
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { MailOutlined, QqOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import type { MenuProps } from 'ant-design-vue';
export default defineComponent({
  components: {
    MailOutlined,
    QqOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
  setup() {
    const selectedKeys = ref<string[]>(['1']);
    const openKeys = ref<string[]>(['sub1']);
    const handleClick: MenuProps['onClick'] = (e) => {
      console.log('click', e);
    };
    const titleClick = (e: Event) => {
      console.log('titleClick', e);
    };
    watch(
      () => openKeys,
      (val) => {
        console.log('openKeys', val);
      }
    );
    return {
      selectedKeys,
      openKeys,

      handleClick,
      titleClick,
    };
  },
});
</script>
<style lang="scss">
.card-15 {
  .ant-menu-sub.ant-menu-inline {
    background: none;
  }

  .ant-menu-sub.ant-menu-inline > .ant-menu-item {
    margin: 1px 0;
    background: none;
    height: 20px !important;
  }

  .ant-menu-item-selected {
    color: black !important;
  }

  .ant-menu-title-content {
    color: black !important;
  }

  .ant-menu-submenu-arrow:hover {
    background: none !important;
  }

  .ant-menu-item-icon:hover {
    background: none !important;

  }

  .ant-icon:hover {
    background: none !important;
  }

  .anticon.anticon-setting.ant-menu-item-icon:hover::after {
    background: none !important;

  }
}
</style>
