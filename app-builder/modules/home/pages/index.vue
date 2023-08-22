<template>
  <a-layout-header>
    <div class="C">
      <h2 class="Title">
        <font-awesome-icon :icon="['fass', 'cubes']" size="xl" style="color: rgb(255, 255, 255)" />
        Apps
      </h2>

      <h2 class="b">
        {{
          useLoggedInUserStore().user.data.given_name.charAt(0).toUpperCase() +
          useLoggedInUserStore().user.data.given_name.slice(1).toLowerCase()
        }}
      </h2>
      <a-dropdown class="bi">
        <template #overlay>
          <a-menu @click="handleMenuClick">
            <a-menu-item key="1">
              <UserOutlined />
              Profile
            </a-menu-item>
            <a-menu-item key="2">
              <NuxtLink to="http://localhost:3000/authentification/logout"> Log out </NuxtLink>
            </a-menu-item>
            <a-menu-item>
              <div class="o">
                {{ useLoggedInUserStore().user.data.email }}
              </div>
            </a-menu-item>
          </a-menu>
        </template>

        <a-button class="btn-fix1">
          {{
            useLoggedInUserStore().user.data.given_name
              ? useLoggedInUserStore().user.data.given_name[0].toUpperCase()
              : ''
          }}
        </a-button>
      </a-dropdown>
    </div>
  </a-layout-header>

  <div class="butt">
    <a-button class="bb" @click="showModal"> Create an app </a-button>

    <h2 class="apps">{{ countAppNames }} builder apps</h2>
  </div>
  <div class="n">
    <hr />
  </div>

  <div class="search">
    <a-input-search
      ref="searchInput"
      v-model:value="searchTerm"
      placeholder="search apps"
      enter-button
      class="search2"
      @search="onSearch"
    />

    <a-select v-model:value="sortOption" class="r" @change="onSortChange">
      <a-select-option value="recentlyUpdated"> Sort by recently update </a-select-option>
      <a-select-option value="name"> Sort by name </a-select-option>
    </a-select>
  </div>

  <a-modal v-model:visible="visible" :footer="null" :mask-closable="false" width="700px" @ok="handleOk">
    <h1 class="modal-title">Name your app</h1>
    <div container-content>
      <a-input v-model:value="application.appName" class="container-input">
        <template #suffix>
          <a-button
            :disabled="!application.appName"
            :style="{
              'background-color': application.appName ? ' rgb(13, 31, 161)' : '',
              color: application.appName ? 'white' : '',
              width: '130px',
              'border-radius': '8%',
              height: '60px',
              padding: '10px 20px',
            }"
            class="bb"
          >
            <div class="card-link" @click="creatApp">Get started</div>
          </a-button>
        </template>
      </a-input>

      <button class="container-inp">
        {{ application.appName ? application.appName[0].toUpperCase() : '' }}
      </button>
    </div>
  </a-modal>

  <!-- {{ allApplication }} -->

  <div v-for="item in allApplication" v-show="!isHidden(item)" :key="item.id" class="dis">
    <!--       
        <span class="icons">
          <span class="preview"> 
          <font-awesome-icon
            :icon="['fas', 'eye']"
            size="lg"
            style="color: #807f7f67"
          />
          </span>

          <span class="trash"> <font-awesome-icon
            :icon="['fas', 'trash']"
            style="color: #807f7f67"
          /> </span>
        </span> -->

    <span class="link">
      <nuxt-link :to="'fr/apps/' + item.id" class="AP">
        {{ item.appName }}
      </nuxt-link>
    </span>

    <span>
      createdAt

      {{ item.createdAt.slice(0, 19) }}
    </span>

    <span>Last updated {{ item.updatedAt.slice(0, 19) }} </span>

    <button class="rt">
      {{ item.appName ? item.appName[0].toUpperCase() : '' }}
    </button>
  </div>
</template>
<script lang="ts" setup>
// import 'ant-design-vue/dist/antd.css';

//  const emit = defineEmits(['projectName']);
// emit('projectName', value);
const {
  allApplication,
  useAddApplication,
  useGetAllApplications,
  applicationPayload,
  screenId,
  appsPayloadScreen,
  appId,
  application
} = useApps();

const appName = ref('');
const visible = ref(false);
const showModal = () => {
  visible.value = true;
  ref<string[]>(['2']);
};

const sleep = async (ms: number) => {
  return new Promise<void>(resolve => setTimeout(resolve, ms));
};

const handleOk = (e) => {
  console.log(e);
  visible.value = false;
};
const creatApp = async () => {
  console.log('ffff', application);
  useAddApplication();
  await sleep(500);  
  useNuxtApp().$router.push('/fr/apps/' + appId.value);
};

const countAppNames = computed(() => {
  return allApplication.value.filter((item) => item.appName).length;
});
const sortBy = ref('recentlyUpdated');

