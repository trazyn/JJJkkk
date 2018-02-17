
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
            trailler: {
                cover: data.cover.large,
                src: (data.source || {}).preview,
            },
            /* eslint-disable */
            comments: [
                {
                    "content": "眼镜控的福音，螳螂捕蝉黄雀在后的裸照胁迫四连发",
                    "create_time": "2015-02-28T03:07:26.000Z",
                    "nickname": "Mmmnnb",
                    "avatar": "https://i.imgur.com/5nu5rmI.png",
                    "id": "41"
                },
                {
                    "content": "冬月的眼镜娘造型感觉没什么味道。",
                    "create_time": "2015-03-12T10:51:36.000Z",
                    "nickname": "Kkkbbb",
                    "avatar": "https://i.imgur.com/WnA5Wmy.png",
                    "id": "42"
                },
                {
                    "content": "眼镜赞！！！！",
                    "create_time": "2016-03-21T09:32:39.000Z",
                    "nickname": "Ooiiii",
                    "avatar": "https://i.imgur.com/4nkSY5C.png",
                    "id": "43"
                }
            ]
            /* eslint-enable */
        });
        self.loading = false;
    }
}

const self = new Detail();
export default self;
