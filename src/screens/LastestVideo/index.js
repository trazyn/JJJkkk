
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

    renderHeader(gotoTop) {
        var { type, grid, changeViewMode } = this.props;

        return (
            <View>
                <Header
                    title="LASTEST VIDEO"
                    navigator={this.props.navigator}
                    grid={grid}
                    changeViewMode={e => {
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

                            gotoTop();
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

                            gotoTop();
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

                            gotoTop();
                            this.getList('release');
                        }}
                    >
                        <Text style={classes.condition}>New Entries</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    render() {
        var { loading, grid, list, loadmore } = this.props;

        if (loading
            && list.length === 0) {
            return <Loader show={true} />;
        }

        return (
            <View
                style={[
                    classes.container,
                ]}
            >
                <List
                    navigator={this.props.navigator}
                    containerStyle={{
                        paddingTop: 112,
                    }}
                    headerHeight={47}
                    list={list.slice()}
                    renderHeader={(gotoTop) => this.renderHeader(gotoTop)}
                    loadmore={loadmore}
                    grid={grid}
                />
            </View>
        );
    }
}
