
import { StyleSheet } from 'react-native';
import theme from 'app/theme';

export default StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        zIndex: 1,
    },

    reddot: {
        position: 'absolute',
        top: -4,
        left: -12,
        height: 8,
        width: 8,
        borderRadius: 8,
        backgroundColor: theme.colors.red,
        zIndex: 9
    },

    title: {
        fontSize: 20,
    },

    actions: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },

    action: {
        marginLeft: 14,
    },

    wrap: {
        height: 32,
        width: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
