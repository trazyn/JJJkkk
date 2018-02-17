
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    mask: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 0,
        shadowOpacity: 0,
        zIndex: 1,
    }
});
