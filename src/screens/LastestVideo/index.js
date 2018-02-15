
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import classes from './classes';
import Header from 'components/Header';
import VideoList from 'components/VideoList';

@inject(stores => ({
    loading: stores.lastestvideo.loading,
    grid: stores.lastestvideo.grid,
    changeViewMode: stores.lastestvideo.changeViewMode,
    type: stores.lastestvideo.type,
    list: stores.lastestvideo.list,
    getList: stores.lastestvideo.getList,
    loadmore: stores.lastestvideo.loadmore,
}))
@observer
export default class LastestVideo extends Component {
    componentWillMount() {
        this.getList();
    }

    getList(type) {
        this.props.getList(1, type);
    }

    reset() {
        // Reset offset Y
        this.refs.scoller.scrollTo({y: 0, animated: true});
        this.lastOffsetY = 0;
        this.setState({
            hideHeader: false,
        });
    }

    toggleHeader(nativeEvent) {
        var { contentOffset, layoutMeasurement } = nativeEvent;

        if (contentOffset.y < layoutMeasurement.height
            || !this.lastOffsetY) {
            this.setState({
                hideHeader: false,
            });
            this.lastOffsetY = contentOffset.y;
            return;
        }

        // Toggle header, scroll down hide the header, scroll up show the header
        this.setState({
            hideHeader: contentOffset.y > this.lastOffsetY,
        });

        // Keep the recent offset
        this.lastOffsetY = contentOffset.y;
    }

    state = {
        hideHeader: false,
    };

    render() {
        var { loading, type, grid, changeViewMode, list, loadmore } = this.props;
        var hideHeader = this.state.hideHeader;

        if (loading
            && list.length === 0) {
            return false;
        }

        return (
            <View
                style={[
                    classes.container,
                    !hideHeader && { paddingTop: 104 - 32 },
                ]}
            >
                <View style={[
                    classes.sticky,
                    hideHeader && { display: 'none' },
                ]}>
                    <Header
                        title="LASTEST VIDEO"
                        navigator={this.props.navigator}
                        grid={grid}
                        changeViewMode={e => {
                            this.reset();
                            changeViewMode();
                        }}
                    />

                    <View style={classes.filter}>
                        <TouchableOpacity
                            style={[
                                classes.item,
                                type === 'comment' && classes.selected
                            ]}
                            onPress={e => {
                                if (type === 'comment') return;

                                this.reset();
                                this.getList('comment');
                            }}
                        >
                            <Text style={classes.condition}>New Comments</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[
                                classes.item,
                                type === 'release' && classes.selected
                            ]}
                            onPress={e => {
                                if (type === 'release') return;

                                this.reset();
                                this.getList('release');
                            }}
                        >
                            <Text style={classes.condition}>New Entries</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[
                                classes.item,
                                type === 'entry' && classes.selected
                            ]}
                            onPress={e => {
                                if (type === 'entry') return;

                                this.reset();
                                this.getList('entry');
                            }}
                        >
                            <Text style={classes.condition}>New Release</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView
                    ref="scoller"
                    onScrollEndDrag={e => {
                        var { contentOffset, contentSize } = e.nativeEvent;

                        // Load more items
                        if (list.length === 0) return;

                        if (contentOffset.y / contentSize.height > 0.5) {
                            loadmore();
                        }
                    }}
                    scrollEventThrottle={16}
                    onScroll={e => this.toggleHeader(e.nativeEvent)}
                >
                    <VideoList
                        list={list.slice()}
                        grid={grid}
                    />
                </ScrollView>
            </View>
        );
    }
}
