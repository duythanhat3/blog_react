import {showLoading, hideLoading} from 'react-redux-loading-bar'
import {dispatch} from '../store'

export default {
    start: () => {
        dispatch(showLoading());
    },
    end: () => {
        dispatch(hideLoading());
    },
};
