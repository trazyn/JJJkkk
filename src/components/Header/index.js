
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import classes from './classes';

export default class Header extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        grid: PropTypes.bool,
        changeViewMode: PropTypes.func,
    };

    static defaultProps = {
        grid: false,
    };

    render() {
        var { title, grid, changeViewMode } = this.props;

        return (
            <View style={classes.container}>
                <View style={classes.reddot} />

                <TouchableOpacity
                    onPress={e => {
                        this.props.navigator.showModal({
                            screen: 'zzyzx.Menu',
                            navigatorStyle: {
                                navBarHidden: true,
                            },
                        });
                    }}
                >
                    <Text style={classes.title}>{title.toUpperCase()}</Text>
                </TouchableOpacity>

                <View style={classes.actions}>
                    {
                        !grid
                            ? (
                                <TouchableOpacity
                                    style={classes.wrap}
                                    onPress={e => changeViewMode()}
                                >
                                    <Icon style={classes.action} name="md-funnel" size={16} color="#000" />
                                </TouchableOpacity>
                            )
                            : (
                                <TouchableOpacity
                                    style={classes.wrap}
                                    onPress={e => changeViewMode()}
                                >
                                    <Icon style={classes.action} name="ios-grid-outline" size={16} color="#000" />
                                </TouchableOpacity>
                            )
                    }
                    <TouchableOpacity
                        style={classes.wrap}
                        onPress={e => {
                            this.props.navigator.showModal({
                                screen: 'zzyzx.Search',
                                navigatorStyle: {
                                    navBarHidden: true,
                                },
                            });
                        }}
                    >
                        <Icon style={classes.action} name="ios-search" size={16} color="#000" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
