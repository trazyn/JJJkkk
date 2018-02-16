
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        backgroundColor: '#fff',
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
