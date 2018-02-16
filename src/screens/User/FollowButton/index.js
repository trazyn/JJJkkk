
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import classes from './classes';

@inject(stores => {
    var { me, user } = stores;

    return {
        follow: me.follow,
        unfollow: me.unfollow,
        user: user.data,
        isme: me.data.id && (me.data.id === user.data.id)
    };
})
@observer
export default class FollowButton extends Component {
    render() {
        // eslint-disable-next-line
        var { isme, user, follow, unfollow } = this.props;

        if (isme) {
            return (
                <TouchableOpacity
                    style={[
                        classes.container,
                        classes.edit,
                    ]}
                    onPress={e => {
                        this.props.navigator.push({
                            screen: 'zzyzx.EditProfile',
                            navigatorStyle: {
                                navBarHidden: true,
                            },
                        });
                    }}
                >
                    <LinearGradient
                        colors={['#00C9FF', '#92FE9D']}
                        start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                        style={classes.gradient}
                    >
                        <View>
                            <Icon name="ios-create-outline" size={32} color="#fff" />
                            <Text style={classes.text}>Edit</Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            );
        }

        // Followed
        if (user.followed) {
            return (
                <TouchableOpacity
                    style={[
                        classes.container,
                        classes.edit,
                    ]}
                    onPress={async(e) => {
                        if (await unfollow(user.id)) {
                            user.followed = false;
                        }
                    }}
                >
                    <LinearGradient
                        colors={['#FF14F3', '#FF6601']}
                        start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                        style={classes.gradient}
                    >
                        <View>
                            <Icon name="ios-remove" size={32} color="#fff" />
                            <Text style={classes.text}>Unfollow</Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            );
        }

        // Not follow
        return (
            <TouchableOpacity
                style={[
                    classes.container,
                    classes.withoutGradient,
                    classes.notFollow,
                ]}
                onPress={async(e) => {
                    if (await follow(user.id)) {
                        user.followed = true;
                    }
                }}
            >
                <View>
                    <Icon name="ios-add" size={32} color="#fff" />
                    <Text style={classes.text}>Follow</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
