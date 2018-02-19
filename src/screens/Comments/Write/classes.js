
import { StyleSheet } from 'react-native';
import theme from 'app/theme';

export default StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
    },

    header: {
        padding: 24,
        paddingTop: 10,
        paddingBottom: 0,
        marginBottom: 32,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    done: {
        color: '#405DE6',
        fontSize: 20,
    },

    field: {
        paddingLeft: 58,
        borderBottomWidth: 1,
        borderColor: 'rgba(0, 0, 0, .2)',
        borderStyle: 'solid',
    },

    label: {
        color: '#999',
        fontSize: 16,
        fontWeight: '200',
    },

    input: {
        minHeight: 200,
        paddingBottom: 18,
        paddingRight: 24,
        paddingTop: 15,
        color: '#333',
        fontSize: 18,
    },

    error: {
        display: 'none',
        marginLeft: 58,
        marginTop: 10,
        color: theme.colors.red,
        fontSize: 12,
    },
});
