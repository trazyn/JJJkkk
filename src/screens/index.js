
import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import {
    View,
    StatusBar,
} from 'react-native';

import BestReviews from './BestReviews';
import BestRated from './BestRated';
import LastestVideo from './LastestVideo';
import Menu from './Menu';
import MostWanted from './MostWanted';

class Layout extends Component {
    componentWillMount() {
        StatusBar.setHidden(true);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.props.children}
            </View>
        );
    }
}

const Mixin = (Component) => {
    return (props) => {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};

export default (stores, Provider) => {
    Navigation.registerComponent('zzyzx.BestReviews', () => Mixin(BestReviews), stores, Provider);
    Navigation.registerComponent('zzyzx.BestRated', () => Mixin(BestRated), stores, Provider);
    Navigation.registerComponent('zzyzx.LastestVideo', () => Mixin(LastestVideo), stores, Provider);
    Navigation.registerComponent('zzyzx.Menu', () => Mixin(Menu), stores, Provider);
    Navigation.registerComponent('zzyzx.MostWanted', () => Mixin(MostWanted), stores, Provider);
};
