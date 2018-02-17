
import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { inject, observer } from 'mobx-react/native';
import {
    View,
    StatusBar,
} from 'react-native';

import Loader from 'ui/Loader';
import BestReviews from './BestReviews';
import BestRated from './BestRated';
import LastestVideo from './LastestVideo';
import Menu from './Menu';
import MostWanted from './MostWanted';
import ListByTag from './ListByTag';
import ListByStar from './ListByStar';
import Detail from './Detail';
import User from './User';
import Favorite from './Favorite';
import Stars from './Stars';
import EditProfile from './EditProfile';
import EditProfileNickname from './EditProfile/Nickname';
import EditProfileLocation from './EditProfile/Location';
import EditProfileBio from './EditProfile/Bio';
import EditProfileGender from './EditProfile/Gender';
import EditProfilePassword from './EditProfile/Password';
import Signin from './Signin';
import Signup from './Signup';
import Search from './Search';

@inject(stores => ({
    loading: stores.me.loading,
}))
@observer
class Layout extends Component {
    componentWillMount() {
        StatusBar.setHidden(true);
    }

    render() {
        var { loading } = this.props;

        if (loading) {
            return <Loader show={true} />;
        }

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
    Navigation.registerComponent('zzyzx.ListByTag', () => Mixin(ListByTag), stores, Provider);
    Navigation.registerComponent('zzyzx.ListByStar', () => Mixin(ListByStar), stores, Provider);
    Navigation.registerComponent('zzyzx.Detail', () => Mixin(Detail), stores, Provider);
    Navigation.registerComponent('zzyzx.User', () => Mixin(User), stores, Provider);
    Navigation.registerComponent('zzyzx.Favorite', () => Mixin(Favorite), stores, Provider);
    Navigation.registerComponent('zzyzx.Stars', () => Mixin(Stars), stores, Provider);
    Navigation.registerComponent('zzyzx.EditProfile', () => Mixin(EditProfile), stores, Provider);
    Navigation.registerComponent('zzyzx.EditProfile.Nickname', () => Mixin(EditProfileNickname), stores, Provider);
    Navigation.registerComponent('zzyzx.EditProfile.Location', () => Mixin(EditProfileLocation), stores, Provider);
    Navigation.registerComponent('zzyzx.EditProfile.Bio', () => Mixin(EditProfileBio), stores, Provider);
    Navigation.registerComponent('zzyzx.EditProfile.Gender', () => Mixin(EditProfileGender), stores, Provider);
    Navigation.registerComponent('zzyzx.EditProfile.Password', () => Mixin(EditProfilePassword), stores, Provider);
    Navigation.registerComponent('zzyzx.Signin', () => Mixin(Signin), stores, Provider);
    Navigation.registerComponent('zzyzx.Signup', () => Mixin(Signup), stores, Provider);
    Navigation.registerComponent('zzyzx.Search', () => Mixin(Search), stores, Provider);
};
