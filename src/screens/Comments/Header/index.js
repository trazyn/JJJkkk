
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import classes from './classes';

export default class Header extends Component {
    render() {
        var { navigator } = this.props;

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
                    onPress={() => {
                        navigator.push({
                            screen: 'zzyzx.WriteComment',
                            navigatorStyle: {
                                navBarHidden: true,
                            },
                            passProps: {
                                submit: (comment) => this.props.submit(comment)
                            },
                        });
                    }}
                >
                    <Text style={classes.text}>WRITE COMMENT</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
