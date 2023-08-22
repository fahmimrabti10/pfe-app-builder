import { defineStore } from 'pinia';

const getHeaders = () => {
  return headers;
};
export const useScreenStore = defineStore('useScreenStore', {
  state: () => ({
    allUserScreen: '',
     allUserApplication: '',

    nbElements: 0,
    extraFields: [],
    loading: false,
    apps: [],
    app: {},
  }),
  actions: {
    async createOrUpdateScreen({ $data, onError, onSuccess }: any) {
      this.loading = true;
      try {
        const response = await fetch(useNuxtApp().$config.API + useNuxtApp().$config.WS_APPS_ADD, {
          method: 'POST',
          headers: getHeaders(),
          body: JSON.stringify($data),
        });

        const result = await response.json();
        this.loading = false;

        if (response.status === 201 || response.status === 200) {
          return onSuccess(result);
        } else {
          return onError(result);
        }
      } catch (error) {
        this.loading = false;
        return onError(error);
      }
    },

    async getAllUserScreen({ $data , onError, onSuccess }: any) {

      this.loading = true;
      try {
        console.log("ooooo", $data)
        const response = await fetch(' http://localhost:9880/screens/all', {
          method: 'POST',
          headers: getHeaders(),
          body: JSON.stringify($data),
        });
        this.loading = false;
        if (response.status == 200) {
          const res = await response.json();

          return onSuccess(res);
        } else {
          return onError(errorServer);
        }
      } catch (e) {
        this.loading = false;
        return onError(e);
      }
    },


    async useUpdateScreen({ $data,$id, onError, onSuccess }: any) {
      this.loading = true;
      try {
        
        console.log('br', getHeaders());
        const response: any = await fetch('http://localhost:9880/screens/PUT/' + $id, {
          method: 'PUT',
          headers: getHeaders(),
          body: JSON.stringify($data),
        })

        console.log("dataaaaaa", response.status)
      
        this.loading = false;

        // if (response.status === 200) {
        //   //const res = await response.json();

        //   console.log("SUCESSSSSSSSSS");
        //   return onSuccess(response);
        // } else {
        //   console.log('FAILLLLLLLL');

        //   return onError(errorServer);
        // }
      } catch (e) {
        this.loading = false;
        return onError(e);
      }
    },

 async getAllUserApplication({ $data , onError, onSuccess }: any) {

      this.loading = true;
      try {
        const response = await fetch(' http://localhost:9882/application/all', {
          method: 'POST',
          headers: getHeaders(),
          body: JSON.stringify($data),
        });
        this.loading = false;
        if (response.status == 200) {
          const res = await response.json();

          return onSuccess(res);
        } else {
          return onError(errorServer);
        }
      } catch (e) {
        this.loading = false;
        return onError(e);
      }
    },

 async createApplication({ $data, onError, onSuccess }: any) {
      this.loading = true;
      try {
        const response = await fetch(' http://localhost:9882/application', {
          method: 'POST',
          headers: getHeaders(),
          body: JSON.stringify($data),
        });

        const result = await response.json();
        this.loading = false;

        if (response.status === 201 || response.status === 200) {
          return onSuccess(result);
        } else {
          return onError(result);
        }
      } catch (error) {
        this.loading = false;
        return onError(error);
      }
    },

    
  },
});
