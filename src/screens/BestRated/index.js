
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
    loading: stores.bestrated.loading,
    grid: stores.bestrated.grid,
    changeViewMode: stores.bestrated.changeViewMode,
    type: stores.bestrated.type,
    list: stores.bestrated.list,
    getList: stores.bestrated.getList,
    loadmore: stores.bestrated.loadmore,
}))
@observer
export default class BestRated extends Component {
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
                    title="BEST RATED"
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

                            gotoTop();
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

                            gotoTop();
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
                    loadmore={loadmore}
                    grid={grid}
                />
            </View>
        );
    }
}
