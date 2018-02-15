
import { StyleSheet } from 'react-native';
import theme from 'app/theme';

export default StyleSheet.create({
    container: {
        position: 'relative',
        padding: 24,
        paddingTop: 74,
        backgroundColor: '#fff',
        flex: 1,
    },

    close: {
        position: 'absolute',
        top: 10,
        left: 24,
    },

    list: {},

    item: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 24,
    },

    shadow: {
        marginRight: 14,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 26 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
    },

    small: {
        height: 54,
        width: 82,
    },

    large: {
        height: 100,
        width: 80,
    },

    text: {
        height: 54,
        justifyContent: 'space-around',
    },

    title: {
        color: '#484848',
        fontSize: 20,
        fontFamily: theme.font.header,
    },

    subtitle: {
        maxWidth: 240,
        color: '#484848',
        fontSize: 12,
    },

    profile: {
        position: 'absolute',
        bottom: 32,
        left: 24,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },
});
