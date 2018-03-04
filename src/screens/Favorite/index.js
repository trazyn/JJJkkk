
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
} from 'react-native';

import classes from './classes';
import FadeImage from 'ui/FadeImage';
import HeaderWithBack from 'components/HeaderWithBack';

export default class Favorite extends Component {
    renderItem(item) {
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

    render() {
        var { list } = this.props.params;

        return (
            <View style={classes.container}>
                <HeaderWithBack
                    navigator={this.props.navigator}
                    title="Likes"
                />

                <FlatList
                    style={classes.list}
                    horizontal={false}
                    numColumns={3}
                    columnWrapperStyle={classes.grid}
                    keyExtractor={e => e.id}
                    data={list}
                    showsVerticalScrollIndicator={false}
                    renderItem={e => this.renderItem(e.item, e.index)}
                />
            </View>
        );
    }
}
