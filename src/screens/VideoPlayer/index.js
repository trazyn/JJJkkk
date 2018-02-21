
import React, { Component } from 'react';
import Video from 'react-native-video-controls';
import { inject, observer } from 'mobx-react/native';
import {
    View,
} from 'react-native';

import classes from './classes';
import Loader from 'ui/Loader';

@inject(stores => ({
    loading: stores.videoPlayer.loading,
    source: stores.videoPlayer.source,
    getVideo: stores.videoPlayer.getVideo,
    setSource: stores.videoPlayer.setSource,
}))
@observer
export default class VideoPlayer extends Component {
    componentWillMount() {
        var { uri, no } = this.props.params;

        if (no) {
            this.props.getVideo(no);
        } else {
            this.props.setSource(uri);
        }
    }

    render() {
        var { loading, source, navigator } = this.props;

        if (loading) {
            return <Loader show={true} />;
        }

        console.log(source);

        return (
            <View style={classes.container}>
                <Video
                    disableBack={false}
                    disableFullscreen={false}
                    disableVolume={true}
                    source={source}
                    navigator={navigator}
                />
            </View>
        );
    }
}
