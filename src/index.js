
import { Navigation } from 'react-native-navigation';
import { AsyncStorage } from 'react-native';

import registerScreens from './screens';
import stores from './stores';
import MobxProvider from 'utils/MobxProvider';

(async() => {
    await AsyncStorage.setItem(
        '@AUTH',
        JSON.stringify(
            /* eslint-disable */
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidG4ucmF6eUBnbWFpbC5jb20iLCJpZCI6IjQyIn0sImlhdCI6MTUxODgxNDU3NywiZXhwIjoxNTE4ODU3Nzc3LCJqdGkiOiIxMDNmZWFiZS01N2Q4LTRmYTktODI4NS0zMzc3ZjY0Y2UwZDcifQ.fDZSD7Ws7CprCgK8guci72Qj228y7eVn4OujUwp7m6s",
  "refreshToken": "6de61a54-c891-48e9-9cc5-e395f5ded8c7",
  "expired": 1518857777429,
  "user": {
    "id": "42",
    "email": "tn.razy@gmail.com",
    "nickname": "JJJJkk",
    "bio": "观自在菩萨，行深般若波罗蜜多时，照见五蕴皆空，度一切苦厄。",
    "avatar": "https://i.imgur.com/5nu5rmI.png",
    "gender": "M",
    "location": "China"
  }
}
            /* eslint-enable */
        )
    );

    stores.me.init();
})();

registerScreens(stores, MobxProvider);

Navigation.startSingleScreenApp({
    screen: {
        screen: 'zzyzx.BestReviews',

        navigatorStyle: {
            navBarHidden: true,
        },
    },

    animationType: 'fade'
});

/** Debug network in chrome devtools network tab */
// eslint-disable-next-line
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
console.ignoredYellowBox = ['Warning: ReactNative.createElement', 'Remote debugger'];
