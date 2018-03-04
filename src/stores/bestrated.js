
import { observable, action } from 'mobx';
import api from 'utils/api';

class BestRated {
    @observable loading = true;
    @observable list = [];
    @observable type = 'month';
    @observable grid = false;
    @observable loadmore;

    @action async getList(index = 1, type = self.type, append) {
        self.loading = true;
        self.type = type;

        var response = await api.get(`/list/best-rated/${type}/${index}`);
        var data = response.data;

        if (append) {
            self.list.push(...data.list);
        } else {
            self.list = data.list;
        }

        if (data.nextHref) {
            self.loadmore = () => {
                if (self.loading) return;

                self.getList(++index, type, true);
            };
        } else {
            self.loadmore = false;
        }

        self.loading = false;
    }

    @action changeViewMode() {
        self.grid = !self.grid;
    }
}

const self = new BestRated();
export default self;
