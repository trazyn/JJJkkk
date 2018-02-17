
import axios from 'axios';
import { observable, action } from 'mobx';
import { AsyncStorage } from 'react-native';

import api from 'utils/api';

class User {
    @observable loading = false;
    @observable pending = false;
    @observable data = {};
    @observable favorite = [];

    @action async init() {
        var auth = await AsyncStorage.getItem('@AUTH');

        if (!auth) {
            return false;
        }

        self.loading = true;

        try {
            auth = JSON.parse(auth);

            if (Date.now() - 10 * 60 * 1000 > auth.expired) {
                // Refresh token
                let response = await api.post('/refresh', {
                    userid: auth.user.id,
                    refreshToken: auth.refreshToken,
                });

                if (!response.data.err) {
                    auth = response.data;
                    await AsyncStorage.setItem('@AUTH', JSON.stringify(auth));
                }
            }
            axios.defaults.headers.common['Authorization'] = auth.accessToken;

            await self.getUser();
            await self.getFavorite(auth.user.id);
        } catch (ex) {
            await AsyncStorage.removeItem('@AUTH');
        }

        self.loading = false;
    }

    @action async getUser() {
        var response = await api.get('/profile');
        var data = response.data;

        if (!data.err) {
            self.data = data;
        }
    }

    @action async getFavorite(id) {
        var response = await api.get(`/list/favorite/${id}`);
        var data = response.data;

        if (!data.err) {
            self.favorite = data;
        }
    }

    @action async addFavorite(item) {
        var response = await api.put('/favorite', item);
        var data = response.data;

        if (data.success) {
            self.favorite.push(item);
            return true;
        }

        return false;
    }

    @action async removeFavorite(id) {
        if (isNaN(+id)) {
            let item = self.favorite.find(e => e.jav === id);

            if (!item) return;

            id = item.id;
        }

        var response = await api.delete(`/favorite/${id}`);
        var data = response.data;

        if (data.success) {
            self.favorite = self.favorite.filter(e => e.id !== id);
            return true;
        }

        return false;
    }

    @action async follow(id) {
        var response = await api.put('/follower', { id });
        var data = response.data;

        if (data.success) {
            return true;
        }

        return false;
    }

    @action async unfollow(id) {
        var response = await api.delete(`/follower/${id}`);
        var data = response.data;

        if (data.success) {
            return true;
        }

        return false;
    }

    @action async update(fields) {
        var response = await api.post('/profile', fields);
        var data = response.data;

        if (!data.err) {
            self.data = data;
            return true;
        }

        return false;
    }

    @action async changePassword(password) {
        var response = await api.post('/change-password', password);
        var data = response.data;

        if (!data.err) {
            await AsyncStorage.removeItem('@AUTH');
            await AsyncStorage.setItem('@AUTH', JSON.stringify(data));
            self.data = data.user;
            return true;
        }

        return false;
    }

    @action async signin(username, password) {
        self.pending = true;

        var response = await api.post('/signin', {
            email: username,
            password,
        });
        var data = response.data;

        self.pending = false;

        if (!data.err) {
            await AsyncStorage.removeItem('@AUTH');
            await AsyncStorage.setItem('@AUTH', JSON.stringify(data));
            await self.init();
            return true;
        }

        return false;
    }

    @action async signup(form) {
        self.pending = true;

        var response = await api.put('/signup', form);
        var data = response.data;

        self.pending = false;

        if (!data.err) {
            await AsyncStorage.removeItem('@AUTH');
            await AsyncStorage.setItem('@AUTH', JSON.stringify(data));
            await self.init();
            return true;
        }

        return false;
    }

    @action async logout(password) {
        var response = await api.get('/logout');
        var data = response.data;

        if (data.success) {
            self.data = {};
            self.favorite = [];
            await AsyncStorage.removeItem('@AUTH');
            return true;
        }

        return false;
    }

    isFavorite(jav) {
        return !!self.favorite.find(e => e.jav === jav);
    }

    isLogin() {
        return !!self.data.id;
    }
}

const self = new User();
export default self;
