
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
    loading: stores.mostwanted.loading,
    grid: stores.mostwanted.grid,
    changeViewMode: stores.mostwanted.changeViewMode,
    type: stores.mostwanted.type,
    list: stores.mostwanted.list,
    getList: stores.mostwanted.getList,
    loadmore: stores.mostwanted.loadmore,
}))
@observer
export default class MostWanted extends Component {
    componentWillMount() {
        this.getList();
    }

    getList(type) {
        this.props.getList(1, type);
    }

    renderHeader() {
        var { type, grid, changeViewMode } = this.props;

        return (
            <View>
                <Header
                    title="MOST WANTED"
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
                            type === 'all' && classes.selected
                        ]}
                        onPress={e => {
                            if (type === 'all') return;

                            this.getList('all');
                        }}
                    >
                        <Text style={classes.condition}>All</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            classes.item,
                            type === 'month' && classes.selected
                        ]}
                        onPress={e => {
                            if (type === 'month') return;

                            this.getList('month');
                        }}
                    >
                        <Text style={classes.condition}>Lastest Month</Text>
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
                    renderHeader={() => this.renderHeader()}
                    grid={grid}
                    loadmore={loadmore}
                />
            </View>
        );
    }
}
