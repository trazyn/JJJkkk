
import { StyleSheet } from 'react-native';
import theme from 'app/theme';

export default StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        padding: 24,
        paddingTop: 14,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        zIndex: 1,
    },

    index: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '200',
    },

    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: theme.font.primary,
    },

    goto: {
        height: 24,
        width: 24,
        borderRadius: 25,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
