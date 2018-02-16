
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        zIndex: 1,
    },

    text: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    title: {
        fontSize: 16,
        marginRight: 16,
    },

    border: {
        paddingBottom: 6,
        paddingTop: 6,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#979797',
    },

    query: {
        color: '#484848',
        fontSize: 16,
        fontWeight: '100',
    },

    action: {
        height: 32,
        width: 32,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [
            {
                translateX: 12,
            }
        ],
    },
});
