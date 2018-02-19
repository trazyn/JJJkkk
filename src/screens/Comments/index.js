
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    FlatList,
} from 'react-native';
import moment from 'moment';

import classes from './classes';
import Header from './Header';
import FadeImage from 'ui/FadeImage';
import Loader from 'ui/Loader';

@inject(stores => ({
    loading: stores.comments.loading,
    list: stores.comments.list,
    getList: stores.comments.getList,
    loadmore: stores.comments.loadmore,
    submit: stores.comments.submit,
}))
@observer
export default class Comments extends Component {
    componentWillMount() {
        this.props.getList(1, this.props.params.id);
    }

    showUser(id) {
        this.props.navigator.push({
            screen: 'zzyzx.User',
            navigatorStyle: {
                navBarHidden: true,
            },
            passProps: {
                params: {
                    id,
                }
            }
        });
    }

    renderItem(item) {
        return (
            <View style={classes.comment}>
                <TouchableOpacity
                    onPress={e => this.showUser(item.userid)}
                >
                    <FadeImage
                        {...{
                            resizeMode: 'cover',
                            source: {
                                uri: item.avatar,
                            },
                            style: classes.avatar,
                            containerStyle: classes.circle,
                        }}
                    />
                </TouchableOpacity>

                <View style={classes.content}>
                    <View style={classes.meta}>
                        <TouchableOpacity
                            onPress={e => this.showUser(item.userid)}
                        >
                            <Text style={classes.nickname}>
                                {item.nickname}
                            </Text>

                            <Text style={classes.date}>
                                {moment(item.date).fromNow()}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={classes.text}>
                        {item.content}
                    </Text>
                </View>
            </View>
        );
    }

    render() {
        var { loading, list, loadmore, submit } = this.props;

        return (
            <View style={classes.container}>
                <Loader show={loading} />

                <Header
                    navigator={this.props.navigator}
                    submit={comment => submit(this.props.params.id, comment)}
                />

                <ScrollView
                    onScrollEndDrag={e => {
                        var { contentOffset, contentSize } = e.nativeEvent;

                        // Load more items
                        if (list.length === 0) return;

                        if (loadmore && contentOffset.y / contentSize.height > 0.5) {
                            loadmore();
                        }
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    <FlatList
                        style={classes.comments}
                        keyExtractor={e => e.id}
                        data={list}
                        renderItem={e => this.renderItem(e.item, e.index)}
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
            </View>
        );
    }
}
