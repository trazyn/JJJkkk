
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ScrollView,
} from 'react-native';

import classes from './classes';
import Loader from 'ui/Loader';
import FadeImage from 'ui/FadeImage';
import HeaderWithBack from 'components/HeaderWithBack';

@inject(stores => ({
    loading: stores.stars.loading,
    list: stores.stars.list,
    getList: stores.stars.getList,
}))
@observer
export default class Stars extends Component {
    componentWillMount() {
        this.props.getList();
    }

    renderItem(item, index) {
        return (
            <TouchableOpacity
                onPress={e => this.listByStar(item)}
                style={classes.star}
            >
                <View style={classes.rank}>
                    <Text style={classes.starRank}>#{index}</Text>
                </View>

                <View style={{
                    alignItems: 'center',
                    flexDirection: 'row'
                }}>
                    <FadeImage
                        {...{
                            showLoading: true,
                            resizeMode: 'cover',
                            source: {
                                uri: item.avatar,
                            },
                            style: classes.avatar,
                            containerStyle: classes.shadow,
                        }}
                    />
                    <Text
                        ellipsizeMode="tail"
                        numberOfLines={1}
                        style={classes.starName}
                    >
                        {item.name}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    listByStar(item) {
        this.props.navigator.showModal({
            screen: 'zzyzx.ListByStar',
            navigatorStyle: {
                navBarHidden: true,
            },
            passProps: {
                params: item,
            }
        });
    }

    render() {
        var { loading, list } = this.props;

        if (loading) {
            return <Loader show={true} />;
        }

        return (
            <View style={classes.container}>
                <View style={classes.header}>
                    <HeaderWithBack
                        navigator={this.props.navigator}
                        title="Top stars"
                    />
                </View>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={classes.hero}>
                        <TouchableOpacity
                            onPress={e => this.listByStar(list[0])}
                        >
                            <FadeImage
                                {...{
                                    source: {
                                        uri: list[0].avatar
                                    },
                                    style: classes.large
                                }}
                            >
                                <View style={classes.mask} />
                                <View style={{
                                    position: 'absolute',
                                    top: 4,
                                    left: 4,
                                    flexDirection: 'row',
                                    alignItems: 'flex-end',
                                    zIndex: 2,
                                }}>
                                    <Text style={{
                                        paddingBottom: 2,
                                        marginRight: 4,
                                        fontWeight: '100',
                                        fontSize: 12,
                                    }}>
                                        #
                                    </Text>
                                    <Text style={{
                                        fontSize: 24,
                                    }}>
                                        1
                                    </Text>
                                </View>
                            </FadeImage>
                        </TouchableOpacity>

                        <View style={classes.mediums}>
                            <TouchableOpacity
                                onPress={e => this.listByStar(list[1])}
                            >
                                <FadeImage
                                    {...{
                                        source: {
                                            uri: list[1].avatar
                                        },
                                        style: classes.medium
                                    }}
                                >
                                    <View style={classes.mask} />
                                    <Text style={classes.rankText}>#2</Text>
                                </FadeImage>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={e => this.listByStar(list[2])}
                            >
                                <FadeImage
                                    {...{
                                        source: {
                                            uri: list[2].avatar
                                        },
                                        style: classes.medium
                                    }}
                                >
                                    <View style={classes.mask} />
                                    <Text style={classes.rankText}>#3</Text>
                                </FadeImage>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <FlatList
                        style={classes.list}
                        keyExtractor={e => e.id}
                        data={list.slice(3, list.length)}
                        showsVerticalScrollIndicator={false}
                        renderItem={e => this.renderItem(e.item, e.index + 4)}
                    />
                </ScrollView>
            </View>
        );
    }
}
