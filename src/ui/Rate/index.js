
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    View,
    Text,
} from 'react-native';

import classes from './classes';

export default class Rate extends Component {
    static propTypes = {
        rate: PropTypes.number,
    };

    static defaultProps = {
        rate: 0,
    };

    renderStars() {
        var stars = [];
        var rate = this.props.rate;
        var count = Math.floor(rate / 2);

        for (var i = 0; i < 5; ++i) {
            if (i < count) {
                stars.push(
                    <View
                        key={i}
                        style={classes.star}
                    >
                        <Icon
                            style={classes.bg}
                            name="ios-star"
                            size={20}
                            color="rgba(255, 200, 128, .7)"
                        />

                        <Icon
                            style={[classes.fg, { width: '100%' }]}
                            name="ios-star"
                            size={20}
                            color="rgba(255, 200, 128, 1)"
                        />
                    </View>
                );
            } else if (i === count) {
                stars.push(
                    <View
                        key={i}
                        style={classes.star}
                    >
                        <Icon
                            style={classes.bg}
                            name="ios-star"
                            size={20}
                            color="rgba(255, 200, 128, .7)"
                        />

                        <Icon
                            name="ios-star"
                            size={20}
                            color="rgba(255, 200, 128, 1)"
                            style={[classes.fg, {
                                width: `${((rate / 2) - count) * 100}%`,
                            }]}
                        />
                    </View>
                );
            } else {
                stars.push(
                    <View
                        key={i}
                        style={classes.star}
                    >
                        <Icon
                            style={classes.bg}
                            name="ios-star"
                            size={20}
                            color="rgba(255, 200, 128, .7)"
                        />
                    </View>
                );
            }
        }

        return stars;
    }

    render() {
        return (
            <View style={classes.container}>
                <View style={classes.stars}>
                    {
                        this.renderStars()
                    }
                </View>

                <Text style={classes.text}>{this.props.rate}</Text>
            </View>
        );
    }
}
