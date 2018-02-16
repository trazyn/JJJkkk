
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import classes from './classes';

export default class HeaderWithBack extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
    };

    render() {
        var { navigator, title } = this.props;

        return (
            <View style={classes.container}>
                <TouchableOpacity
                    onPress={e => {
                        navigator.pop();
                    }}
                    style={classes.goback}
                >
                    <Icon name="ios-arrow-round-back" size={32} color="#000" />
                </TouchableOpacity>

                <Text style={classes.title}>{title.toUpperCase()}</Text>
            </View>
        );
    }
}
