
import { observable, action } from 'mobx';
import api from 'utils/api';

class User {
    @observable loading = true;
    @observable data = {};
    @observable favorite = [];

    @action async query(id) {
        self.loading = true;

        var response = await api.get(`/user/${id}`);
        var data = response.data;

        self.data = data;
        self.loading = false;
    }

    @action async getFavorite(id) {
        var response = await api.get(`/list/favorite/${id}`);
        var data = response.data;

        self.favorite = data;
    }
}

const self = new User();
export default self;
