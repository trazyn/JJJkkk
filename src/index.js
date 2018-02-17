
import { Navigation } from 'react-native-navigation';

import registerScreens from './screens';
import stores from './stores';
import MobxProvider from 'utils/MobxProvider';

stores.me.init();
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
