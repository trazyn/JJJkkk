
import { observable, action } from 'mobx';
import api from 'utils/api';

class ListByTag {
    @observable loading = true;
    @observable list = [];
    @observable loadmore;

    @action async getList(index = 1, id, append) {
        self.loading = true;

        var response = await api.get(`/list/by/tag/${id}/${index}`);
        var data = response.data;

        if (append) {
            self.list.push(...data.list);
        } else {
            self.list = data.list;
        }

        if (data.nextHref) {
            self.loadmore = () => {
                if (self.loading) return;

                self.getList(++index, id, true);
            };
        } else {
            self.loadmore = Function;
        }

        self.loading = false;
    }
}

const self = new ListByTag();
export default self;
