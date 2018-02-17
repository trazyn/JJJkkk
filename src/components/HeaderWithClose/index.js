
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import classes from './classes';

export default class HeaderWithClose extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
    };

    render() {
        var { navigator, title } = this.props;

        return (
            <View style={classes.container}>
                <Text style={classes.title}>{title.toUpperCase()}</Text>

                <TouchableOpacity
                    onPress={e => {
                        navigator.dismissModal();
                    }}
                    style={classes.close}
                >
                    <Icon name="ios-close" size={32} color="#000" />
                </TouchableOpacity>
            </View>
        );
    }
}
