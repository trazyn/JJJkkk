
import { StyleSheet } from 'react-native';
import theme from 'app/theme';

export default StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
    },

    main: {
        position: 'relative',
        width: theme.fullWidth,
    },

    hero: {
        position: 'relative',
        width: theme.fullWidth,
        height: 250,
    },

    mask: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, .4)',
    },

    goback: {
        position: 'absolute',
        top: 10,
        left: 24,
        height: 32,
        width: 32,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [
            {
                translateX: -12,
            }
        ],
    },

    rate: {
        position: 'absolute',
        top: 14,
        right: 24,
        width: 44,
        paddingTop: 2,
        paddingBottom: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFDC80',
        shadowColor: '#FFDC80',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
    },

    rateText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '100',
    },

    header: {
        marginTop: 24,
        marginBottom: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },

    body: {
        padding: 24,
        paddingTop: 0,
    },

    title: {
        width: '80%',
        fontSize: 16,
        textAlign: 'center',
    },

    line: {
        height: 4,
        width: 80,
        marginTop: 16,
        marginBottom: 20,
        backgroundColor: theme.colors.red,
    },

    meta: {
        color: '#484848',
        fontFamily: theme.font.header,
        fontWeight: '100',
        fontSize: 12,
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

    viewMore: {
        paddingBottom: 4,
        borderBottomWidth: 1,
        borderColor: '#000',
        borderStyle: 'solid',
    },

    viewMoreText: {
        color: '#484848',
        fontSize: 12,
        fontWeight: '100',
        textAlign: 'center'
    },

    previews: {
        flexDirection: 'row',
        marginBottom: 14,
    },

    preview: {
        position: 'relative',
        height: 81.75,
        width: 81.75,
    },

    stars: {
        marginBottom: 32,
        marginTop: 32,
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
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
        marginBottom: 40,
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    tag: {
        padding: 14,
        paddingTop: 5,
        paddingBottom: 5,
        marginRight: 20,
        marginBottom: 16,
        backgroundColor: '#000',
        borderRadius: 32,
    },

    tagName: {
        color: '#fff',
        fontSize: 12,
        letterSpacing: 1,
        fontWeight: '100',
    },

    comments: {
        justifyContent: 'flex-start',
        marginBottom: 32,
    },

    comment: {
        marginBottom: 24,
    },

    content: {
        color: theme.colors.gray,
        fontSize: 14,
        lineHeight: 16,
    },

    commentMeta: {
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    user: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    avatar: {
        height: 32,
        width: 32,
    },

    commentMetaText: {
        color: '#14171A',
        fontSize: 12,
        fontWeight: '100',
    },

    commentDate: {
        paddingBottom: 6,
        borderBottomWidth: 1,
        borderColor: '#979797',
        borderStyle: 'solid',
    },
});