const searchTerm = ref('');

const onSearch = () => {
  // const searchValue = $refs.searchInput.searchValue;
  // searchTerm.value = searchValue;
  const searchValue = searchTerm.value;
  searchTerm.value = searchValue;

};
const isHidden = (item) => {
  return !item.appName.toLowerCase().includes(searchTerm.value.toLowerCase());
};

const onSortChange = (value) => {
  sortBy.value = value;
  if (value === 'recentlyUpdated') {
    allApplication.value.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  }
  else if (value === 'name') {
allApplication.value.sort((a, b) => { return a.appName.localeCompare(b.appName); }); }

};

onMounted(() => {
  useGetAllApplications();
});
</script>

<style lang="scss" scoped>
hr {
  box-sizing: content-box;

  margin: 2%;
  margin-left: 10%;
  margin-right: 10%;

  border-style: solid;
  border-width: 1px;
  border-color: #e4eaf1;
}

.butt {
  margin-left: 80%;
  margin-top: 3%;
  color: white;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  .apps {
    margin-left: -400%;

    margin-top: -1%;
  }

  .bb {
    background-color: rgba(0, 0, 0, 0.54);
    color: white;
    font-size: 20px;
    font-weight: bold;
    width: 90x;
    height: 55px;
    background-color: #1890ff;

    opacity: 1;
    border-radius: 8%;
  }
}

.container-input {
  display: flex;
  grid: 2%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.modal-title {
  margin-bottom: 20px;
}
.container-input {
  height: 90px;
}

// .container-btn {
//   position: absolute;
//   top: 33%;
//   left: 3%;
//   width: 100px;
//   height: 90px;
//   border-radius: 22%;
//   color: rgb(13, 31, 161);
//   opacity: 1;
//   border: none;
//   font-weight: bold;
//   font-size: 90px;
//   justify-content: center;
// }

.container-inp {
  position: absolute;
  top: 33%;
  left: 3%;
  width: 140px;
  height: 125px;
  border-radius: 22%;
  color: rgb(13, 31, 161);
  opacity: 1;
  border: none;
  font-weight: bold;
  font-size: 90px;
  justify-content: center;
}

.ant-input-group .ant-input {
  float: left;
  width: 50%;
  margin-left: 10px;
  text-align: inherit;
}

.C {
  display: flex;
  padding-top: 13px;
  .b {
    margin-left: 82%;
    margin-top: -11px;
    padding-right: 6px;
    color: #fff;

    .bi {
      margin-left: 85%;
    }
  }
  .Title {
    margin-top: -14px;
    margin-left: 12px;
    color: #fff;
  }
}

.ant-input-affix-wrapper {
  width: 70%;
  min-width: 10%;
  //   padding: 4px 11px ;
  //   color: #383333;
  //   font-size: 14px;
  //   line-height: 1.5715;
  margin-left: 24%;
  //   border: 1px solid #d9d9d9;
}
.ant-layout-header {
  height: 64px;
  padding: 10 50px;
  color: #fff;
  line-height: 64px;
  background: #1890ff;
  margin: 0px 2px 0px 2px;
}
.ant-layout-sider {
  background: #1890ff;

  height: 1000%;
  padding: 10 50px;
  margin: 0px 0px 0px 0px;
}
.ant-layout-content {
}
.heading {
  margin: 80px;
  //   .container {
  //      margin-top: -39px;
  //      margin-left: 30px;
  //      display: flex;

  // }
}

.search {
  margin-top: 2.2%;
  display: flex;
  margin-left: 12%;
  .r {
    width: 40%;
    margin-left: 3%;
    border-style: solid;
    border-width: 3px;
    border-color: #e4eaf1;
    border-radius: 5px;
  }
  :deep(.search2) {
    width: 40%;
    border-style: solid;
    border-width: 3px;
    border-color: #e4eaf1;
    border-radius: 5px;
    margin-left: 2%;
  }
}

.dis span {
  display: block;
  margin-left: 95px;
  margin-top: 1px;
  font-size: 12px;
  color: #838caa;
}
.link {
  padding-top: 7%;
}

.dis {
  width: 300px;
  height: 100px;
  margin-top: 2%;
  margin-left: 10%;
  border-radius: 8%;
  white-space: pre-wrap;
  display: inline-block;
  font-family: founders grotesk regular;
  font-size: 12px;

  background: rgba(228, 234, 241, 0.726);

  .rt {
    margin-left: 3%;
    margin-top: -20%;

    border: none;
    width: 66px;
    height: 67px;
    border-radius: 22%;
    // background: rgb(13, 31, 161);

    background: #1890ff;
    display: block;
    font-weight: bold;
    font-size: 50px;
    justify-content: center;

    color: #f0f0f0;
  }
}
</style>
