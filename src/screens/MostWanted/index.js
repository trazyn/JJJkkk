
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
                        title="MOST WANTED"
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
                                type === 'all' && classes.selected
                            ]}
                            onPress={e => {
                                if (type === 'all') return;

                                this.reset();
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

                                this.reset();
                                this.getList('month');
                            }}
                        >
                            <Text style={classes.condition}>Lastest Month</Text>
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
