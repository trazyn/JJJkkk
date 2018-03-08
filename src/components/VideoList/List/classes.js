
import { StyleSheet } from 'react-native';
import theme from 'app/theme';

export default StyleSheet.create({
    container: {},

    grid: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 24,
        paddingRight: 24,
    },

    gridItem: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 24,
        overflow: 'hidden',
    },

    small: {
        height: 148,
        width: (theme.fullWidth - 48 - 28) / 3,
    },

    smallTitle: {
        width: (theme.fullWidth - 48 - 28) / 3,
        marginTop: 8,
        color: '#484848',
        fontSize: 14,
        textAlign: 'center',
    },

    item: {
        marginBottom: 0,
    },

    large: {
        position: 'relative',
        width: '100%',
        height: 220,
    },

    mask: {
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, .4)',
        zIndex: 1,
    },

    hero: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        padding: 20,
        paddingBottom: 10,
        zIndex: 1,
    },

    no: {
        color: '#fff',
        fontSize: 14,
        fontFamily: theme.font.header,
    },

    line: {
        marginTop: 4,
        marginBottom: 14,
        height: 2,
        width: 32,
        backgroundColor: theme.colors.red,
    },

    title: {
        color: '#fff',
        fontSize: 14,
    }
});
