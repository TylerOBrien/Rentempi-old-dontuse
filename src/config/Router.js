/**
 * Exports
*/

export const GuestRouterConfig = {
  defaultProps: {
    initialRouteName: 'Welcome',
    screenOptions: {
      headerShown: false
    }
  }
};

export const VerifiedRouterConfig = {
  defaultProps: {
    initialRouteName: 'Dashboard',
    screenOptions: {
      animationEnabled: false,
      headerShown: false
    }
  }
};