
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

import classes from './classes';

export default class Menu extends Component {
    render() {
        return (
            <View style={classes.container}>
                <TouchableOpacity
                    style={classes.close}
                    onPress={e => {
                        this.props.navigator.dismissModal();
                    }}
                >
                    <Icon name="ios-close" size={32} color="#000" />
                </TouchableOpacity>

                <View style={classes.list}>
                    <TouchableOpacity
                        style={classes.item}
                        onPress={e => {
                            this.props.navigator.resetTo({
                                screen: 'zzyzx.MostWanted',
                                navigatorStyle: {
                                    navBarHidden: true,
                                },
                            });
                        }}
                    >
                        <View style={classes.shadow}>
                            <Image {...{
                                resizeMode: 'cover',
                                source: require('images/most-wanted.jpeg'),
                                style: classes.small,
                            }} />
                        </View>

                        <View style={classes.text}>
                            <Text style={classes.title}># Most wanted</Text>
                            <Text style={classes.subtitle}>The films which people most wannted.</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={classes.item}
                        onPress={e => {
                            this.props.navigator.resetTo({
                                screen: 'zzyzx.BestRated',
                                navigatorStyle: {
                                    navBarHidden: true,
                                },
                            });
                        }}
                    >
                        <View style={classes.shadow}>
                            <Image {...{
                                resizeMode: 'cover',
                                source: require('images/best-rated.jpg'),
                                style: classes.small,
                            }} />
                        </View>

                        <View style={classes.text}>
                            <Text style={classes.title}># Best rated</Text>
                            <Text style={classes.subtitle}>The greatest movies of our time.</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={classes.item}
                        onPress={e => {
                            this.props.navigator.resetTo({
                                screen: 'zzyzx.LastestVideo',
                                navigatorStyle: {
                                    navBarHidden: true,
                                },
                            });
                        }}
                    >
                        <View style={classes.shadow}>
                            <Image {...{
                                resizeMode: 'cover',
                                source: require('images/lastest.jpg'),
                                style: classes.small,
                            }} />
                        </View>

                        <View style={classes.text}>
                            <Text style={classes.title}># Lastest</Text>
                            <Text style={classes.subtitle}>Lastest movies.</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={classes.item}>
                        <View style={classes.shadow}>
                            <Image {...{
                                resizeMode: 'cover',
                                source: require('images/porn-stars.jpg'),
                                style: classes.small,
                            }} />
                        </View>

                        <View style={classes.text}>
                            <Text style={classes.title}># Pornstar</Text>
                            <Text style={classes.subtitle}>
                                Pornographic film actor, male or female actor in pornographic films.
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={classes.profile}>
                    <View style={classes.shadow}>
                        <Image {...{
                            resizeMode: 'cover',
                            source: require('images/profile.png'),
                            style: classes.large,
                        }} />
                    </View>

                    <View style={[
                        classes.text,
                        { height: 80 }
                    ]}>
                        <Text style={classes.title}># Profile</Text>
                        <Text style={classes.subtitle}>
                            Collections for you.
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
