
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
    },

    changeAvatar: {
        marginTop: 32,
        marginBottom: 40,
        marginLeft: 24,
        flexDirection: 'row',
        alignItems: 'center',
    },

    circle: {
        width: 120,
        height: 120,
        marginRight: 32,
        borderRadius: 120,
        overflow: 'hidden',
    },

    avatar: {
        width: 120,
        height: 120,
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

    field: {
        paddingLeft: 58,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderColor: 'rgba(0, 0, 0, .2)',
        borderStyle: 'solid',
    },

    red: {
        color: theme.colors.red,
    }
});
