
/**
 * React Native collapsible navbar
 * https://medium.com/appandflow/react-native-collapsible-navbar-e51a049b560a
 * */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Image,
    View,
    Animated,
} from 'react-native';

import List from './List';

export default class VideoList extends Component {
    static propTypes = {
        renderHeader: PropTypes.func.isRequired,
        headerHeight: PropTypes.number.isRequired,
        list: PropTypes.array.isRequired,
        grid: PropTypes.bool,
        loadmore: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.bool,
        ]),
    };

    static defaultProps = {
        grid: false,
        loadmore: Function,
    };

    componentWillReceiveProps(nextProps) {
        if (this.props.list.length < nextProps.list.length) {
            this.refs.scoller.scrollTo({y: 0, animated: true});
        }
    }

    scrollAnim = new Animated.Value(0);
    offsetAnim = new Animated.Value(0);

    _clampedScrollValue = 0;
    _offsetValue = 0;
    _scrollValue = 0;

    state = {
        // This value used to animate the header
        clampedScroll: Animated.diffClamp(
            Animated.add(
                this.scrollAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                    extrapolateLeft: 'clamp',
                }),
                this.offsetAnim,
            ),
            0,
            this.props.headerHeight,
        ),
    };

    componentDidMount() {
        var headerHeight = this.props.headerHeight;

        this.scrollAnim.addListener(({ value }) => {
            var diff = value - this._scrollValue;

            this._scrollValue = value;

            this._clampedScrollValue = Math.min(
                Math.max(this._clampedScrollValue + diff, 0),
                headerHeight,
            );
        });

        this.offsetAnim.addListener(({ value }) => {
            this._offsetValue = value;
        });
    }

    componentWillUnmount() {
        this.scrollAnim.removeAllListeners();
        this.offsetAnim.removeAllListeners();
    }

    animate = () => {
        var headerHeight = this.props.headerHeight;
        var toValue = (
            this._scrollValue > headerHeight && this._clampedScrollValue > headerHeight / 2
                ? this._offsetValue + headerHeight
                : this._offsetValue - headerHeight
        );

        Animated.timing(this.offsetAnim, {
            toValue,
            duration: 350,
            useNativeDriver: true,
        }).start();
    };

    render() {
        var { containerStyle, renderHeader, headerHeight, list, grid, loadmore } = this.props;
        var translateY = this.state.clampedScroll.interpolate({
            inputRange: [0, headerHeight],
            outputRange: [0, -headerHeight],
            extrapolate: 'clamp',
        });

        return (
            <View
                style={{ flex: 1 }}
            >
                <Animated.View style={
                    {
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: '100%',
                        padding: 24,
                        paddingTop: 10,
                        paddingBottom: 10,
                        backgroundColor: '#fff',
                        zIndex: 1,
                        borderBottomWidth: 1,
                        borderColor: 'rgba(0, 0, 0, .1)',
                        transform: [
                            {
                                translateY,
                            }
                        ],
                    }
                }>
                    {
                        renderHeader()
                    }
                </Animated.View>

                <Animated.ScrollView
                    ref="scoller"
                    style={containerStyle}
                    showsVerticalScrollIndicator={false}
                    onEndReachedThreshold={.7}
                    onEndReached={() => loadmore && loadmore()}
                    onScrollEndDrag={e => {
                        this._scrollEndTimer = setTimeout(() => this.animate(), 250);
                    }}
                    onMomentumScrollBegin={() => {
                        clearTimeout(this._scrollEndTimer);
                    }}
                    onMomentumScrollEnd={() => this.animate()}
                    scrollEventThrottle={1}
                    onScroll={
                        Animated.event(
                            [
                                // Scroll to hide header
                                {
                                    nativeEvent: {
                                        contentOffset: {
                                            y: this.scrollAnim
                                        }
                                    }
                                }
                            ],
                            {
                                useNativeDriver: true,
                            }
                        )
                    }
                >
                    <List
                        list={list.slice()}
                        grid={grid}
                        navigator={this.props.navigator}
                    />

                    {
                        // Reach the end
                        loadmore === false && (
                            <View style={{
                                paddingBottom: 10,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Image {...{
                                    source: require('images/logo.png'),
                                    style: {
                                        height: 32,
                                        width: 32,
                                    },
                                }} />
                            </View>
                        )
                    }
                </Animated.ScrollView>
            </View>
        );
    }
}
