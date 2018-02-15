
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    View,
    Text,
    TouchableOpacity,
    Animated,
} from 'react-native';

import classes from './classes';

export default class Header extends Component {
    static propTypes = {
        index: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        goto: PropTypes.func.isRequired,
    };

    render() {
        var { index, max, goto, style } = this.props;

        return (
            <Animated.View style={[classes.container, style]}>
                <View>
                    <Text style={classes.index}>{index} / {max}</Text>
                </View>

                <Text style={classes.title}>BEST REVIEWS</Text>

                <TouchableOpacity
                    style={classes.goto}
                    onPress={() => goto()}
                >
                    <Icon name="ios-arrow-round-forward" size={16} color="#fff" />
                </TouchableOpacity>
            </Animated.View>
        );
    }
}
