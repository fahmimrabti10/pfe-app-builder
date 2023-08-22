import { defineStore } from 'pinia';

export const useLoggedInUserStore = defineStore({
  // id is required so that Pinia can connect the store to the devtools
  id: 'loggedInUser',
  state: () => {
    return {
      user: {},
    };
  },
  getters: {},
  actions: {
    async getUserInfo(param: any) {
      this.user = param;
    },
    async useGetUserInfo({ Token, onError }: any) {
      try {
        const url = useNuxtApp().$config.AUTH_PATH + '/protocol/openid-connect/userinfo';
        // let url='/mock/userInfo.json';
        const headers: any = {};
        headers['Authorization'] = Token;
        const userInfoData: any = await fetch(url, { headers })
          .then(function (res) {
            if (res.status == 401) {
              return onError(res.status);
            }
            return res.json();
          })
          .catch((error) => {
            return onError(error);
          });

        const myHeaders = new Headers();
        myHeaders.append('Authorization', Token);
        myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

        const urlencoded = new URLSearchParams();
        urlencoded.append('grant_type', 'urn:ietf:params:oauth:grant-type:uma-ticket');
        urlencoded.append('audience', useNuxtApp().$config.CLIENT_ID);
        urlencoded.append('response_include_resource_name', 'true');
        urlencoded.append('response_mode', 'permissions');

        const requestOptions: any = {
          method: 'POST',
          headers: myHeaders,
          body: urlencoded,
          redirect: 'manual',
        };

        const permissionsUrl = useNuxtApp().$config.AUTH_PATH + '/protocol/openid-connect/token';
        // let permissionsUrl='/mock/permissions.json';
        const permissions = await fetch(permissionsUrl, requestOptions)
          .then((response) => response.text())
          .then(function (result) {
            // onSuccess(result);
            return JSON.parse(result);
          })
          .catch((error) => {
            return onError(error);
          });

        this.user.permissions = permissions;
        this.user.config = {};
        this.user.config.headers = {};
        this.user.config.headers.Authorization = Token;
        this.user.data = userInfoData;
      } catch (e) {
        return onError(e);
      }
    },
  },
});
