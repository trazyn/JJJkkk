
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import {
    View,
} from 'react-native';

import classes from './classes';
import Loader from 'ui/Loader';
import Header from 'components/SmallHeader';
import List from 'components/VideoList';

@inject(stores => ({
    loading: stores.listByStar.loading,
    list: stores.listByStar.list,
    getList: stores.listByStar.getList,
    loadmore: stores.listByStar.loadmore,
}))
@observer
export default class ListByStar extends Component {
    componentWillMount() {
        var { getList, params } = this.props;

        getList(1, params.id);
    }

    renderHeader() {
        var { params } = this.props;

        return (
            <View>
                <Header
                    title="VIDEO BY"
                    query={params.name}
                    navigator={this.props.navigator}
                />
            </View>
        );
    }

    render() {
        var { loading, list, loadmore } = this.props;

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
                        paddingTop: 54.5,
                    }}
                    headerHeight={54.5}
                    list={list.slice()}
                    renderHeader={() => this.renderHeader()}
                    loadmore={loadmore}
                />
            </View>
        );
    }
}
