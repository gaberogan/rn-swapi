// import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {PermissionsAndroid, Platform} from 'react-native';

export const requestLocationPermission = async () => {
  try {
    if (Platform.OS === 'ios') {
      return false;
    }

    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'TakeHome Location Permission',
        message:
          'TakeHome App needs access to your location ' +
          'to direct you to Star Wars World.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.warn(err);
    return false;
  }
};

// react-native-permissions is broken, adding the Permission-LocationWhenInUse.podspec causes a duplicate symbols for arm64 crash
// export const requestLocationPermission = () => {
//   request(PERMISSIONS.IOS.LOCATION_ALWAYS).then(result => {
//     switch (result) {
//       case RESULTS.UNAVAILABLE:
//         console.log(
//           'This feature is not available (on this device / in this context)',
//         );
//         break;
//       case RESULTS.DENIED:
//         console.log(
//           'The permission has not been requested / is denied but requestable',
//         );
//         break;
//       case RESULTS.LIMITED:
//         console.log('The permission is limited: some actions are possible');
//         break;
//       case RESULTS.GRANTED:
//         console.log('The permission is granted');
//         break;
//       case RESULTS.BLOCKED:
//         console.log('The permission is denied and not requestable anymore');
//         break;
//     }
//   });
// };
