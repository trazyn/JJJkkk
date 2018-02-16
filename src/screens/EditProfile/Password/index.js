
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import {
    View,
    Text,
    TextInput,
} from 'react-native';

import classes from './classes';
import Header from '../Header';

@inject(stores => ({
    changePassword: stores.me.changePassword,
}))
@observer
export default class Password extends Component {
    state = {
        hasError: 'Password between 6 and 20 characters.',
        oldPassword: null,
        ewPassword: null,
        confirmPassword: null,
    };

    getErrorMessage() {
        var { oldPassword, newPassword, confirmPassword } = this.state;

        if ([oldPassword, newPassword, confirmPassword].find(e => (e || '').length < 6)) {
            return 'Password between 6 and 20 characters.';
        }

        if (newPassword !== confirmPassword) {
            return 'New password and confirm password not match.';
        }

        if (newPassword === oldPassword) {
            return 'New password can not same to odl password.';
        }
    }

    hasError() {
        var errorMessage = this.getErrorMessage();

        this.setState({
            ...this.state,
            hasError: errorMessage || false,
        });
    }

    render() {
        var { navigator, changePassword } = this.props;

        return (
            <View style={classes.container}>
                <Header
                    navigator={navigator}
                    done={async(e) => {
                        var errorMessage = this.getErrorMessage();
                        if (errorMessage) {
                            this.setState({
                                ...this.state,
                                hasError: errorMessage
                            });
                            return;
                        }

                        var { oldPassword, newPassword } = this.state;

                        if (await changePassword({ oldPassword, newPassword })) {
                            navigator.dismissModal();
                            return;
                        }

                        this.setState({
                            ...this.state,
                            hasError: 'Old password is wrong.',
                        });
                    }}
                />

                <View style={classes.field}>
                    <Text style={classes.label}>
                        Old password
                    </Text>

                    <TextInput
                        ref="oldPassword"
                        secureTextEntry={true}
                        autoFocus={true}
                        placeholder="6-20 characters."
                        style={classes.input}
                        maxLength={20}
                        value={this.state.oldPassword}
                        onChangeText={value => {
                            this.setState({
                                ...this.state,
                                oldPassword: value,
                            });
                            setTimeout(() => this.hasError());
                        }}
                    />
                </View>

                <View style={classes.field}>
                    <Text style={classes.label}>
                        New password
                    </Text>

                    <TextInput
                        ref="newPassword"
                        secureTextEntry={true}
                        style={classes.input}
                        maxLength={20}
                        placeholder="6-20 characters."
                        value={this.state.newPassword}
                        onChangeText={value => {
                            this.setState({
                                ...this.state,
                                newPassword: value,
                            });
                            setTimeout(() => this.hasError());
                        }}
                    />
                </View>

                <View style={classes.field}>
                    <Text style={classes.label}>
                        Confirm password
                    </Text>

                    <TextInput
                        ref="confirmPassword"
                        secureTextEntry={true}
                        style={classes.input}
                        maxLength={20}
                        placeholder="Same to your new password."
                        value={this.state.confirmPassword}
                        onChangeText={value => {
                            this.setState({
                                ...this.state,
                                confirmPassword: value,
                            });
                            setTimeout(() => this.hasError());
                        }}
                    />
                </View>

                <Text style={[
                    classes.error,
                    this.state.hasError && { display: 'flex' }
                ]}>
                    {this.state.hasError}
                </Text>
            </View>
        );
    }
}
