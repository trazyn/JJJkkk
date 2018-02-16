
import { StyleSheet } from 'react-native';
import theme from 'app/theme';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#fff',
    },

    header: {
        paddingRight: 24,
        paddingLeft: 24,
    },

    hero: {
        marginTop: 10,
        flexDirection: 'row',
    },

    large: {
        position: 'relative',
        width: theme.fullWidth * 0.6,
        height: theme.fullHeight * 0.22,
    },

    mediums: {
        flexDirection: 'column',
    },

    medium: {
        position: 'relative',
        width: theme.fullWidth * 0.4,
        height: theme.fullHeight * 0.11,
    },

    mask: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, .2)',
        zIndex: 1,
    },

    rankText: {
        position: 'absolute',
        top: 4,
        left: 4,
        fontSize: 12,
        fontWeight: '100',
        letterSpacing: 2,
        zIndex: 2,
    },

    list: {
        paddingTop: 44,
        paddingLeft: 44,
    },

    star: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },

    rank: {
        width: 60,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },

    starRank: {
        fontSize: 18,
        letterSpacing: 2,
    },

    shadow: {
        marginRight: 42,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 14,
    },

    avatar: {
        width: 80,
        height: 80,
    },

    starName: {
        color: '#666',
        fontSize: 16,
        fontWeight: '300',
    },
});
