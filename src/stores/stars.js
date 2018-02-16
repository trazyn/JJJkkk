
import { observable, action } from 'mobx';
import api from 'utils/api';

class Stars {
    @observable loading = true;
    @observable list = [];

    @action async getList() {
        self.loading = true;

        var response = await api.get(`/list/stars`);
        var data = response.data;

        self.list = data.list;
        self.loading = false;
    }
}

const self = new Stars();
export default self;
