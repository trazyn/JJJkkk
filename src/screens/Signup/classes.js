
import { StyleSheet } from 'react-native';
import theme from 'app/theme';

export default StyleSheet.create({
    container: {
        position: 'relative',
        padding: 24,
        paddingTop: 10,
        backgroundColor: '#fff',
        flex: 1,
    },

    logo: {
        width: 48,
        height: 48,
        marginBottom: 20,
        marginTop: 20,
    },

    title: {
        marginBottom: 10,
        fontSize: 44,
        fontWeight: '100',
    },

    subtitle: {
        color: '#484848',
        fontSize: 24,
        fontWeight: '100',
    },

    form: {
        marginTop: 44,
    },

    input: {
        color: '#666',
        fontSize: 22,
        fontWeight: '200',
        height: 32,
        lineHeight: 32,
        marginBottom: 24,
    },

    error: {
        marginBottom: 24,
        color: theme.colors.red,
        fontSize: 12,
        opacity: 1,
    },

    button: {
        color: '#405DE6',
        fontSize: 32,
        fontWeight: '200',
    },

    footer: {
        position: 'absolute',
        bottom: 24,
        left: 24,
    },

    text: {
        color: '#666',
        fontWeight: '100',
        fontSize: 12,
    },
});
