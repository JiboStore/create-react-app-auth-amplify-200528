/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import Amplify from 'aws-amplify'
import config from './aws-exports'

Amplify.configure(config);

AppRegistry.registerComponent(appName, () => App);

/**
Hosted UI Endpoint: https://rnamplify85d16374-85d16374-local.auth.ap-southeast-1.amazoncognito.com/
Test Your Hosted UI Endpoint: https://rnamplify85d16374-85d16374-local.auth.ap-southeast-1.amazoncognito.com/login?response_type=code&client_id=7g1057n1igvpbnvb94hb2hpabo&redirect_uri=myapp://
https://rnamplify85d16374-85d16374-local.auth.ap-southeast-1.amazoncognito.com/oauth2/idpresponse
http://localhost:3000/login/callback, 
**/
