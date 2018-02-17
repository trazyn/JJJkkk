
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Image,
} from 'react-native';

import classes from './classes';

export default class Loader extends Component {
    static propTypes = {
        show: PropTypes.bool,
    };

    static defaultProps = {
        show: false,
    };

    render() {
        var { show } = this.props;

        if (!show) {
            return false;
        }

        return (
            <View style={classes.container}>
                <Image {...{
                    source: require('images/logo.png'),
                    style: classes.logo,
                }} />
            </View>
        );
    }
}
