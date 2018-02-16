
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import {
    View,
    ListView,
    Animated,
} from 'react-native';

import theme from 'app/theme';
import classes from './classes';
import Header from './Header';
import Item from './Item';

@inject(stores => ({
    list: stores.bestreviews.list,
    getList: stores.bestreviews.getList,
}))
@observer
export default class BestReviews extends Component {
    componentWillMount() {
        this.props.getList();
    }

    state = {
        index: 1,
        showHeader: new Animated.Value(0)
    };

    render() {
        var { loading, list } = this.props;
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1.id !== r2.id
        });
        var dataSource = ds.cloneWithRows(list.slice());
        var showHeader = this.state.showHeader.interpolate({
            inputRange: [0, theme.fullHeight],
            outputRange: [1, 0],
        });

        if (loading) {
            return false;
        }

        return (
            <View style={classes.container}>
                <Header {...{
                    index: this.state.index,
                    max: list.length,
                    goto: () => {
                        this.props.navigator.push({
                            screen: 'zzyzx.LastestVideo',
                            navigatorStyle: {
                                navBarHidden: true,
                            },
                        });
                    },
                    style: {
                        opacity: showHeader,
                    },
                }} />

                <ListView
                    onScrollEndDrag={e => {
                        var index = e.nativeEvent.targetContentOffset.x / theme.fullWidth;

                        this.setState({
                            ...this.state,
                            index: index + 1
                        });
                    }}

                    showsHorizontalScrollIndicator={false}
                    horizontal={true}

                    decelerationRate={0}
                    snapToAlignment="start"
                    snapToInterval={theme.fullWidth}

                    automaticallyAdjustContentInsets={false}
                    scrollEventThrottle={16}
                    onEndReachedThreshold={1}

                    enableEmptySections={true}
                    dataSource={dataSource}
                    renderRow={(e, index) => {
                        return (
                            <Item
                                {...{
                                    ...e,
                                    key: index,
                                    navigator: this.props.navigator,
                                    stars: e.stars.slice(0),
                                    tags: e.tags.slice(0),
                                    reviews: e.reviews.slice(0),
                                    onScroll: Animated.event(
                                        [
                                            // Scroll to hide header
                                            {
                                                nativeEvent: {
                                                    contentOffset: {
                                                        y: this.state.showHeader
                                                    }
                                                }
                                            }
                                        ]
                                    ),
                                }}
                            />
                        );
                    }} />
            </View>
        );
    }
}
