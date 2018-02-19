
import { StyleSheet } from 'react-native';
import theme from 'app/theme';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        paddingTop: 10,
        paddingBottom: 0,
        backgroundColor: '#fff',
    },

    comments: {
        marginTop: 32,
    },

    comment: {
        marginBottom: 32,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

    avatar: {
        height: 48,
        width: 48,
    },

    circle: {
        marginRight: 24,
        height: 48,
        width: 48,
        borderRadius: 48,
        overflow: 'hidden',
    },

    nickname: {
        fontSize: 13,
    },

    date: {
        color: '#9B9B9B',
        fontSize: 12,
        fontWeight: '100',
    },

    text: {
        maxWidth: theme.fullWidth - 48 - 48 - 32,
        color: '#333',
        fontSize: 14,
        marginTop: 14,
        fontWeight: '200',
        lineHeight: 16,
    },
});
