
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import classes from './classes';

export default class SmallHeader extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        query: PropTypes.string.isRequired,
    };

    render() {
        var { title, query } = this.props;

        return (
            <View style={classes.container}>
                <View style={classes.text}>
                    <Text style={classes.title}>{title}</Text>

                    <View style={classes.border}>
                        <Text style={classes.query}>{query}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={classes.action}
                    onPress={e => {
                        this.props.navigator.dismissModal();
                    }}
                >
                    <Icon name="ios-close" size={32} color="#000" />
                </TouchableOpacity>
            </View>
        );
    }
}
