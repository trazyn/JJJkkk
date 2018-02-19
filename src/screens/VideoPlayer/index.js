
import React, { Component } from 'react';
import Video from 'react-native-video-controls';
import {
    View,
} from 'react-native';

import classes from './classes';

export default class VideoPlayer extends Component {
    render() {
        var { uri, navigator } = this.props;

        return (
            <View style={classes.container}>
                <Video
                    disableBack={false}
                    disableFullscreen={false}
                    disableVolume={true}
                    source={{ uri }}
                    navigator={navigator}
                />
            </View>
        );
    }
}
