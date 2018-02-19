
import { observable, action } from 'mobx';
import api from 'utils/api';

class Bestreviews {
    @observable loading = true;
    @observable list = [];

    @action async getList() {
        self.loading = true;

        var response = await api.get('/list/best-reviews');

        self.list = response.data.list;
        self.loading = false;
    }
}

const self = new Bestreviews();
export default self;
