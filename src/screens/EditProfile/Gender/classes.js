
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
    },

    field: {
        paddingLeft: 58,
    },

    label: {
        marginBottom: 35,
        color: '#999',
        fontSize: 16,
        fontWeight: '200',
    },

    option: {
        flexDirection: 'row',
        paddingBottom: 18,
        paddingRight: 24,
        paddingTop: 15,
        marginBottom: 32,
        borderBottomWidth: 1,
        borderColor: 'rgba(0, 0, 0, .2)',
        borderStyle: 'solid',
    },

    selected: {
        borderColor: '#405DE6',
    },

    optionText: {
        width: 140,
        color: '#333',
        fontSize: 18,
    },

    hide: {
        display: 'none',
    },
});
