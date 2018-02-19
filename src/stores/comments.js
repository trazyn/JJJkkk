
import { observable, action } from 'mobx';
import api from 'utils/api';
import uuid from 'uuid';
import me from './me';

class Comments {
    @observable loading = true;
    @observable list = [];
    @observable loadmore;

    @action async getList(index = 1, id, append) {
        if (index === 1) {
            self.loading = true;
        }

        var response = await api.get(`/list/comments/${id}/${index}`);
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
            self.loadmore = false;
        }

        self.loading = false;
    }

    @action async submit(id, comment) {
        var response = await api.put('/comment', {
            jav: id,
            content: comment,
        });
        var data = response.data;

        if (data.success) {
            self.list = [
                {
                    content: comment,
                    id: uuid.v4(),
                    avatar: me.data.avatar,
                    userid: me.data.id,
                    nickname: me.data.nickname,
                    create_time: Date.now(),
                },
                ...self.list.slice()
            ];
            return true;
        }

        return false;
    }
}

const self = new Comments();
export default self;
