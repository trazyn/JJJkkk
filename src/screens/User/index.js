
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    View,
    Text,
    ScrollView,
    FlatList,
    TouchableOpacity,
} from 'react-native';

import classes from './classes';
import humanNumber from 'utils/humanNumber';
import Loader from 'ui/Loader';
import FollowButton from './FollowButton';
import FadeImage from 'ui/FadeImage';

@inject(stores => ({
    loading: stores.user.loading,
    query: stores.user.query,
    getFavorite: stores.user.getFavorite,
    user: stores.user.data,
    favorite: stores.user.favorite,
}))
@observer
export default class User extends Component {
    componentWillMount() {
        var { params, query, getFavorite } = this.props;

        query(params.id);
        getFavorite(params.id);
    }

    renderFavorite(item, index) {
        if (index === 9) {
            return (
                <TouchableOpacity
                    onPress={e => {
                        this.props.navigator.push({
                            screen: 'zzyzx.Favorite',
                            navigatorStyle: {
                                navBarHidden: true,
                            },
                            passProps: {
                                params: {
                                    list: this.props.favorite.slice()
                                }
                            }
                        });
                    }}
                >
                    <FadeImage
                        {...{
                            showLoading: true,
                            resizeMode: 'cover',
                            source: {
                                uri: item.cover.replace(/pl.jpg$/, 'ps.jpg'),
                            },
                            style: [
                                classes.cover,
                                classes.more,
                            ]
                        }}
                    >
                        <View style={classes.mask}>
                            <Text style={classes.maskText}>9+</Text>
                        </View>
                    </FadeImage>
                    <Text
                        ellipsizeMode="tail"
                        numberOfLines={1}
                        style={classes.title}
                    >
                        {item.title}
                    </Text>
                </TouchableOpacity>
            );
        }

        return (
            <TouchableOpacity
                onPress={e => {
                    this.props.navigator.push({
                        screen: 'zzyzx.Detail',
                        navigatorStyle: {
                            navBarHidden: true,
                        },
                        passProps: {
                            params: {
                                id: item.jav
                            }
                        }
                    });
                }}
            >
                <FadeImage
                    {...{
                        showLoading: true,
                        resizeMode: 'cover',
                        source: {
                            uri: item.cover.replace(/pl.jpg$/, 'ps.jpg'),
                        },
                        style: classes.cover
                    }}
                />
                <Text
                    ellipsizeMode="tail"
                    numberOfLines={1}
                    style={classes.title}
                >
                    {item.title}
                </Text>
            </TouchableOpacity>
        );
    }

    renderList(favorite) {
        if (favorite.length === 0) {
            return (
                <View style={{
                    justifyContent: 'flex-start',
                    width: '100%',
                }}>
                    <Text style={classes.nothing}>Nothing...</Text>
                </View>
            );
        }

        return (
            <FlatList
                horizontal={false}
                numColumns={2}
                columnWrapperStyle={classes.grid}
                keyExtractor={e => e.id}
                data={favorite}
                showsVerticalScrollIndicator={false}
                renderItem={e => this.renderFavorite(e.item, e.index)}
            />
        );
    }

    render() {
        var { loading, user, favorite } = this.props;

        if (loading) {
            return <Loader show={true} />;
        }

        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={classes.container}
            >
                <TouchableOpacity
                    style={classes.goback}
                    onPress={e => {
                        this.props.navigator.pop();
                    }}
                >
                    <Icon name="ios-arrow-round-back" size={32} color="#000" />
                </TouchableOpacity>

                <View style={classes.hero}>
                    <FadeImage
                        {...{
                            resizeMode: 'cover',
                            source: {
                                uri: user.avatar,
                            },
                            style: classes.avatar
                        }}
                    />
                    <FollowButton
                        navigator={this.props.navigator}
                    />
                </View>

                <View style={classes.meta}>
                    <Text style={classes.nickname}>
                        {user.nickname}
                    </Text>

                    <View style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}>
                        <Icon name="ios-pin" size={14} color="#9B9B9B" />
                        <Text style={classes.location}>
                            {user.location || 'The hell'}
                        </Text>
                    </View>

                    <Text style={classes.bio}>
                        {user.bio}
                    </Text>

                    <View style={classes.actions}>
                        <TouchableOpacity
                            style={classes.action}
                        >
                            <Text style={classes.followNumber}>
                                {humanNumber(user.followers)}
                            </Text>

                            <Text style={classes.followText}>
                                FOLLOWERS
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={classes.action}
                        >
                            <Text style={classes.followNumber}>
                                {humanNumber(user.following)}
                            </Text>

                            <Text style={classes.followText}>
                                FOLLOWING
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={classes.favorite}>
                    <Icon style={classes.heart} name="ios-heart" size={32} />

                    <View style={classes.list}>
                        {
                            this.renderList(favorite.slice(0, 10))
                        }
                    </View>
                </View>
            </ScrollView>
        );
    }
}
