
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    ScrollView,
    Image,
    View,
} from 'react-native';

import List from './List';

export default class VideoList extends Component {
    static propTypes = {
        list: PropTypes.array.isRequired,
        grid: PropTypes.bool,
        toggleHeader: PropTypes.func.isRequired,
        loadmore: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.bool,
        ]),
    };

    static defaultProps = {
        grid: false,
        loadmore: Function,
    };

    // Reset scroll state
    reset() {
        // Reset offset Y
        this.refs.scoller.scrollTo({y: 0, animated: true});
        this.lastOffsetY = 0;
        this.props.toggleHeader(false);
    }

    toggleHeader(nativeEvent) {
        var { contentOffset, layoutMeasurement } = nativeEvent;

        // Show header in first screen
        if (
            contentOffset.y < layoutMeasurement.height
        ) {
            this.props.toggleHeader(false);
            return;
        }

        // Scroll down hide header
        var isDown = contentOffset.y > this.lastOffsetY;
        var offset = Math.abs(contentOffset.y - this.lastOffsetY);

        // Toggle header
        if (offset > 10) {
            // eslint-disable-next-line
            let hideHeader = isDown ? true : false;
            // Toggle header, scroll down hide the header, scroll up show the header
            this.props.toggleHeader(hideHeader);
        }
    }

    state = {
        // Export to parent component
        reset: this.reset.bind(this),
    };

    render() {
        var { list, grid, loadmore } = this.props;

        return (
            <ScrollView
                ref="scoller"
                showsVerticalScrollIndicator={false}
                onScrollEndDrag={e => {
                    var { contentOffset, contentSize } = e.nativeEvent;

                    // Keep the recent offset
                    this.lastOffsetY = contentOffset.y;

                    // Load more items
                    if (list.length === 0) return;

                    if (loadmore && contentOffset.y / contentSize.height > 0.5) {
                        loadmore();
                    }
                }}
                scrollEventThrottle={16}
                onScroll={e => {
                    var nativeEvent = e.nativeEvent;

                    clearTimeout(this.timer);
                    this.timer = setTimeout(() => this.toggleHeader(nativeEvent), 33);
                }}
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
            </ScrollView>
        );
    }
}
