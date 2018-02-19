
import { observable, action } from 'mobx';

import randomeAvatar from 'utils/randomeAvatar';
import api from 'utils/api';
import me from './me';

class Detail {
    @observable loading = true;
    @observable data = {
        tags: [],
        stars: [],
        previews: [],
        comments: [],
        trailler: {},
    };

    @action async query(id) {
        self.loading = true;

        var response = await api.get(`/video/${id}`);
        var data = response.data;

        self.data = Object.assign(data, {
            liked: me.isFavorite(data.id),
            stars: data.stars.map(e => {
                e.image = e.image || randomeAvatar();
                return e;
            }),
            cover: data.cover.large,
        });
        self.loading = false;
    }
}

const self = new Detail();
export default self;
