
import { StyleSheet } from 'react-native';
import theme from 'app/theme';

export default StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        backgroundColor: '#fff',
    },

    filter: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },

    item: {
        paddingBottom: 4,
        marginRight: 20,
        marginTop: 24,
    },

    condition: {
        color: '#484848',
        fontSize: 14,
        fontWeight: 'normal',
    },

    selected: {
        borderBottomWidth: 1,
        borderColor: theme.colors.gray,
        borderStyle: 'solid',
    },

    sticky: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        padding: 24,
        paddingTop: 10,
        backgroundColor: '#fff',
        zIndex: 1,
    },
});
