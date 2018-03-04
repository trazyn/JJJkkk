
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
});
