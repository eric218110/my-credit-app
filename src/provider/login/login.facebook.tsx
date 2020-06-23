import * as React from 'react';
import { View } from 'react-native';
import { LoginButton, LoginManager } from 'react-native-fbsdk';

export function _handleLoginFacebook(): void {
  LoginManager.logInWithPermissions([
    'public_profile',
    'email',
    'user_friends',
  ]).then(
    (result) => {
      if (result.isCancelled) {
        console.log('Login Cancelled');
      } else {
        console.log(
          `Login with permissions ${LoginManager.logInWithPermissions.toString()}`
        );
      }
    },
    function (error) {
      console.log(`Error in login with facebook: ${error}`);
    }
  );
}

export const FSDKLogin: React.FC = () => {
  return (
    <React.Fragment>
      <View>
        <LoginButton
          permissions={['email']}
          onLoginFinished={(error: Error, result) => {
            if (error) {
              console.log('Login failed with error: ' + error.message);
            } else if (result.isCancelled) {
              console.log('Login was cancelled');
            } else {
              console.log(
                'Login was successful with permissions: ' +
                  result.grantedPermissions
              );
            }
          }}
          onLogoutFinished={() => console.log('User logged out')}
        />
      </View>
    </React.Fragment>
  );
};
