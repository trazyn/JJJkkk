
import { StyleSheet } from 'react-native';
import theme from 'app/theme';

export default StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
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
