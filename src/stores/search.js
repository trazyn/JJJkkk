
import { observable, action } from 'mobx';
import { AsyncStorage } from 'react-native';
import api from 'utils/api';

class Search {
    @observable recent = [];

    @action async query(keywords) {
        var response = await api.get(`/search/${keywords}`);
        var data = response.data;

        if (!data.err) {
            self.addRecent(data);
            return data;
        }

        return false;
    }

    @action async getRecent() {
        var recent = [];

        try {
            recent = await AsyncStorage.getItem('@RECENT');

            if (recent) {
                recent = JSON.parse(recent);
            } else {
                recent = [];
            }
        } catch (ex) {
            recent = [];
            await AsyncStorage.removeItem('@RECENT');
        }

        self.recent = recent;
    }

    @action async addRecent(item) {
        var recent = self.recent;

        item.keywords = item.keywords.replace('+', ' ');

        try {
            recent.unshift(item);
            recent = recent.slice(0, 5);
            await AsyncStorage.setItem('@RECENT', JSON.stringify(recent));
        } catch (ex) {
            recent = [];
            await AsyncStorage.removeItem('@RECENT');
        }
        self.recent = recent;
    }

    @action async clearRecent() {
        self.recent = [];
    }
}

const self = new Search();
export default self;
