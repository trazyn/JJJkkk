
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import classes from './classes';
import Header from '../Header';

@inject(stores => ({
    me: stores.me.data,
    update: stores.me.update,
}))
@observer
export default class Gender extends Component {
    state = {
        gender: false,
    };

    render() {
        var { navigator, me, update } = this.props;
        var gender = this.state.gender || me.gender;

        return (
            <View style={classes.container}>
                <Header
                    navigator={navigator}
                    done={async(e) => {
                        if (true
                            && this.state.gender
                            && this.state.gender !== me.gender) {
                            await update({ gender: this.state.gender });
                        }

                        navigator.dismissModal();
                    }}
                />

                <View style={classes.field}>
                    <Text style={classes.label}>
                        Gender
                    </Text>

                    <TouchableOpacity
                        onPress={e => this.setState({ gender: 'M' })}
                    >
                        <View style={[
                            classes.option,
                            gender === 'M' && classes.selected,
                        ]}>
                            <Text style={classes.optionText}>Male</Text>

                            {
                                gender === 'M' && (<Icon name="ios-checkmark" size={20} color="#405DE6" />)
                            }
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={e => this.setState({ gender: 'F' })}
                    >
                        <View style={[
                            classes.option,
                            gender === 'F' && classes.selected,
                        ]}>
                            <Text style={classes.optionText}>Female</Text>

                            {
                                gender === 'F' && (<Icon name="ios-checkmark" size={20} color="#405DE6" />)
                            }
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
