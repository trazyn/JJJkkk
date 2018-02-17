
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
        var { loading, params, list, loadmore } = this.props;
        var hideHeader = this.state.hideHeader;

        if (loading
            && list.length === 0) {
            return <Loader show={true} />;
        }

        return (
            <View
                style={[
                    classes.container,
                    !hideHeader && { paddingTop: 68 - 32 },
                ]}
            >
                <View style={[
                    classes.sticky,
                    hideHeader && { display: 'none' },
                ]}>
                    <Header
                        title="VIDEO BY"
                        query={params.name}
                        navigator={this.props.navigator}
                    />
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
                />
            </View>
        );
    }
}
