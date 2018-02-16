
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
} from 'react-native';

import classes from './classes';
import FadeImage from 'ui/FadeImage';

const placeholder = 'https://i.imgur.com/g3dJqEh.png';

export default class List extends Component {
    static propTypes = {
        list: PropTypes.array.isRequired,
        grid: PropTypes.bool.isRequired,
    };

    static defaultProps = {
        grid: false,
    };

    renderList(item) {
        return (
            <TouchableOpacity
                style={classes.item}
                onPress={e => {
                    this.props.navigator.push({
                        screen: 'zzyzx.Detail',
                        navigatorStyle: {
                            navBarHidden: true,
                        },
                        passProps: {
                            params: {
                                id: item.id || item.jav
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
                            uri: item.cover.large || placeholder,
                        },
                        style: classes.large,
                    }}
                >
                    <View style={classes.mask} />

                    <View style={classes.hero}>
                        <Text style={classes.no}>{item.no.toUpperCase()}</Text>
                        <View style={classes.line} />
                        <Text
                            ellipsizeMode="tail"
                            numberOfLines={2}
                            style={classes.title}
                        >
                            {item.name}
                        </Text>
                    </View>
                </FadeImage>
            </TouchableOpacity>
        );
    }

    renderGrid(item, index) {
        return (
            <TouchableOpacity
                style={[
                    classes.gridItem,
                ]}
                onPress={e => {
                    this.props.navigator.push({
                        screen: 'zzyzx.Detail',
                        navigatorStyle: {
                            navBarHidden: true,
                        },
                        passProps: {
                            params: {
                                id: item.id || item.jav
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
                            uri: item.cover.small || placeholder,
                        },
                        style: classes.small
                    }}
                />
                <Text
                    ellipsizeMode="tail"
                    numberOfLines={1}
                    style={classes.smallTitle}
                >
                    {item.name}
                </Text>
            </TouchableOpacity>
        );
    }

    render() {
        var { list, grid } = this.props;

        if (grid) {
            return (
                <FlatList
                    key="grid"
                    horizontal={false}
                    numColumns={3}
                    style={[
                        classes.container,
                    ]}
                    columnWrapperStyle={classes.grid}
                    contentContainerStyle={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    keyExtractor={e => e.id}
                    data={list}
                    showsVerticalScrollIndicator={false}
                    renderItem={e => this.renderGrid(e.item, e.index)}
                />
            );
        }

        return (
            <FlatList
                key="list"
                style={[
                    classes.container,
                ]}
                keyExtractor={e => e.id}
                data={list}
                showsVerticalScrollIndicator={false}
                renderItem={e => this.renderList(e.item)}
            />
        );
    }
}
