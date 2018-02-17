
/**
 * Fix 'react-native-vector-icons' import error
 * https://github.com/oblador/react-native-vector-icons/issues/626
 * */
const blacklist = require('metro/src/blacklist');

module.exports = {
    getBlacklistRE() {
        return blacklist([/react-native\/local-cli\/core\/__fixtures__.*/]);
    },
};
