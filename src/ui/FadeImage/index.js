
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Animated } from 'react-native';

import classes from './classes';
import blacklist from 'utils/blacklist';

export default class FadeImage extends Component {
    static propTypes = {
        showLoading: PropTypes.bool,
        containerStyle: PropTypes.any,
    };

    static defaultProps = {
        showLoading: false,
    };

    state = {
        opacity: new Animated.Value(0),
        loaded: false,
    };

    render() {
        var { containerStyle, style } = this.props;
        var opacity = this.state.opacity;
        var loadingOpacity = opacity.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
        });

        containerStyle = Array.isArray(containerStyle) ? containerStyle : [containerStyle];
        style = Array.isArray(style) ? style : [style];

        return (
            <View
                style={
                    [classes.container, ...containerStyle]
                }
            >
                {
                    (this.props.showLoading && !this.state.loaded) && (
                        <Animated.View
                            style={
                                [...style, classes.mask, { opacity: loadingOpacity }]
                            }
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
                    {...blacklist(this.props, 'showLoading', 'containerStyle', 'style', 'children')}

                    style={
                        [...style, { opacity }]
                    }

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
