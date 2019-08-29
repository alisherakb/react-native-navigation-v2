import { Navigation } from 'react-native-navigation';

export const goHome = () =>
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'HomeTabs',
        children: [
          {
            component: {
              name: 'Map'
            }
          },
          {
            component: {
              name: 'CameraView'
            }
          },
          {
            component: {
              name: 'FriendList'
            }
          }
        ]
      }
    }
  });
