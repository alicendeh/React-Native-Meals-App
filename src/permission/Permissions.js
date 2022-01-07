import {PermissionsAndroid} from 'react-native';

let permissionStatus = 'denied';

export default permission = async () => {
  try {
    if (permissionStatus === 'denied') {
      let writeresponse = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'write access guys',
          message: 'please accept',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      console.log('write response is' + writeresponse);
    }
    return permissionStatus;
  } catch (err) {
    console.error('Error while asking permissions: ' + err);
  }
};
