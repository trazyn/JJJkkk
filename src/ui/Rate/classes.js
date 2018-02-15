
import { StyleSheet } from 'react-native';
import theme from 'app/theme';

export default StyleSheet.create({
    container: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    stars: {
        flexDirection: 'row',
    },

    star: {
        position: 'relative',
    },

    fg: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '0%',
        zIndex: 1,
    },

    text: {
        marginLeft: 10,
        color: '#FFDC80',
        fontSize: 32,
        fontFamily: theme.font.header,
        fontWeight: '100',
    },
});
