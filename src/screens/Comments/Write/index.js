
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import classes from './classes';

export default class Write extends Component {
    static propTypes = {
        submit: PropTypes.func.isRequired,
    };

    state = {
        comment: '',
        hasError: false,
    };

    async submit() {
        var { navigator, submit } = this.props;

        if (this.state.comment.length > 2) {
            if (await submit(this.state.comment)) {
                navigator.pop();
            }
            return;
        }

        this.setState({
            ...this.state,
            hasError: 'Can\'t be less than 3 characters.'
        });
    }

    render() {
        return (
            <View style={classes.container}>
                <View style={classes.header}>
                    <TouchableOpacity
                        onPress={e => {
                            this.props.navigator.pop();
                        }}
                        style={classes.goback}
                    >
                        <Icon name="ios-arrow-round-back" size={32} color="#000" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.submit()}
                    >
                        <Text style={classes.done}>DONE</Text>
                    </TouchableOpacity>
                </View>

                <View style={classes.field}>
                    <Text style={classes.label}>
                        Comment
                    </Text>

                    <TextInput
                        multiline={true}
                        autoFocus={true}
                        style={classes.input}
                        placeholder="Write something..."
                        maxLength={140}
                        value={this.state.comment}
                        onChangeText={value => {
                            this.setState({
                                ...this.state,
                                comment: value
                            });
                        }}
                    />
                </View>

                <Text style={[
                    classes.error,
                    this.state.hasError && { display: 'flex' }
                ]}>
                   You can't leave this empty.
                </Text>
            </View>
        );
    }
}
