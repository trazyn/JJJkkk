
import { observable, action } from 'mobx';
import api from 'utils/api';

class videoPlayer {
    @observable loading = true;
    @observable source = {};

    @action async getVideo(no) {
        self.loading = true;

        var response = await api.get(`/video-source/${no}`);
        var data = response.data;

        self.source = {
            uri: data.src,
            type: 'm3u8',
        };
        self.loading = false;
    }

    @action setSource(url, type = 'mp4') {
        self.loading = true;
        self.source = {
            uri: url,
            type: 'mp4',
        };
        self.loading = false;
    }
}

const self = new videoPlayer();
export default self;
