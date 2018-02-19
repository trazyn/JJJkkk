
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
    recent: stores.search.recent,
    getRecent: stores.search.getRecent,
    clearRecent: stores.search.clearRecent,
    search: stores.search.query,
}))
@observer
export default class Search extends Component {
    componentWillMount() {
        this.props.getRecent();
    }

    state = {
        gender: false,
    };

    renderRecent(list) {
        return list.map((e, index) => {
            return (
                <TouchableOpacity
                    key={index}
                    style={classes.item}
                    onPress={ev => {
                        this.props.navigator.push({
                            screen: 'zzyzx.Detail',
                            navigatorStyle: {
                                navBarHidden: true,
                            },
                            passProps: {
                                params: {
                                    id: e.jav
                                }
                            }
                        });
                    }}
                >
                    <Text style={classes.keywords}>{e.keywords}</Text>
                </TouchableOpacity>
            );
        });
    }

    async search() {
        var { navigator, showError, recent, search } = this.props;
        var keywords = this.refs.input._lastNativeText;
        var cached = recent.find(e => e.keywords === keywords);
        var res;

        if (cached) {
            res = cached;
        } else {
            if (keywords) {
                res = await await search(keywords);

                if (!res) {
                    // Show error message
                    showError('Nothing be found.');
                    return;
                }
            }
        }

        navigator.push({
            screen: 'zzyzx.Detail',
            navigatorStyle: {
                navBarHidden: true,
            },
            passProps: {
                params: {
                    id: res.jav
                },
            }
        });
    }

    render() {
        var { navigator, recent, clearRecent } = this.props;

        return (
            <View style={classes.container}>
                <HeaderWithClose
                    title="Search"
                    navigator={navigator}
                />

                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 70,
                    marginBottom: 80,
                }}>
                    <Image
                        {...{
                            source: require('images/logo.png'),
                            style: classes.logo,
                        }}
                    />
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View style={classes.search}>
                        <TextInput
                            ref="input"
                            spellCheck={false}
                            autoCapitalize="none"
                            autoCorrect={false}
                            maxLength={20}
                            placeholder="TYPE FOR SEARCH..."
                            style={classes.input}
                            onBlur={e => this.search()}
                        />
                    </View>
                </View>

                {
                    recent.length > 0 && (
                        <View style={classes.list}>
                            {
                                this.renderRecent(recent)
                            }

                            <TouchableOpacity
                                onPress={e => clearRecent()}
                                style={classes.button}
                            >
                                <Text style={classes.buttonText}>CLEAR RECENT</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }
            </View>
        );
    }
}
