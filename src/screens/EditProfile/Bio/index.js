
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
    me: stores.me.data,
    update: stores.me.update,
}))
@observer
export default class Bio extends Component {
    state = {
        hasError: false,
    };

    render() {
        var { navigator, me, update } = this.props;

        return (
            <View style={classes.container}>
                <Header
                    navigator={navigator}
                    done={async(e) => {
                        if (this.state.hasError) return;

                        await update({ bio: this.refs.input._lastNativeText });
                        navigator.dismissModal();
                    }}
                />

                <View style={classes.field}>
                    <Text style={classes.label}>
                        Bio
                    </Text>

                    <TextInput
                        ref="input"
                        multiline={true}
                        autoFocus={true}
                        style={classes.input}
                        defaultValue={me.bio}
                        maxLength={140}
                        onChangeText={value => this.setState({ hasError: value.length === 0 })}
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
