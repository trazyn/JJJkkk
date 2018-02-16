
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
        done: PropTypes.func.isRequired,
    };

    render() {
        var { navigator, done } = this.props;

        return (
            <View style={classes.container}>
                <TouchableOpacity
                    onPress={e => {
                        navigator.dismissModal();
                    }}
                    style={classes.goback}
                >
                    <Icon name="ios-close" size={32} color="#000" />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => done()}
                >
                    <Text style={classes.done}>DONE</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
