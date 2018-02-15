
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
    fullWidth: width,
    fullHeight: height,

    font: {
        primary: 'Helvetica',
        header: 'Helvetica Neue',
    },

    colors: {
        red: '#CC181E',
        gray: 'rgba(102, 102, 102, .8)',
    },
};
