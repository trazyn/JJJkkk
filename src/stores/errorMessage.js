
import { observable, action } from 'mobx';

class ErrorMessage {
    @observable hasError = false;
    @observable message;

    @action set(hasError, message) {
        self.hasError = hasError;
        self.message = message;
    }

    @action reset() {
        self.hasError = false;
        self.message = void 0;
    }
};

const self = new ErrorMessage();
export default self;
