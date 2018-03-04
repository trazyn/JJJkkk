
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import classes from './classes';
import FadeImage from 'ui/FadeImage';
import HeaderWithBack from 'components/HeaderWithBack';

@inject(stores => ({
    me: stores.me.data,
    changeAvatar: stores.me.changeAvatar,
    logout: stores.me.logout,
}))
@observer
export default class EditProfile extends Component {
    render() {
        var { navigator, logout, changeAvatar } = this.props;
        var { avatar, nickname, location, gender, bio } = this.props.me;

        return (
            <View style={classes.container}>
                <View style={classes.header}>
                    <HeaderWithBack
                        navigator={navigator}
                        title="Edit Profile"
                    />
                </View>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={classes.changeAvatar}>
                        <FadeImage
                            {...{
                                resizeMode: 'cover',
                                source: {
                                    uri: avatar,
                                },
                                containerStyle: classes.circle,
                                style: classes.avatar,
                            }}
                        />

                        <TouchableOpacity
                            onPress={e => {
                                ImagePicker.showImagePicker(
                                    {
                                        title: 'Select Avatar',
                                        storageOptions: {
                                            skipBackup: true,
                                            path: 'images'
                                        }
                                    },
                                    async(response) => {
                                        this.props.me.avatar = response.uri;

                                        if (!(await changeAvatar(response.uri))) {
                                            this.props.showError('Failed to change avatar.');
                                        }
                                    }
                                );
                            }}
                        >
                            <Text style={classes.label}>Change your avatar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={classes.field}>
                        <Text style={classes.label}>
                            Nickname
                        </Text>

                        <TouchableOpacity
                            onPress={e => {
                                navigator.showModal({
                                    screen: 'zzyzx.EditProfile.Nickname',
                                    navigatorStyle: {
                                        navBarHidden: true,
                                    },
                                });
                            }}
                        >
                            <Text style={classes.input}>
                                {nickname}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={classes.field}>
                        <Text style={classes.label}>
                            Location
                        </Text>

                        <TouchableOpacity
                            onPress={e => {
                                navigator.showModal({
                                    screen: 'zzyzx.EditProfile.Location',
                                    navigatorStyle: {
                                        navBarHidden: true,
                                    },
                                });
                            }}
                        >
                            <Text style={classes.input}>
                                {location}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={classes.field}>
                        <Text style={classes.label}>
                            Gender
                        </Text>

                        <TouchableOpacity
                            onPress={e => {
                                navigator.showModal({
                                    screen: 'zzyzx.EditProfile.Gender',
                                    navigatorStyle: {
                                        navBarHidden: true,
                                    },
                                });
                            }}
                        >
                            <Text style={classes.input}>
                                {gender === 'M' ? 'Male' : 'Famale'}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={classes.field}>
                        <Text style={classes.label}>
                            Bio
                        </Text>

                        <TouchableOpacity
                            onPress={e => {
                                navigator.showModal({
                                    screen: 'zzyzx.EditProfile.Bio',
                                    navigatorStyle: {
                                        navBarHidden: true,
                                    },
                                });
                            }}
                        >
                            <Text style={classes.input}>
                                {bio}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[
                        classes.field,
                        { borderBottomWidth: 0 }
                    ]}>
                        <TouchableOpacity
                            onPress={e => {
                                navigator.showModal({
                                    screen: 'zzyzx.EditProfile.Password',
                                    navigatorStyle: {
                                        navBarHidden: true,
                                    },
                                });
                            }}
                        >
                            <Text style={[classes.label, classes.red]}>
                                Change password
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[
                        classes.field,
                        { borderBottomWidth: 0 }
                    ]}>
                        <TouchableOpacity
                            onPress={async() => {
                                if (await logout()) {
                                    navigator.resetTo({
                                        screen: 'zzyzx.BestReviews',
                                        navigatorStyle: {
                                            navBarHidden: true,
                                        },
                                    });
                                }
                            }}
                        >
                            <Text style={[classes.label, classes.red]}>
                                Logout
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
