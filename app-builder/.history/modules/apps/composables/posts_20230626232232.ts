export const useApps = () => {
  const store = useScreenStore();
  const appsPayload: any = ref({
    addedComponents: [],
    screenName: '',
    userName:useLoggedInUserStore().user.data.email,

  });
  const screenId = ref('');
  const Getpayload: any = ref({
      userName: useLoggedInUserStore().user.data.email
    
  });

  const appsPayloadScreen: any = ref({
    id: '',
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
  const allUserScreen = ref(null);
  const useFormDataChange = (data: any, name: any) => {
    console.log(name,data, "FROM COMPOSABLE")
    if (name) {

  appsPayload.value[name] = data;
}else {
      appsPayload.value = { ...appsPayload.value, ...data };
    }
    console.log(appsPayload.value);
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
        useGetProductsList();
      },
    });
  };

  const useGetProductsList = () => {
    useGetProductsListItems();
    useGetProductsTotalItems();
  };

  const useGetProductsTotalItems = () => {
    store.useProductsItemsNumber({
      $filters: bodyFilter.value,
      onError: () => {
        /* */
      },
      onSuccess: () => {
        /* */
      },
    });
  };

  const useGetProductsListItems = () => {
    store.useProductsList({
      $filters: bodyFilter.value,
      onError: () => {
        /* */
      },
      onSuccess: () => {
        /* */
      },
    });
  };

  const useGetProducts = (id: any) => {
    appsPayload.value.id = id;
    store.useGetProducts({
      $id: id,
      onError: () => {
        /* */
      },
      onSuccess: () => {
        /** */
      },
    });
  };

  const useAddScreen = (screenName: string) => {

    screenNameForm.value
      .validate()
      .then(() => {
        isModalVisible.value = false;
     
         store.createOrUpdateScreen({
          $data: appsPayload.value,
           
          onError: (e: any) => useOnError(e.code == '5003' ? useNuxtApp().$i18n.t('PRODUCTS.EXIST') : ''),
           onSuccess: (res) => {   
             appsPayloadScreen.value = res;
             useOnSuccess(useNuxtApp().$i18n.t('SUCCESS'));
             screenId.value=res.id
          },
        });
      })
      .catch(() => {
        /** */
      });
  };

  const useGetAllScreens = () => {
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

  const useUpdateScreen = () => {
    console.log("screenn", appsPayload.value)
    console.log('yoooooooooo', appsPayloadScreen.value);
    
    store.useUpdateScreen({
  $data: appsPayloadScreen.value,
  $id:screenId.value,

  onError: (e: any) => useOnError(
    console.log('eroooooorrrr',e),
    e.code == '5003' ? useNuxtApp().$i18n.t('PRODUCTS.EXIST') : ''),
  onSuccess: () => useOnSuccess(
    console.log("ok"),
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
    appsPayload,
    loadingProducts,
    appsPayloadScreen,
    rules,
    screenId,
    screenNameForm,
    isModalVisible,
    useRemoveProducts,
    useGetProductsList,
    useAddScreen,
    useGetAllScreens,
    allUserScreen,
    Getpayload,
    useUpdateScreen,
    useGetProducts,
    useFormDataChange,
    useClearValidate,
    useGetProductsListItems,
    useGetProductsTotalItems,
    useGetExtraFieldsProducts,
  };
};
