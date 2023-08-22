export const userInfo = () => {
  return useLoggedInUserStore()?.user;
};

export const useConfigAuth = () => {
  const useGetPermissions = (entity: any) => {
    try {
      return useLoggedInUserStore()?.user.permissions.findIndex((e) => e.rsname === entity) > -1;
    } catch (error) {
      return false;
    }
  };
  return { useGetPermissions };
};
