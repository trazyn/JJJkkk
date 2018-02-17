
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
    signin: stores.me.signin,
}))
@observer
export default class Signin extends Component {
    state = {
        username: '',
        password: '',
        hasError: false,
    };

    getErrorMessage() {
        var { username, password } = this.state;

        if (!username || !password) {
            return 'Username and Password can\'t empty.';
        }

        if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(username)) {
            return 'Username should be an email';
        }

        if (password.length < 6) {
            return 'Password between 6 and 20 characters.';
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

    async signin() {
        var { navigator, pending, signin } = this.props;
        var errorMessage = this.getErrorMessage();
        var { username, password } = this.state;

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

        if (await signin(username, password)) {
            navigator.dismissModal();
            return;
        }

        this.setState({
            hasError: 'Wrong username or password.',
        });
    }

    render() {
        var { navigator, pending } = this.props;

        return (
            <View style={classes.container}>
                <HeaderWithClose
                    title="Login"
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
                        placeholder="Username"
                        style={classes.input}
                        onChangeText={value => {
                            this.setState({
                                ...this.state,
                                username: value,
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

                    <Text style={[
                        classes.error,
                        this.state.hasError && { opacity: 1 }
                    ]}>
                        {this.state.hasError}
                    </Text>

                    <TouchableOpacity
                        onPress={e => this.signin()}
                    >
                        <Text style={classes.button}>
                            { pending ? 'Pending' : 'Login' }
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={classes.footer}>
                    <TouchableOpacity
                        style={{ marginBottom: 20 }}
                        onPress={e => navigator.dismissModal()}
                    >
                        <Text style={[
                            classes.text,
                            { color: '#405DE6' }
                        ]}>
                            Continue without sign in.
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={e => {
                            navigator.showModal({
                                screen: 'zzyzx.Signup',
                                navigatorStyle: {
                                    navBarHidden: true,
                                },
                            });
                        }}
                    >
                        <Text style={classes.text}>
                            Don't have account? Sign up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
