
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        position: 'relative',
        padding: 24,
        paddingTop: 10,
        backgroundColor: '#fff',
        flex: 1,
    },

    logo: {
        width: 96,
        height: 96,
    },

    search: {
        paddingBottom: 13,
        borderBottomWidth: 1,
        borderColor: '#000',
        borderStyle: 'solid',
    },

    input: {
        color: '#666',
        fontSize: 24,
        fontWeight: '200',
        letterSpacing: 1,
        textAlign: 'center',
    },

    list: {
        marginTop: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        marginTop: 10,
        width: 124,
        paddingTop: 4,
        paddingBottom: 4,
        backgroundColor: 'rgba(255, 255, 255, .4)',
        shadowColor: '#7D6E6E',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
    },

    buttonText: {
        color: '#666',
        fontSize: 12,
        fontWeight: '200',
        letterSpacing: 0.5,
        textAlign: 'center',
    },

    item: {
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    keywords: {
        fontSize: 16,
        color: 'rgba(0, 0, 0, .8)',
        fontWeight: '200',
        textAlign: 'center',
    },
});
