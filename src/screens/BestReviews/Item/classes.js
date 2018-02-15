
import { StyleSheet } from 'react-native';
import theme from 'app/theme';

export default StyleSheet.create({
    container: {
        position: 'relative',
        width: theme.fullWidth,
    },

    hero: {
        position: 'relative',
        width: theme.fullWidth,
        height: theme.fullHeight,
    },

    background: {
        width: '100%',
        height: '100%',
        overflow: 'visible'
    },

    mask: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, .4)',
        zIndex: 1,
    },

    text: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: 24,
        paddingBottom: 28,
    },

    title: {
        fontSize: 24,
        color: '#fff',
        fontFamily: theme.font.header,
        fontWeight: '200',
    },

    line: {
        height: 4,
        width: 125,
        marginTop: 14,
        marginBottom: 24,
        backgroundColor: theme.colors.red,
    },

    bestreview: {
        fontSize: 14,
        color: '#fff',
    },

    meta: {
        fontFamily: theme.font.header,
        fontWeight: '100',
        fontSize: 12,
    },

    body: {
        backgroundColor: '#fff',
        padding: 24,
        paddingTop: 14,
    },

    header: {
        marginBottom: 24,
        fontSize: 24,
        fontFamily: theme.font.header,
        fontWeight: '100',
    },

    subheader: {
        marginTop: 32,
        marginBottom: 24,
        fontSize: 24,
        fontWeight: '100',
        color: '#484848',
    },

    traillerCover: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 185,
    },

    playTrailler: {
        position: 'absolute',
        height: 48,
        width: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 48,
        backgroundColor: 'rgba(255, 255, 255, .4)',
        zIndex: 1,
    },

    watchButton: {
        marginTop: 14,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#000',
        borderStyle: 'solid',
    },

    watchText: {
        color: '#484848',
        fontFamily: theme.font.header,
        fontWeight: '200',
        fontSize: 24,
        letterSpacing: 4,
    },

    previews: {
        flexDirection: 'row',
    },

    preview: {
        position: 'relative',
        height: 81.75,
        width: 81.75,
    },

    morePreview: {
        color: '#fff',
        fontFamily: theme.font.header,
        fontWeight: '100',
        fontSize: 20,
    },

    stars: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },

    star: {
        position: 'relative',
        width: (theme.fullWidth - 48) / 3,
        height: 155,
    },

    starMask: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 35,
        paddingTop: 15,
    },

    starName: {
        color: '#fff',
        fontSize: 14,
        fontFamily: theme.font.header,
        fontWeight: '100',
        textAlign: 'center',
    },

    tags: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },

    tag: {
        paddingBottom: 4,
        marginRight: 12,
        marginBottom: 12,
        borderColor: '#000',
        borderStyle: 'solid',
        borderBottomWidth: 4,
    },

    tagName: {
        color: '#484848',
        fontSize: 12,
        fontWeight: '100',
    },

    review: {
        marginBottom: 24,
    },

    reviewContent: {
        marginBottom: 10,
        color: theme.colors.gray,
        lineHeight: 16,
        fontSize: 14,
    },

    reviewMeta: {
        paddingBottom: 4,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: theme.colors.gray,
    },

    reviewMetaText: {
        color: '#14171A',
        fontSize: 12,
        fontWeight: '100',
    },

    footer: {
        backgroundColor: '#fff',
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    hide: {
        display: 'none',
    },
});
