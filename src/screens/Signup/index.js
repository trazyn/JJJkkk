
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import classes from './classes';
import HeaderWithClose from 'components/HeaderWithClose';

@inject(stores => ({
    pending: stores.me.pending,
    signup: stores.me.signup,
}))
@observer
export default class Signup extends Component {
    state = {
        email: '',
        nickname: '',
        password: '',
        confirmedPassword: '',
        hasError: false,
    };

    getErrorMessage() {
        var { email, nickname, password, confirmedPassword } = this.state;

        if ([ email, nickname, password, confirmedPassword ].find(e => !e)) {
            return 'Can\'t leave these empty.';
        }

        if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
            return 'Wrong email address.';
        }

        if (password.length < 6 || confirmedPassword.length < 6) {
            return 'Password between 6 and 20 characters.';
        }

        if (confirmedPassword !== password) {
            return 'These passwords don\'t match.';
        }
    }

    hasError() {
        var errorMessage = this.getErrorMessage();

        if (errorMessage) {
            this.setState({
                ...this.state,
                hasError: errorMessage,
            });
            return;
        }

        this.setState({
            ...this.state,
            hasError: false,
        });
    }

    async signup() {
        var { navigator, pending, signup } = this.props;
        var errorMessage = this.getErrorMessage();
        var { email, nickname, password, confirmedPassword } = this.state;

        if (pending) {
            return;
        }

        if (errorMessage) {
            this.setState({
                ...this.state,
                hasError: errorMessage,
            });
            return;
        }

        if (await signup({ email, nickname, password, confirmedPassword })) {
            navigator.dismissModal();
            return;
        }

        this.setState({
            hasError: 'Email already exists.',
        });
    }

    render() {
        var { navigator, pending } = this.props;

        return (
            <View style={classes.container}>
                <HeaderWithClose
                    title="Register"
                    navigator={navigator}
                />

                <Image
                    {...{
                        source: require('images/logo.png'),
                        style: classes.logo,
                    }}
                />

                <Text style={classes.title}>Welcome back,</Text>
                <Text style={classes.subtitle}>Sign in to cotinue.</Text>

                <View style={classes.form}>
                    <TextInput
                        autoFocus={true}
                        spellCheck={false}
                        autoCapitalize="none"
                        autoCorrect={false}
                        maxLength={30}
                        placeholder="Email"
                        style={classes.input}
                        onChangeText={value => {
                            this.setState({
                                ...this.state,
                                email: value,
                            });

                            setTimeout(() => this.hasError());
                        }}
                    />

                    <TextInput
                        spellCheck={false}
                        autoCapitalize="none"
                        autoCorrect={false}
                        maxLength={20}
                        placeholder="Nickname"
                        style={classes.input}
                        onChangeText={value => {
                            this.setState({
                                ...this.state,
                                nickname: value,
                            });

                            setTimeout(() => this.hasError());
                        }}
                    />

                    <TextInput
                        maxLength={20}
                        secureTextEntry={true}
                        placeholder="Password"
                        style={classes.input}
                        onChangeText={value => {
                            this.setState({
                                ...this.state,
                                password: value,
                            });

                            setTimeout(() => this.hasError());
                        }}
                    />

                    <TextInput
                        maxLength={20}
                        secureTextEntry={true}
                        placeholder="Confirm password"
                        style={classes.input}
                        onChangeText={value => {
                            this.setState({
                                ...this.state,
                                confirmedPassword: value,
                            });

                            setTimeout(() => this.hasError());
                        }}
                    />

                    <Text style={[
                        classes.error,
                        this.state.hasError && { opacity: 1 }
                    ]}>
                        {this.state.hasError}
                    </Text>

                    <TouchableOpacity
                        onPress={e => this.signup()}
                    >
                        <Text style={classes.button}>
                            { pending ? 'Pending' : 'Register' }
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={classes.footer}>
                    <TouchableOpacity
                        onPress={e => {
                            navigator.dismissModal();
                        }}
                    >
                        <Text style={classes.text}>
                            Already have account? Sign in
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
