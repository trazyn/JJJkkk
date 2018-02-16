
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import {
    View,
    TouchableOpacity,
} from 'react-native';

import classes from './classes';

export default class Footer extends Component {
    static propTypes = {
        show: PropTypes.bool.isRequired,
        liked: PropTypes.bool.isRequired,
        favorite: PropTypes.func.isRequired,
        play: PropTypes.func.isRequired,
    };

    static defaultProps = {
        show: false,
        liked: false,
    };

    render() {
        var { show, liked, favorite, play } = this.props;

        if (!show) {
            return false;
        }

        return (
            <View style={classes.container}>
                <TouchableOpacity
                    style={classes.action}
                    onPress={e => favorite()}
                >
                    {
                        liked
                            ? <Icon name="ios-remove" size={16} color="#fff" />
                            : <Icon name="ios-add" size={16} color="#fff" />
                    }
                </TouchableOpacity>

                <TouchableOpacity
                    style={classes.action}
                    onPress={e => play()}
                >
                    <Icon name="ios-play" size={16} color="#fff" />
                </TouchableOpacity>
            </View>
        );
    }
}
