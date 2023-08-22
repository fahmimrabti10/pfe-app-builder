
export const useApps = () => {
  
  const appId = ref('');
  const store = useScreenStore();
  const appsPayload: any = ref({
    addedComponents: [],
    screenName: '',
    appId:appId.value,
    userName:useLoggedInUserStore().user.data.email,

  });

  const appName = ref ('');
    const application: any = ref({
      appName: '',
      userId: useLoggedInUserStore().user.data.email,
  });
    const applicationPayload= ref({});
    const allApplication=ref([]);
  
    const screenId = ref('');
    const Getpayload: any = ref({
    userName: useLoggedInUserStore().user.data.email ,
    appId:''
  });

  const appsPayloadScreen: any = ref({
    id: '',
    appId:appId.value,
    addedComponents: [],
    screenName: '',
    userName: ''
  });

  const locale: string = useNuxtApp().$i18n.locale.value;
  const isModalVisible = ref(false);
  const { bodyFilter } = listFilters();
  const appsForm: any = ref(null);
  const rules = reactive({});
  const screenNameForm = ref(null);
    const apNameForm = ref(null);
  const allUserScreen = ref(null);
  
   const useFormDataChange = (data: any, name: any) => {
     console.log(name,data, "FROM COMPOSABLE")
   if (name) {

  appsPayload.value[name] = data;
 }else {
       appsPayload.value = { ...appsPayload.value, ...data };
     }
//     console.log(appsPayload.value);
   };
  const loadingProducts = computed(() => {
    return store.loading;
  });

  const useClearValidate = (fieldProp: any) => {
    console.log(fieldProp, "CLEARRR");
    appsForm.value.clearValidate(fieldProp);
  };

  /** delete translation item */
  const useRemoveProducts = (record: any) => {
    store.useDeleteProducts({
      $id: record.id,
      onError: useOnError,
      onSuccess: () => {
        useOnSuccess(useNuxtApp().$i18n.t('SUCCESS'));
      },
    });
  };

const useAddScreen = (appName: string) => {
  screenNameForm.value
    .validate()
    .then( () => {
      isModalVisible.value = false;

      store.createOrUpdateScreen({
        $data: appsPayload.value,

        onError: (e: any) => useOnError(e.code == '5003' ? useNuxtApp().$i18n.t('PRODUCTS.EXIST') : ''),
        onSuccess: (res) => {
          appsPayloadScreen.value = res;
          allUserScreen.value.push(res);
          screenId.value = res.id;
          useOnSuccess(useNuxtApp().$i18n.t('SUCCESS'));
          
        },
      });
    })
    .catch(() => {
      /** */
    });
};

  const useGetAllScreens = () => {
    console.log("pppppppppppp33", Getpayload.value)
    store.getAllUserScreen({
      $data : Getpayload.value,
      onError: () => {
        /* */
      },
      onSuccess: (res) => {
        allUserScreen.value = res; 
      },
    });
  };

const useAddApplication = () => {
      store.createApplication({
        $data: application.value,

        onError: (e: any) => useOnError(e.code == '5003' ? useNuxtApp().$i18n.t('PRODUCTS.EXIST') : ''),
        onSuccess:async (res) => {
          applicationPayload.value = res;
          appId.value = res.id;
            useOnSuccess(useNuxtApp().$i18n.t('SUCCESS'));
        },
      });
  };

  const useGetAllApplications = () => {
    store.getAllUserApplication({
      $data : Getpayload.value,
      onError: () => {
        /* */
      },
      onSuccess: (res) => {
        allApplication.value = res;
      },
    });
  };

  const useUpdateScreen = () => {

    console.log("screen", appsPayload.value);

    console.log('you', appsPayloadScreen.value);
    
    store.useUpdateScreen({
      $data: appsPayloadScreen.value,
      
      $id:screenId.value,

  onError: (e: any) => useOnError(
    console.log('eroooooorrrr',e),
    e.code == '5003' ? useNuxtApp().$i18n.t('PRODUCTS.EXIST') : ''),
  onSuccess: () => useOnSuccess(
    
    // useNuxtApp().$i18n.t('SUCCESS'),
        // { path: '/' + locale + '/' + 'products' }
      ),
    });
 };

  const useGetExtraFieldsProducts = () => {
    store.useGetExtraFieldsProducts();
  };

  return {
    appsForm,
    bodyFilter,
    applicationPayload,
    allApplication,
    application,
    appsPayload,
    loadingProducts,
    appsPayloadScreen,
    rules,
    appId,

    screenId,
    screenNameForm,
    apNameForm,
    isModalVisible,
    useGetAllApplications,
    useRemoveProducts,
    useAddScreen,
    useGetAllScreens,
    allUserScreen,
    Getpayload,
    useUpdateScreen,
    useFormDataChange,
    useClearValidate,
    useAddApplication

  
  };
};
