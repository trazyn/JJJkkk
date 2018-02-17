
import { StyleSheet } from 'react-native';
import theme from 'app/theme';

export default StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: theme.fullWidth,
        height: theme.fullHeight,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
        zIndex: 9,
    },

    logo: {
        width: 32,
        height: 32,
    },
});
