
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import classes from './classes';
import Loader from 'ui/Loader';
import Header from 'components/Header';
import List from 'components/VideoList';

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

    toggleHeader(hideHeader) {
        if (hideHeader !== this.state.hideHeader) {
            this.setState({
                hideHeader,
            });
        }
    }

    state = {
        hideHeader: false,
    };

    render() {
        var { loading, type, grid, changeViewMode, list, loadmore } = this.props;
        var hideHeader = this.state.hideHeader;

        if (loading
            && list.length === 0) {
            return <Loader show={true} />;
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
                                type === 'popular' && classes.selected
                            ]}
                            onPress={e => {
                                if (type === 'popular') return;

                                this.reset();
                                this.getList('popular');
                            }}
                        >
                            <Text style={classes.condition}>Popular</Text>
                        </TouchableOpacity>

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
                    </View>
                </View>

                <List
                    ref={e => {
                        if (!e) return;
                        this.reset = e.state.reset;
                    }}
                    navigator={this.props.navigator}
                    list={list.slice()}
                    loadmore={loadmore}
                    toggleHeader={(hideHeader) => this.toggleHeader(hideHeader)}
                    grid={grid}
                />
            </View>
        );
    }
}
