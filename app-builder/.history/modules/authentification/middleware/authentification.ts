import LuigiClient from '@luigi-project/client';
const LougoutURL = '/authentification/logout';

export default defineNuxtPlugin(() => {

  addRouteMiddleware(
    'auth',
    async () => {
      const loggedInUserStore = useLoggedInUserStore();
      const useVerifPermissions = () => {
       
        const { _route } = useNuxtApp();
        const path = _route.path.replace(_route.params.id, 'id');
        const pathArray = path.split('/');
        pathArray.splice(0, 3);
        const moduleName = pathArray.join('/');
        if (_route.name &&
          loggedInUserStore.user.permissions.findIndex((e) => {
            return moduleName == e.rsname;
          }) == -1 && _route.name.search('review_') == -1 && _route.name.search('home_') == -1 && _route.name.search('pageManager_') == -1
        ) {
          showError({
            statusCode: 403,
          })
        }
      }
      if (!process.server) {
      
        if (LuigiClient.isLuigiClientInitialized() && Object.keys(loggedInUserStore.user).length === 0) {
          await loggedInUserStore
            .useGetUserInfo({
              Token: 'Bearer ' + LuigiClient.getToken(),
              onError: () => {
                window.location.replace(LougoutURL);
              },
            }).then(() => {
              useNuxtApp().$i18n.setLocale(LuigiClient.uxManager().getCurrentLocale());
              useVerifPermissions()
            })
            .catch(() => {
              window.location.replace(LougoutURL);
            });
           
        } else if (useNuxtApp().$auth.loggedIn && Object.keys(loggedInUserStore.user).length === 0) {
          await loggedInUserStore
            .useGetUserInfo({
              Token: decodeURIComponent(useNuxtApp().$auth.token),
              onError: () => {
                window.location.replace(LougoutURL);
              },
            }).then(() => {
              useVerifPermissions()
            })
            .catch(() => {
              window.location.replace(LougoutURL);
            });
        }
      }
    },
    { global: true }
  );
});
