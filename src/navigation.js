import { Navigation } from 'react-native-navigation';

export const goToAuth = () =>
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'HomeTabs',
        children: [
          {
            component: {
              name: 'SignIn'
            }
          },
          {
            component: {
              name: 'SignUp'
            }
          }
        ]
      }
    }
  });

export const goHome = () =>
  Navigation.startTabBasedApp({
    root: {
      stack: {
        id: 'App',
        children: [
          {
            component: {
              name: 'Home'
            }
          }
        ]
      }
    }
  });
