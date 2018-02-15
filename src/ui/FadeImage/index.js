
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Animated } from 'react-native';

import blacklist from 'utils/blacklist';

export default class FadeImage extends Component {
    static propTypes = {
        showLoading: PropTypes.bool,
        offset: PropTypes.array,
    };

    static defaultProps = {
        showLoading: false,
        offset: [],
    };

    state = {
        opacity: new Animated.Value(0),
        loaded: false,
    };

    render() {
        var opacity = this.state.opacity;
        var styles = this.props.style;
        var offset = this.props.offset;
        var loadingOpacity = opacity.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
        });

        styles = Array.isArray(styles) ? styles : [styles];

        return (
            <View
                style={[...styles, {
                    justifyContent: 'center',
                    alignItems: 'center',
                }]}
                transform={offset}
            >
                {
                    (this.props.showLoading && !this.state.loaded) && (
                        <Animated.View
                            style={[...styles, {
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                backgroundColor: '#fff',
                                alignItems: 'center',
                                justifyContent: 'center',
                                opacity: loadingOpacity,
                                shadowRadius: 0,
                                shadowOpacity: 0,
                                zIndex: 1,
                            }]}
                        >
                            <Animated.Image
                                {...{
                                    source: require('images/loading.gif'),
                                    style: {
                                        height: 12,
                                        width: 12,
                                    },
                                }}
                            />
                        </Animated.View>
                    )
                }
                <Animated.Image
                    {...blacklist(this.props, 'style', 'children', 'offset')}

                    style={[...styles, {
                        opacity,
                    }]}

                    onLoadEnd={e => {
                        this.setState({
                            ...this.state,
                            loaded: true,
                        });

                        Animated.timing(opacity, {
                            toValue: 1,
                            duration: 400
                        }).start();
                    }}
                />

                {this.props.children}
            </View>
        );
    }
}
