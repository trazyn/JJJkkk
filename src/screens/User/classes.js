
import { StyleSheet } from 'react-native';
import theme from 'app/theme';

export default StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        backgroundColor: '#fff',
    },

    goback: {
        position: 'absolute',
        top: 24,
        left: 24,
        zIndex: 1,
    },

    hero: {
        marginLeft: 96,
        flexDirection: 'row',
        marginBottom: 70,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 26 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
    },

    avatar: {
        width: 185,
        height: 130,
    },

    meta: {
        paddingLeft: 96,
        marginBottom: 32,
    },

    nickname: {
        marginBottom: 14,
        color: '#484848',
        fontSize: 24,
        fontWeight: 'bold',
        letterSpacing: 2,
    },

    location: {
        marginLeft: 8,
        color: '#9B9B9B',
        fontSize: 14,
    },

    bio: {
        maxWidth: 255,
        color: '#666',
        lineHeight: 20,
        fontSize: 14,
        marginTop: 24,
        marginBottom: 24,
    },

    actions: {
        paddingRight: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    followNumber: {
        color: '#484848',
        fontSize: 20,
        fontWeight: '500',
    },

    followText: {
        marginTop: 10,
        color: '#484848',
        fontSize: 16,
        fontWeight: '100',
    },

    favorite: {
        position: 'relative',
    },

    heart: {
        position: 'absolute',
        top: 0,
        left: 24,
        color: theme.colors.red,
    },

    list: {
        marginLeft: 96,
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    grid: {
        width: '100%',
        paddingRight: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    cover: {
        width: 130,
        height: 190,
    },

    title: {
        marginTop: 8,
        marginBottom: 20,
        width: 130,
        textAlign: 'center',
        color: '#666',
        fontSize: 14,
    },

    more: {
        position: 'relative',
    },

    mask: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, .7)',
    },

    maskText: {
        color: '#fff',
        fontSize: 32,
        fontWeight: '100',
    },

    nothing: {
        fontSize: 24,
        fontWeight: '100',
        letterSpacing: 1,
        textAlign: 'left',
    },
});
